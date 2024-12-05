"use client";
import TabNav from "../components/tabNav";
import content from "../content.json"; // Import the JSON data
import books from "../books.json"; // Import the books JSON data
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

          {/* Dynamically render books from JSON */}
          {books.map((book, index) => (
            <button
              className="w-full"
              onClick={() => {
                console.log(book.title);
              }}
            >
              <div
                key={index}
                className="mb-5 bg-isabelline-400 p-5 rounded-lg justify-items-start"
              >
                <p className="text-rich_black text-3xl font-serif font-semibold mb-4">
                  {book.title}
                </p>
                <p className="text-rich_black text-left text-xl font-serif mb-4">
                  {book.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
