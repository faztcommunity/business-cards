const app = require("./app");

// iniciar server
const main = () => {
  app.listen(app.get("PORT"), () => {
    console.log(`servidor andando en: ${app.get("PORT")}`);
  });
};

main();
