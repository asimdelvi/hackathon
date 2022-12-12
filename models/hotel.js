import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  hotelname: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const Hotel = mongoose.model("Hotel", hotelSchema);
