import express from 'express';

import { UserController } from './user.controller';

export const router = express.Router();

router
    .get('/', UserController.get)
    .post('/', UserController.create)
    .put('/:id', UserController.updateById)
    .delete('/:id', UserController.deleteById);