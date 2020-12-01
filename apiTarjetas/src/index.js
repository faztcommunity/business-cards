import express from "express";
import morgan from "morgan";

const app = new express();

app.use(morgan("dev"));
app.listen(3000);

console.log('running on 3000');