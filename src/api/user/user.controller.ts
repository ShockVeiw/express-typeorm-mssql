import { Request, Response } from 'express';

import { UserService } from './user.service';

export class UserController {
    static async create(req: Request, res: Response) {
        const userId = await UserService.create(req.body);

        res.send({ id: userId });
    }

    static async get(req: Request, res: Response) {
        const users = await UserService.get();

        res.send(users);
    }

    static async updateById(req: Request, res: Response) {
        const user = await UserService.updateById(+req.params.id, req.body);

        res.send(user);
    }

    static async deleteById(req: Request, res: Response) {
        await UserService.deleteById(+req.params.id);

        res.send('Success');
    }
}