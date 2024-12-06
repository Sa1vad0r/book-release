"use client";
import TabNav from "../components/tabNav";

export default function Home() {
  return (
    <div className="flex flex-col bg-isabelline min-h-screen ">
      <div className="basis-1/12 bg-isabelline h-full">
        <TabNav currentView="reviews" />
      </div>

      <div className="flex flex-row justify-items-center justify-center h-screen">
        <div className="basis-5/6 bg-isabelline-900 shadow rounded-t-3xl p-9 h-full">
          <p className="text-rich_black text-5xl font-serif font-bold mb-4">
            REVIEWS
          </p>
          <p className="text-rich_black text-5xl font-serif mb-14">
            Have A Book You want to suggest the community, SUBMIT a form and our
            admin will take a look before creating a page for it
          </p>
          <div className="w-3/6 ">
            <p className="text-rich_black font-semibold font-serif mb-8">
              If Yourd like to contact me you can do so here:
            </p>
            <p className="text-rich_black font-semibold font-serif mb-8">
              I Created this site as a platform for d
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
