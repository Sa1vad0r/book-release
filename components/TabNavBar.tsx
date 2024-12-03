"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom"; // For navigation, if using react-router

const TabNavBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex flex-row basis-1/5 h-full justify-center items-center">
        <img
          className="text-rich_black"
          src="images/icons8-book-30.png"
          alt="dont work"
        />
        <p className="text-rich_black font-serif font-bold text-center text-2xl">
          Bookit
        </p>
      </div>
      <div className="flex flex-row basis-3/5 h-full justify-center space-x-12 ">
        <p className=" text-rich_black font-serif font-bold text-center text-2xl">
          Books
        </p>
        <p className=" text-rich_black font-serif font-bold text-center text-2xl">
          Bookit
        </p>
        <p className=" text-rich_black font-serif font-bold text-center text-2xl">
          Reviews
        </p>
      </div>
      <div className="flex flex-row basis-1/5 h-full justify-center items-center">
        <img
          className="text-rich_black"
          src="images/icons8-contact-48.png"
          alt="dont work"
        />
        <p className="text-rich_black font-serif font-bold text-center text-2xl">
          Contacts
        </p>
      </div>
    </div>
  );
};

export default TabNavBar;
