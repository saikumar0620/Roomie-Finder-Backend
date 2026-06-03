import express from "express";// this is the one way to import express in ES6
//  module syntax, which is enabled by setting "type": "module" in package.json

// const express= require("express"); this is the common way to import express
//  in CommonJS module syntax, which is the default in Node.js

import notFoundHandler from "./middleWares/notFoundHandler.js";
import globalErrorHandler from "./middleWares/globalErrorHandler.js";
import dotenv from "dotenv";
dotenv.config();
const PORT= process.env.PORT || 8000; // use the PORT from .env file or default to 8000
 const app=express();

 app.use(express.json()); // to parse JSON request bodies 



 app.get("/healthcheck", (req, res) => {
  res.status(200).json({
    message: "Server is healthy",
  });
 });

 app.use(notFoundHandler); // this will handle all the routes that are not defined above in urls

 app.use(globalErrorHandler); // this will handle all the errors that are thrown in the routes above

app.listen(8000,()=>{
    console.log("server is running at port 8000 ");
})