import { Pool } from 'pg';
import Environment from '../utils/environment';

const { user, host, database, password, port } = Environment.postgres;

const pool = new Pool({
    user,
    host,
    database,
    password,
    port
});

export default pool;