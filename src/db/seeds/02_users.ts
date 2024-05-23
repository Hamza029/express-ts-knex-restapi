import { Knex } from "knex";
import UserType from './../../interfaces/User';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync('mypass', salt);

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('users').del();

    // Inserts seed entries
    await knex<UserType>('users').insert([
        {
            id: 1,
            name: 'admin',
            surname: 'admin',
            gender: 'admin',
            email: 'admin@gmail.io',
            DOB: new Date('2002-06-30'),
            contact_number: '0987654321',
            role: 'admin',
            password: await bcrypt.hash('mypass', salt),
            address_id: 1,
        }
    ]);
};
