import mongoose, { Schema, model } from "mongoose";

//schema
const AuthorSchema = new Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    //link to book model, one-to-many
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],
  },
  {
    timestamps: true,
  }
);

//model
const Author = model("author", AuthorSchema);

export default Author;
