import express from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getBooksByAuthor,
  getBooksByCategory,
  searchBooksByTitle,
} from "../controllers/bookController";
import upload from "../middleware/upload";

const BookRouter = express.Router();

BookRouter.get("/", getAllBooks);
BookRouter.get("/:id", getBookById);
BookRouter.get("/author/:authorId", getBooksByAuthor);
BookRouter.get("/category/:catId", getBooksByCategory);
BookRouter.get("/search/:title", searchBooksByTitle);
BookRouter.post("/", upload.single("cover"), createBook); //post with cover image
BookRouter.put("/:id", updateBook);
BookRouter.delete("/:id", deleteBook);

export default BookRouter;
