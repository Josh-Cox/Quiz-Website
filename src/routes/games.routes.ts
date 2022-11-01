import {Router} from 'express';
import path from 'path';

const gamesRouter = Router();

gamesRouter.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/html/games.html'));
});

export default gamesRouter;