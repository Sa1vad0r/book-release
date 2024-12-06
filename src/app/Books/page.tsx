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
          <p className="text-rich_black text-5xl font-serif mb-14">BOOKS</p>
          <p className="text-rich_black text-5xl font-serif mb-14">
            I have a poor memory so here I am creating a site to remember what
            books I've read and what I thought
          </p>
          <div className="w-3/6">
            <p className="text-rich_black font-semibold font-serif mb-8">
              If you'd like to contact me, you can do so here:
            </p>
            <p className="text-rich_black font-semibold font-serif mb-8">
              I personally enjoy back-end more than front-end, but because of
              that I've decided to take the time to make sure that I have
              appropriate skills to develop front-ends that can satisfy any user
              to some degree.
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
