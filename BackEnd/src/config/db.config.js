module.exports = {
  HOST: "localhost",
  DB: "tarjetero",
  PASSWORD: "",
  USER: "root",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 1,
    adquire: 30000,
    idle: 100000,
  },
};
