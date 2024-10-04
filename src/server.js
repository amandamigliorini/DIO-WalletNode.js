 // import is only possible whe a type:module is added at pacage.json 
import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import { connectDb } from "./config/database.js";

 const app = express();
 connectDb();
 //app use json before app use route because the route will use json, so it needs to be available
 app.use(json());

 app.use(authRouter);

 const port = process.env.PORT;

 app.listen(port, () => console.log(`Server is listening in port ${port}`))