import express from 'express';
import AirportCache from '../../cache/airportcache';
import Airport from '../../database/models/airport';
const airports = express.Router();


airports.get('/:id', async (req: express.Request, res: express.Response) => {
  try {
      const airport = await AirportCache.getAirport(req.params.id);
      if (!airport) {
        const airport = await Airport.getAirport(req.params.id);
        AirportCache.addAirport(req.params.id, airport);
      }
      res.status(200).json(airport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default airports;
