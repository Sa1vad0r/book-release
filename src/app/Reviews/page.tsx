"use client";
import { useState } from "react";
import TabNav from "../components/tabNav";
import UserReviewSubmit from "../components/UserReviewSubmit";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col bg-isabelline min-h-screen ">
      <div className="basis-1/12 bg-isabelline h-full">
        <TabNav currentView="reviews" />
      </div>

      <div className="flex flex-row justify-items-center justify-center h-screen">
        <div className="basis-5/6 bg-isabelline-900 shadow rounded-t-3xl p-9 h-full">
          <p className="text-rich_black  text-5xl font-serif font-bold mb-4">
            REVIEWS
          </p>
          <p className="w-3/6 text-rich_black text-5xl font-serif mb-4">
            Want to leave a tought or commen on any of the books in the catalog
            Go for it
          </p>
          <div className="w-3/6 ">
            <button
              onClick={openModal}
              className="px-6 py-2 bg-rich_black-700 text-isabelline-900 rounded-lg hover:bg-blue-600 mb-4"
            >
              Add a Review
            </button>
            <UserReviewSubmit isOpen={isModalOpen} closeModal={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
}
