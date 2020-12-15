module.exports = {
  HOST: "freedb.tech",
  DB: "freedbtech_tarjetero",
  PASSWORD: "tarjetero_password",
  USER: "freedbtech_user_tarjetero",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 1,
    adquire: 30000,
    idle: 100000,
  },
};
