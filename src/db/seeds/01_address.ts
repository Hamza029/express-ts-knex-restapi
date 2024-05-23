import { Knex } from "knex";
import AddressType from './../../interfaces/Address';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('addresses').del();

    // Inserts seed entries
    await knex<AddressType>('addresses').insert([
        {
            id: 1,
            street: "first",
            suburb: "sub",
            city: "city",
            code: '0001'
        },
    ]);
};
