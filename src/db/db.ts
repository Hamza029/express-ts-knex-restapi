import Knex from 'knex';
import knexFile from './knexfile'

const db = Knex(knexFile);

export default db;