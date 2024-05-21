// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// configuração do banco de dados
export const development = {
  client: 'mysql2',
  connection: {
    database: 'myapp',
    user: 'root',
    password: 'root',
    host: '127.0.0.1'
  }
};
