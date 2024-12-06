"use client";
// pages/index.tsx
import { useState } from "react";
import FormModal from "../Tester/page";
import UserReviewSubmit from "../components/UserReviewSubmit";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Page</h1>
      <p className="mb-4">This is the normal page content.</p>
      <button
        onClick={openModal}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-4"
      >
        Open Form
      </button>
      <UserReviewSubmit isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Home;
