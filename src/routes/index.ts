import {Router} from 'express';
import defaultRouter from './default.routes';
import flagQuizRouter from './flagQuiz.routes';

const routes = Router();

routes.use('/', defaultRouter);
routes.use('/flag-quiz', flagQuizRouter)

export default routes;