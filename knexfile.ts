// Update with your config settings.
import 'dotenv/config';
import { Knex } from 'knex';

const config: Knex.Config = {
    client: 'mysql2',
    connection: process.env.DB_URI,
    migrations:{
        directory: './migrations'
    },
}

export default config;