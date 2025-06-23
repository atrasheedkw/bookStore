import express from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController";
import upload from "../middleware/upload";

const BookRouter = express.Router();

BookRouter.get("/", getAllBooks);
BookRouter.get("/:id", getBookById);
BookRouter.post("/", upload.single("cover"), createBook); // POST with cover image upload
BookRouter.put("/:id", updateBook);
BookRouter.delete("/:id", deleteBook);

export default BookRouter;
