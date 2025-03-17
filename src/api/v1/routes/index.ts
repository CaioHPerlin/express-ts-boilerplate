import misc from './misc.routes';
import { Router } from 'express';

const v1: Router = Router();

v1.use('/misc', misc);

export default v1;
