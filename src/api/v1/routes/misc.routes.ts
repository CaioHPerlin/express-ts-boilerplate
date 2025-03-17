import { ping } from '../controllers/misc.controller';
import { Router } from 'express';

const misc: Router = Router();

misc.get('/ping', ping);

export default misc;
