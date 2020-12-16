import "@babel/polyfill";
const app = require("./app");
//test
// iniciar server
const main = () => {
  app.listen(app.get("PORT"), () => {
    console.log(`servidor andando en: ${app.get("PORT")}`);
  });
};

main();
