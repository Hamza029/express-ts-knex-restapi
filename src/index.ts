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