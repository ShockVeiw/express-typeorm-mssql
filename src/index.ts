import express, { Express } from 'express';

import { AppDataSource  } from './db';
import { router as userRouter } from './api/user/user.route';

AppDataSource .initialize()
    .then((res) => {
        const app: Express = express();
        const port = 3000;

        app.use(express.json());

        app.use('/user', userRouter);

        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
        });
    })
    .catch(console.log);