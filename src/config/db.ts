import Knex from 'knex';
import knexFile from './knexfile'

const db = Knex(knexFile.dev);

export default db;