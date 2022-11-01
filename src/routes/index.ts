import {Router} from 'express';
import defaultRouter from './default.routes';
import flagQuizRouter from './flag-quiz.routes';
import gamesRouter from './games.routes';
import numberMemoryRouter from './number-memory.routes';
import numberMemory from './number-memory.routes';

const routes = Router();

routes.use('/', defaultRouter);
routes.use('/flag-quiz', flagQuizRouter);
routes.use('/games', gamesRouter);
routes.use('/number-memory', numberMemoryRouter);

export default routes;