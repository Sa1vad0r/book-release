"use client";
import React, { useState } from "react";
import TabNav from "./components/tabNav";
import TopTabNav from "./components/TopTabNav";

export default function Home() {
  return (
    <div className="flex flex-col bg-isabelline h-screen ">
      <div className="basis-1/12 bg-isabelline w-screen">
        <TabNav />
      </div>

      <div className="flex flex-row justify-items-center justify-center h-full">
        <div className="basis-5/6 bg-isabelline-700 rounded-t-3xl p-9 h-full">
          <p className={`text-rich_black font-serif text-7xl mb-14`}>
            Welcome To Bookit Service For all Your Book Club Needs
          </p>
          <div className="w-3/6">
            <p className="text-rich_black font-semibold font-serif mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              asperiores dolorem non quibusdam eligendi exercitationem, quo
              laboriosam dicta aliquid architecto doloremque harum deleniti!
              Magnam vitae hic repellendus eveniet eius totam. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Sequi, obcaecati sapiente
              tempora impedit in ratione quam itaque voluptatum eaque quis
              error, quos tempore aliquid eveniet iusto ipsum possimus
              doloremque officia.
            </p>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <img className="w-8 h-8" src="images/icons8-add-50.png" alt="" />
            <p className="text-rich_black text-xl font-serif">
              looking to join or start a club?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
