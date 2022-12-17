import express from "express";
import cors from "cors";

// import routes
import Router from "./app/routes/routes.js";

// init express
const app = express();

// use express json
app.use(express.json());


app.use(cors());
app.use(Router);

// PORT
app.listen(5000, () => {
    console.log("Server running successfully");
});