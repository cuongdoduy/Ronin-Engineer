import airport from './api/airports';
import express from 'express';
const routes = express.Router();

routes.use('/airport', airport);    
routes.get('/', (req: express.Request, res: express.Response) => {
    res.send('API');
});
export default routes;
