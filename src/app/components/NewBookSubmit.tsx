"use client";
import { FormEvent, useEffect, useState } from "react";
import { ref, set, onValue } from "firebase/database";
import { FirebaseDB } from "../../../FirebaseConfig";

interface Book {
  title: string;
  description: string;
  name: string;
}

export default function NewBookSubmit() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
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

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setTitle("");
    setDescription("");
    setName("");

    writeToDB(title, description, name);
  };

  return (
    <div>
      <form
        className="flex flex-col p-3 bg-silver-700 mb-5 space-y-5 rounded-lg"
        onSubmit={handleSubmit}
      >
        <p>{title}</p>
        <input
          className="text-black p-3 font-serif text-lg rounded-md placeholder:text-black bg-silver-500"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="text-black p-3 font-serif text-lg rounded-md placeholder:text-black bg-silver-500"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="text-black p-3 font-serif text-lg rounded-md placeholder:text-black bg-silver-500"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex justify-center w-full mt-3">
          <button
            type="submit" // The button now submits the form
            className="bg-silver-400 font-serif text-black px-3 rounded-md shadow-md"
          >
            SET
          </button>
        </div>
      </form>
    </div>
  );
}
