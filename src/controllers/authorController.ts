import { Request, Response } from "express";
import Author from "../models/AuthorModel";

// Get all authors and populate books
const getAllAuthors = async (req: Request, res: Response): Promise<void> => {
  try {
    const authors = await Author.find().populate("books");
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch authors", error });
  }
};

// Get a single author by ID
const getAuthorById = async (req: Request, res: Response): Promise<void> => {
  try {
    const author = await Author.findById(req.params.id).populate("books");
    if (!author) {
      res.status(404).json({ message: "Author not found" });
      return;
    }
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch author", error });
  }
};

// Create a new author
const createAuthor = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, country, books } = req.body;
    const newAuthor = await Author.create({ name, country, books });
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(400).json({ message: "Failed to create author", error });
  }
};

// Update an author's name
const updateAuthor = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );

    if (!updatedAuthor) {
      res.status(404).json({ message: "Author not found" });
      return;
    }

    res.status(200).json(updatedAuthor);
  } catch (error) {
    res.status(400).json({ message: "Failed to update author", error });
  }
};

// Delete an author by ID
const deleteAuthor = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id);

    if (!deletedAuthor) {
      res.status(404).json({ message: "Author not found" });
      return;
    }

    res.status(200).json({ message: "Author deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete author", error });
  }
};

// Export all controller functions
export {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
