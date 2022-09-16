import express, { Request, Response, Router } from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import appRoutes from "./app/routes/Api";
import path from "path";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/api", appRoutes);

mongoose.connect("mongodb://localhost:27017/tutorial", (err) => {
  if (err) {
    console.log("Not connected to the Database : " + err);
  } else {
    console.log("Successfully connected to MongoDB");
  }
});

// app.get('/' , (req,res)=>{
//     res.send("hello world");
// })
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/app/views/index.html"));
});
let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server running on port " + port);
});
