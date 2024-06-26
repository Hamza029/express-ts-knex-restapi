import { Knex } from "knex";

const addressSchema = (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary().unique()
    table.string('street').notNullable().unique()
    table.string('suburb').notNullable()
    table.string('city').notNullable()
    table.string('code').notNullable()
    table.timestamps(true, true)
}

export default addressSchema;
