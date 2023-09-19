import express, {Router} from 'express';
import { getUserById } from '../../controllers/user';

const userRoute: Router = express.Router();

userRoute.get('/current', getUserById);
userRoute.get

export default userRoute;
