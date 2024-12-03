"use client";
import Image from "next/image";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToHomePage = () => {
    router.push("/");
  };
  const goToContactPage = () => {
    router.push("/Contact");
  };

  const goToAboutPage = () => {
    router.push("/about");
  };
  const goToBooksPage = () => {
    router.push("/Books");
  };
  const goToReviewsPage = () => {
    router.push("/Reviews");
  };

  return (
    <html>
      <head>
        <link rel="icon" href="images/icons8-book-30.png" type="image/png" />
        <title>Bookit</title>
      </head>
      <div className="flex flex-col bg-isabelline h-screen ">
        <div className="flex flex-row basis-1/12 bg-isabelline h-full">
          <div className="flex flex-row basis-2/12 h-full justify-center items-center">
            <img
              className="text-rich_black h-8"
              src="images/icons8-book-30.png"
              alt="dont work"
            />
            <p className="text-rich_black font-serif font-bold text-center text-2xl">
              Bookit
            </p>
          </div>
          <div className="flex flex-row basis-8/12 h-full justify-center items-center space-x-32">
            <p className="text-rich_black font-serif text-center text-2xl">
              Books
            </p>
            <p className="text-rich_black font-serif text-center text-2xl">
              Reviews
            </p>
            <button onClick={goToAboutPage}>
              <p className="text-rich_black font-serif font-bold text-center text-2xl">
                About
              </p>
            </button>
          </div>
          <div className="flex flex-row basis-2/12 h-full justify-center items-center">
            <button
              className="w-full flex flex-row justify-center items-center"
              onClick={goToContactPage}
            >
              <img
                className="text-rich_black h-8"
                src="images/icons8-contact-48.png"
                alt="dont work"
              />
              <p className="text-rich_black font-serif font-bold text-center text-2xl">
                Contact
              </p>
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-items-center justify-center h-full">
          <div className="basis-5/6 bg-isabelline-700 rounded-t-3xl p-9 h-full">
            <p className="text-rich_black text-7xl font-serif mb-14">
              Welcome To Bookit My Personal Tool For Me To Share Book Review's
              and Recomendation's
            </p>
            <div className="w-3/6 ">
              <p className="text-rich_black font-semibold font-serif mb-8">
                Ive Been Trying to level up my front end designgs as its
                seemingly lacking and so in this and likely for the next few
                projects ive devide to maintain a focus on user ability, design
                and over all asthetic
              </p>
              <p className="text-rich_black font-semibold font-serif mb-8">
                I personaly enjoy backEnd More Than FrontEnd but because of that
                I've decided to take the time to make sure that i have
                appropirate skills to develop front endds that can satisfy any
                user to some degree
              </p>
            </div>
          </div>
        </div>
      </div>
    </html>
  );
}
