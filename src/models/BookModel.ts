import mongoose, { Schema, model } from "mongoose";

//schema

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    //link to author model, one-to-one
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
    },
    //link to category model, one-to-one
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    cover: { type: String },
  },
  {
    timestamps: true,
  }
);

//model
const Book = model("book", BookSchema);

export default Book;
