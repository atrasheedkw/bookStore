import { Request, Response } from "express";
import Book from "../models/BookModel";

// Get all books (populate author and category)
const getAllBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const books = await Book.find().populate("author").populate("category");
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch books", error });
  }
};

// Get book by ID (populate author and category)
const getBookById = async (req: Request, res: Response): Promise<void> => {
  try {
    const book = await Book.findById(req.params.id)
      .populate("author")
      .populate("category");
    if (!book) {
      res.status(404).json({ message: "Book not found" });
      return;
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch book", error });
  }
};

// Create a new book
const createBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, author, category } = req.body;
    const cover = req.file?.filename;

    const newBook = await Book.create({ title, author, category, cover });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: "Failed to create book", error });
  }
};

// Update book details
const updateBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    if (!updatedBook) {
      res.status(404).json({ message: "Book not found" });
      return;
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: "Failed to update book", error });
  }
};

// Delete a book
const deleteBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      res.status(404).json({ message: "Book not found" });
      return;
    }
    res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete book", error });
  }
};

export { getAllBooks, getBookById, createBook, updateBook, deleteBook };
