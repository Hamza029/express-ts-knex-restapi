import { Knex } from 'knex';

const userSchema = (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary().unique()
    table.string('name').notNullable()
    table.string('surname').notNullable()
    table.string('email').unique().notNullable()
    table.string('gender').notNullable()
    table.date('DOB').notNullable()
    table.string('contact_number')
    table.string('role').notNullable().defaultTo('guests')
    table.string('password').notNullable()
    table.integer('address_id').unsigned().notNullable()
    table.foreign('address_id').references('addresses.id')
    table.timestamps(true, true)
}

export default userSchema;
