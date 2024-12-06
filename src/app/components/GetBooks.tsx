import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database"; // Firebase Realtime Database methods
import { FirebaseDB } from "../../../FirebaseConfig";

interface Book {
  title: string;
  description: string;
  name: string;
}

const GetBooks = () => {
  const [books, setBooks] = useState<Book[]>([]); // State to hold books data
  const [loading, setLoading] = useState<boolean>(true); // State to track loading state

  useEffect(() => {
    const dbRef = ref(FirebaseDB, "Books"); // Reference to the "Books" node in the Firebase DB
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const booksArray: Book[] = Object.keys(data).map((key) => ({
          title: data[key].title,
          description: data[key].description,
          name: data[key].name,
        }));

        setBooks(booksArray);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a more advanced loading indicator if needed
  }

  return (
    <div>
      {/* Display number of books */}
      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        books.map((book) => (
          <button
            key={book.title} // Using book.title as the unique key
            className="w-full mb-5"
            onClick={() => {
              console.log(book.title); // Handle the click event (for example, show details of the book)
            }}
          >
            <div className="bg-isabelline-400 p-5 rounded-lg justify-items-start">
              <div className="flex flex-row mb-4 items-end space-x-2">
                <h1 className="text-rich_black text-2xl font-serif font-bold">
                  {book.title}
                </h1>
                <p className="text-rich_black text-left text-xl font-serif">
                  by {book.name}
                </p>
              </div>
              <p className="text-rich_black text-left text-xl font-serif mb-4">
                {book.description}
              </p>
            </div>
          </button>
        ))
      )}
    </div>
  );
};

export default GetBooks;
