import Knex from 'knex';

// type DbEnvironments = 'dev' | 'test' | 'stg' | 'prod';
type DbEnvironments = 'dev';

const envs: Record<DbEnvironments, Knex.Knex.Config> = {
    dev: {
        client: 'mysql2',
        connection: {
        database: process.env.DATA_API_DB_NAME || 'TestDB',
        host: process.env.DATA_API_DB_SERVICE_HOST || 'localhost',
        // port: parseInt(process.env.DATA_API_DB_SERVICE_PORT),
        port: 3306,
        user: process.env.DATA_API_DB_USER || 'root',
        password: process.env.DATA_API_DB_PASSWORD || 'mypass',
        },
        migrations: {
        tableName: 'knex_migrations',
        },
        debug: true,
    },
}

export default envs