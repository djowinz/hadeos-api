require('dotenv').config(); 
const defaultPort = 4000;

interface Environment {
  apollo: {
    introspection: boolean,
    playground: boolean
  },
  postgres: {
    host: string;
    user: string;
    password: string;
    database: string;
    port: number;
  },
  migrate: boolean;
  port: number|string;
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true'
  },
  postgres: {
    host: process.env.PGHOST || 'localhost',
    user: process.env.PGUSER || '',
    password: process.env.PGPASSWORD || '',
    database: process.env.PGDATABSE || 'public',
    port: Number(process.env.PGPORT) || 5432,
  },
  migrate: process.env.MIGRATE === 'true',
  port: process.env.PORT || defaultPort
};

export default environment;