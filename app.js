import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import { City } from "./models/city.js";
import { Hotel } from "./models/hotel.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { router as CityRouter } from "./routers/city.js";
import { router as HotelRouter } from "./routers/hotel.js";
import { router as PlaceRouter } from "./routers/place.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// * Middlewares
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

mongoose
  .connect(
    `mongodb+srv://asimdelvi:${process.env.MONGODB_PASSWORD}@cluster0.d53kxrf.mongodb.net/guide?retryWrites=true&w=majority`
  )
  .then(() => console.log("db connected"));
mongoose.set("strictQuery", false);
// * Routes
app.use("/city", CityRouter);
app.use("/city/:id/hotel", HotelRouter);
app.use("/city/:id/place", PlaceRouter);

app.all("*", () => {
  res.send("Page not found");
});

app.listen(3000, () => console.log("Listening"));
