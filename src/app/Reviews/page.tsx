"use client";
import TabNav from "../components/tabNav";

export default function Home() {
  return (
    <div className="flex flex-col bg-isabelline h-screen ">
      <div className="basis-1/12 bg-isabelline h-full">
        <TabNav currentView="reviews" />
      </div>

      <div className="flex flex-row justify-items-center justify-center h-full">
        <div className="basis-5/6 bg-isabelline-700 rounded-t-3xl p-9 h-full">
          <p className="text-rich_black text-5xl font-serif mb-14">REVIEWS</p>
          <p className="text-rich_black text-5xl font-serif mb-14">
            I have a poor memory so here i am creating a site to remember what
            books ive read and what i tought
          </p>
          <div className="w-3/6 ">
            <p className="text-rich_black font-semibold font-serif mb-8">
              If Yourd like to contact me you can do so here:
            </p>
            <p className="text-rich_black font-semibold font-serif mb-8">
              I personaly enjoy backEnd More Than FrontEnd but because of that
              I've decided to take the time to make sure that i have appropirate
              skills to develop front endds that can satisfy any user to some
              degree
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
