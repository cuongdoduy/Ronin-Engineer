import Airport from '../database/models/airport';
import NodeCache from 'node-cache';
export default class AirportCache {
  private static airportCache = new NodeCache();

  public static getAirport(id: string) {
    const airport = AirportCache.airportCache.get(id);
    if (airport) {
      console.log('Cache hit');
      return airport;
    } 
    console.log('Cache miss');
    return null;
  }

  public static addAirport(id: string, airport: Airport) {
    AirportCache.airportCache.set(id, airport, 10);
  }
}
