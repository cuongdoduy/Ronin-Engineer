import express from 'express';
import routes from './routes/index';
import cors from 'cors';

const app: express.Application = express();
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port: number = 3000; // Default port

// Use routes
app.use('/api', routes);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, (): void => {
  console.log(`App listening on port ${port}`);
});
export default app;
