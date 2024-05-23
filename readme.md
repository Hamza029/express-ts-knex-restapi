# Express with TypeScript, MySQL2 and Knex.js starter project guide

## First initialize Express with TypeScript

Just follow the instructions from my [setup express with typescript guide](https://github.com/Hamza029/TypeScript-with-Express-Setup-Guide).

## Install necessary dependencies

```bash
npm i mysql2 knex
npm i -D @types/mysql
```

## Create Databse connection files

- Create a folder named `config` inside `src` folder.
- In the `config` folder create 2 files named `knexfile.ts` and `db.ts`.
- Copy the following codes in `knexfile.ts`:

    ```ts
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
    ```

- copy the following codes in `db.ts`:
    ```ts
    import Knex from 'knex';
    import knexFile from './knexfile'

    const db = Knex(knexFile.dev);

    export default db;
    ```

- Try the following demo code in `index.ts`:

    ```ts
    import dotenv from 'dotenv';
    import express, { Express, Request, Response } from 'express';
    import db from './config/db';

    dotenv.config();

    const app: Express = express();
    const port = process.env.PORT || 3000;

    interface User {
        id: number;
        name: string;
    };

    const fn = async () => {
        try {
            const val = await db<User>('users').where('id', 1).first();
            if(val) {
                console.log(val, val.id, val.name);
            } else {
                throw new Error("requested user doesn't exist");
            }
        } catch (err) {
            console.log(err);
        }
    };

    fn();

    app.get('/', (req: Request, res: Response) => {
        res.send('Express + TypeScript Server');
    });

    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
    ```
