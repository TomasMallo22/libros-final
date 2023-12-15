import express from "express";
import bodyParser from "body-parser"; 
import router from "./routes/libroRoutes.js";
import sequelize from "./connection/sequelize.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use("/libros", router);

await sequelize.sync({ force: true });

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});