"use client";
import { onValue, ref, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { FirebaseDB } from "../../../FirebaseConfig";

interface FormModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const UserReviewSubmit = ({ isOpen, closeModal }: FormModalProps) => {
  if (!isOpen) return null;

  const [title, setTitle] = useState(""); //title of the book their submiting a review for
  const [description, setDescription] = useState("");
  const [name, setName] = useState(""); //author name
  const [email, setEmail] = useState(""); // user email

  const [bookRef, setBookRef] = useState(0);

  useEffect(() => {
    const unsubscribe = onValue(ref(FirebaseDB, "Books"), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setBookRef(Object.keys(data).length + 1);
      }
    });

    // Clean up listener when component unmounts
    return () => unsubscribe();
  }, []);

  const writeToDB = (title: string, description: string, name: string) => {
    const bookId = bookRef.toString(); // Generate the new book ID
    set(ref(FirebaseDB, "Books/" + bookId), {
      title: title,
      description: description,
      name: name,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Form submitted!");
    closeModal();
    if (title === "" || description === "" || name === "") {
      alert("Make Sure None of The Fields Are Empty");
    } else {
      writeToDB(title, description, name);

      setTitle("");
      setDescription("");
      setName("");
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={closeModal}
    >
      <div
        className="bg-isabelline-900 p-10 rounded-lg shadow-lg w-1/3"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <h2 className="text-3xl font-semibold mb-6 text-rich_black font-serif">
          Enter Book To Database
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="Book"
              className="block text-sm font-medium font-serif text-rich_black"
            >
              Book:
            </label>
            <input
              type="text"
              id="Book"
              name="Book"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="mt-2 p-3 border text-rich_black-300 border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="author"
              className="block text-sm font-medium font-serif text-rich_black"
            >
              Author:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="mt-2 p-3 border text-rich_black-300 border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm  font-medium font-serif text-rich_black"
            >
              Description:
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="mt-2 p-3 border text-rich_black-300 border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium font-serif text-rich_black"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="mt-2 p-3 border text-rich_black-300 border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-3 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserReviewSubmit;
