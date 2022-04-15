import { AppDataSource } from '../../db';
import { User } from '../../db/entities/User';

export class UserService {
    static userRepository = AppDataSource.getRepository(User);

    static async create(data: any) {
        const user = new User();

        user.firstName = data.firstName
        user.lastName = data.lastName
        user.isActive = data.isActive

        await this.userRepository.save(user);

        return user.id;
    }

    static async get() {
        const users = await this.userRepository.find();

        return users;
    }

    static async updateById(id: number, data: any) {
        const user = await this.userRepository.update({ id }, data);

        return user;
    }

    static async deleteById(id: number) {
        await this.userRepository.delete({ id });
    }
}