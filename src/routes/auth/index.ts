import express, {Router} from 'express';
import { signIn, signUp, resetPassword, confirmResetPassword, signOut } from '../../controllers/auth';
import { validateAuth } from '../../helpers/auth';

const authRoute: Router = express.Router();

authRoute.post('/sign-in', signIn);
authRoute.post('/sign-up', signUp);
authRoute.post('/reset-password', resetPassword);
authRoute.post('/confirm-reset-password', confirmResetPassword);
authRoute.post('/sign-out', validateAuth, signOut);

export default authRoute;
