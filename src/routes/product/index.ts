import express, {Router} from 'express';
import { getAllProducts } from '../../controllers/product';

const productRoute: Router = express.Router();

productRoute.get('/', getAllProducts);

export default productRoute;
