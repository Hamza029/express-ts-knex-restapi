import Knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

// type DbEnvironments = 'dev' | 'test' | 'stg' | 'prod';
type DbEnvironments = 'dev';

const envs: Record<DbEnvironments, Knex.Knex.Config> = {
    dev: {
        client: 'mysql2',
        connection: {
            database: process.env.DB_NAME || 'TestDB',
            host: process.env.DB_SERVICE_HOST || 'localhost',
            port: Number(process.env.DB_SERVICE_PORT) || 3306,
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '!Hamza029',
        },
        migrations: {
            directory: './migrations'
        },
        seeds: {
            directory: './seeds'
        },
        debug: true,
    },
}

const config = envs.dev;

export default config;