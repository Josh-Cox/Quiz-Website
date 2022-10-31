import {Router} from 'express';
import path from 'path';

const defaultRouter = Router();

defaultRouter.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/html/index.html'));
});

export default defaultRouter;