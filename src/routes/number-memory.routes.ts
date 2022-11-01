import {Router} from 'express';
import path from 'path';

const numberMemoryRouter = Router();

numberMemoryRouter.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/html/number-memory.html'));
});

export default numberMemoryRouter;