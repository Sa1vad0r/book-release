"use client";
import React from "react";
import { useRouter } from "next/navigation";

const TopTabNav = () => {
  const router = useRouter();

  const goToHomePage = () => {
    router.push("/");
  };

  const goToContactPage = () => {
    router.push("/Contact");
  };

  const goToAboutPage = () => {
    router.push("/About");
  };

  const goToBooksPage = () => {
    router.push("/Books");
  };

  return (
    <div className="flex flex-row justify-between items-center px-6 py-3 bg-isabelline-700 rounded-b-3xl">
      <button
        onClick={goToHomePage}
        className="text-rich_black font-serif text-xl hover:text-blue-500"
      >
        Home
      </button>
      <div className="flex space-x-4">
        <button
          onClick={goToBooksPage}
          className="text-rich_black font-serif text-xl hover:text-blue-500"
        >
          Books
        </button>
        <button
          onClick={goToAboutPage}
          className="text-rich_black font-serif text-xl hover:text-blue-500"
        >
          About
        </button>
        <button
          onClick={goToContactPage}
          className="text-rich_black font-serif text-xl hover:text-blue-500"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default TopTabNav;
