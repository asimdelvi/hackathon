import express from "express";
import mongoose from "mongoose";
import { City } from "./models/city.js";
import { Hotel } from "./models/hotel.js";
const app = express();

// TODO: add password to env
mongoose
  .connect(
    "mongodb+srv://asimdelvi:ufvc6PBZ8udJaupf@cluster0.d53kxrf.mongodb.net/guide?retryWrites=true&w=majority"
  )
  .then(() => console.log("db connected"));

app.get("/", (req, res) => {
  res.send("HI");
});

app.get("/add", async (req, res) => {
  const h1 = await Hotel.create({ hotelname: "Hotel One" });
  const h2 = await Hotel.create({ hotelname: "Hotel Two" });
  const city = await City.create({ cityname: "First City", hotels: [h1, h2] });

  res.send(city);
});

app.listen(3000, () => console.log("Listening"));
