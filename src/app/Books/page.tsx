"use client";
import TabNav from "../components/tabNav";
import GetBooks from "../components/GetBooks";
import NewBookSubmit from "../components/NewBookSubmit";

export default function Home() {
  return (
    <div className="flex flex-col bg-isabelline min-h-screen">
      <div className="basis-1/12 bg-isabelline">
        <TabNav currentView="books" />
      </div>

      <div className="flex flex-row justify-items-center justify-center flex-grow">
        <div className="basis-5/6 bg-isabelline-700 rounded-t-3xl p-9">
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
          <NewBookSubmit></NewBookSubmit>
          <GetBooks></GetBooks>
        </div>
      </div>
    </div>
  );
}
