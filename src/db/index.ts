import { DataSource } from 'typeorm';

import { User } from './entities/User';

export const AppDataSource  = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "sa",
    password: "password",
    database: "test_db",
    synchronize: true,
    entities: [User]
});