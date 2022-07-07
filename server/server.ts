import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { mealhistoryRouter } from './src/routers';

const app = express();
const port = 3001;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.use('/meals', mealhistoryRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
