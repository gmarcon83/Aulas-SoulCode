module.exports = {
  development: {
    database: {
      host: "localhost",
      port: 3306,
      name: "projetoservicos",
      dialect: "mysql",
      user: "root",
      password: "",
    },
  },
  production: {
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
    },
  },
};
