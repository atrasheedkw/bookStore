import mongoose, { Schema, model } from "mongoose";

//schema

const CategorySchema = new Schema({
  name: { type: String, required: true },
  //link to book model, one-to-many
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],
});

const Category = model("category", CategorySchema);

export default Category;
