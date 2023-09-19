import express, {Express} from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import router from './routes';
import { firebaseConfig } from './config/firebase.config';
import { initializeApp } from "firebase-admin/app";

// Initialize Firebase
initializeApp(firebaseConfig);

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', router);

app.get('/', (req, res) => {
  res.status(200).send('It works')
})

export default app;