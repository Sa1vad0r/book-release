"use client";
import TabNav from "../components/tabNav";
import GetBooks from "../components/GetBooks";
import { useState } from "react";
import FormModal from "../Tester/page";
import AdminSubmitBook from "../components/AdminSubmitBook";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col bg-isabelline min-h-screen">
      <div className="basis-1/12 bg-isabelline h-full">
        <TabNav currentView="books" />
      </div>

      <div className="flex flex-row justify-items-center justify-center h-full">
        <div className="basis-5/6 bg-isabelline-900 shadow rounded-t-3xl p-9 h-full">
          <p className="text-rich_black font-bold text-5xl font-serif mb-4">
            BOOKS
          </p>
          <p className="w-4/5 text-rich_black text-5xl font-serif mb-4">
            I have a poor memory so here I am creating a site to remember what
            books I've read and what I thought
          </p>
          <div className="w-3/6">
            <p className="text-rich_black font-semibold font-serif mb-4">
              This is curreenlty a library made by me for me but if youd like to
              see the types of books ive read n recomend you con go through and
              see so here
            </p>
            <p className="text-rich_black font-serif">
              If you'd like to add a book to the selection &
            </p>
            <p className="text-rich_black font-serif mb-4">
              are authorized, you can do so here:
            </p>
          </div>
          <button
            onClick={openModal}
            className="px-6 py-2 bg-rich_black-700 text-isabelline-900 rounded-lg hover:bg-blue-600 mb-4"
          >
            Add a Book
          </button>
          <AdminSubmitBook isOpen={isModalOpen} closeModal={closeModal} />
          <GetBooks></GetBooks>
        </div>
      </div>
    </div>
  );
}
