import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import dotenv from 'dotenv';

import { entities } from './entities';

dotenv.config();

const options: DataSourceOptions & SeederOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities,
    seeds: ['src/database/seeds/**/*{.ts,.js}'],
    factories: ['src/database/factories/**/*{.ts,.js}']
};

export const AppDataSource = new DataSource(options);


export const dbConnection = () => {
  AppDataSource.initialize()
    .then(async () => {
      console.log('Data Source has been initialized!');

    })
    .catch((error) => {
      console.error('Error during Data Source initialization:', error);
    });
};
