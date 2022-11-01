import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();
const port = 3000;

// routes
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});