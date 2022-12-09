import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  hotelname: {
    type: String,
    required: true,
  },
});

export const Hotel = mongoose.model("Hotel", hotelSchema);
