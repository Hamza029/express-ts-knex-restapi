import type { Knex, SchemaBuilder } from "knex";
import Address from './schemas/Address';
import User from './schemas/User';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('addresses', Address); // Address Schema
    await knex.schema.createTable('users', User); // User Schema
};


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('users');
    await knex.schema.dropTableIfExists('addresses');
};

