"use client";
import TabNav from "../components/tabNav";

export default function Home() {
  return (
    <div className="flex flex-col bg-isabelline h-screen ">
      <div className=" basis-1/12 bg-isabelline h-full">
        <TabNav currentView="about" />
      </div>

      <div className="flex flex-row justify-items-center justify-center h-full">
        <div className="basis-5/6 bg-isabelline-900 shadow rounded-t-3xl p-9 h-full">
          <p className="text-rich_black text-7xl font-serif mb-14">
            Welcome To Bookit My Personal Tool For Me To Share Book Review's and
            Recomendation's
          </p>
          <div className="w-3/6 ">
            <p className="text-rich_black font-semibold font-serif mb-8">
              Ive Been Trying to level up my front end designgs as its seemingly
              lacking and so in this and likely for the next few projects ive
              devide to maintain a focus on user ability, design and over all
              asthetic
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
