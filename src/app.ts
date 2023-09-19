import express, {Express} from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import router from './routes';

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', router);

export default app;