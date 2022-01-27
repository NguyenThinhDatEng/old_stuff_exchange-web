module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '	john.db.elephantsql.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'old_stuff_exchange-web'),
      user: env('DATABASE_USERNAME', '	vxgrmifg'),
      password: env('DATABASE_PASSWORD', 'T9TZVe3I0iizj04HdrmewHz--E2Nxuy6'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
