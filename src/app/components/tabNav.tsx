"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface NavProps {
  currentView?: string;
}

const TabNav = ({ currentView }: NavProps) => {
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
  const goToReviewsPage = () => {
    router.push("/Reviews");
  };

  return (
    <div className="flex flex-col p-5 sm:flex-row bg-isabelline h-full items-center justify-between w-full px-4 sm:px-8">
      <button
        onClick={goToHomePage}
        className="flex flex-row justify-center sm:basis-2/12 mb-4 sm:mb-0"
      >
        <img
          className="text-rich_black h-8 w-8"
          src="images/icons8-book-30.png"
          alt="Bookit Logo"
        />
        <p
          className={`text-rich_black font-serif font-bold text-center text-xl sm:text-2xl ${
            currentView === "home" ? "text-blue-500" : ""
          }`}
        >
          Bookit
        </p>
      </button>
      <div className="flex flex-row sm:basis-8/12 justify-center items-center gap-x-8 sm:gap-x-12 mb-4 sm:mb-0">
        <button
          onClick={goToBooksPage}
          className={`${
            currentView === "books" ? "font-bold" : ""
          } font-serif text-center text-lg sm:text-2xl text-rich_black`}
        >
          Books
        </button>
        <button
          onClick={goToReviewsPage}
          className={`${
            currentView === "reviews" ? "font-bold" : ""
          } font-serif text-center text-lg sm:text-2xl text-rich_black`}
        >
          Reviews
        </button>
        <button
          onClick={goToAboutPage}
          className={`${
            currentView === "about" ? "font-bold" : ""
          } font-serif text-center text-lg sm:text-2xl text-rich_black`}
        >
          About
        </button>
      </div>
      <button
        onClick={goToContactPage}
        className="flex flex-row justify-center sm:basis-2/12 mb-4 sm:mb-0"
      >
        <img
          className="text-rich_black h-8 w-8"
          src="images/icons8-contact-48.png"
          alt="Contact Icon"
        />
        <p
          className={`text-rich_black font-serif font-bold text-center text-lg sm:text-2xl`}
        >
          Contact
        </p>
      </button>
    </div>
  );
};

export default TabNav;
