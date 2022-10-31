import {Router} from 'express';
import path from 'path';

const flagQuizRouter = Router();

flagQuizRouter.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/html/flag-quiz.html'));
});

export default flagQuizRouter;