import express from "express";
import {
  createAuthor,
  deleteAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
} from "../controllers/authorController";

const AuthorRouter = express.Router();

AuthorRouter.get("/", getAllAuthors);
AuthorRouter.get("/:id", getAuthorById);
AuthorRouter.post("/", createAuthor);
AuthorRouter.put("/:id", updateAuthor);
AuthorRouter.delete("/:id", deleteAuthor);

export default AuthorRouter;
