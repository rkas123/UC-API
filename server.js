import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import schedule from "node-schedule";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

import fetch from "./utils/fetch.js";
import listRouter from "./routes/contest.js";
import intialize from "./utils/intialize.js";

global.isFetchPossible = "Yes";
global.idToResource = new Map();
global.resourceToId = new Map();

if (idToResource.size == 0) {
  intialize();
}

// schedule.scheduleJob(process.env.cron1, () => {
//   isFetchPossible = "No";
// });
schedule.scheduleJob(process.env.cron, () => {
  fetch();
});
app.use("/list", listRouter);

mongoose
  .connect(process.env.mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server Running`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.set("useFindAndModify", false);
