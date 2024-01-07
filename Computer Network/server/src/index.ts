import dgram from 'node:dgram';
import * as Redis from 'redis';

const server = dgram.createSocket('udp4');

const map = new Map();
map.set('www.google.com', '127.0.0.1');
map.set('www.facebook.com', '127.0.0.2');
map.set('www.twitter.com', '127.0.0.3');

server.on('error', err => {
  console.error(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', async (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  // return domain name and ipv4 address
  const client = await Redis.createClient();
  await client.connect();
  const ipv4 = await client.get(msg.toString());
  if (ipv4) {
    console.log('Cache hit');
    server.send(
      `Domain name: ${msg} | IPV4: ${ipv4}`,
      rinfo.port,
      rinfo.address
    );
    return;
  }
  const ip = map.get(msg.toString());
  console.log('Çache miss');
  if (ip) {
    server.send(`Domain name: ${msg} | IPV4: ${ip}`, rinfo.port, rinfo.address);
    await client.set(msg.toString(), ip, {
      EX: 10,
      NX: true
    });
    return;
  }
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(5000);
