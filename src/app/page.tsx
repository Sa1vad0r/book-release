"use client";
import Image from "next/image";
import TabNavBar from "../../components/TabNavBar";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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
            <p className="text-rich_black font-serif font-bold text-center text-2xl">
              Books
            </p>
            <p className="text-rich_black font-serif font-bold text-center text-2xl">
              Reviews
            </p>
            <button onClick={goToAboutPage}>
              <p className="text-rich_black font-serif font-bold text-center text-2xl">
                About
              </p>
            </button>
          </div>
          <div className="flex flex-row basis-2/12 h-full justify-center items-center">
            <img
              className="text-rich_black h-8"
              src="images/icons8-contact-48.png"
              alt="dont work"
            />
            <p className="text-rich_black font-serif font-bold text-center text-2xl">
              Contact
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-items-center justify-center h-full">
          <div className="basis-5/6 bg-isabelline-700 rounded-t-3xl p-9 h-full">
            <p className="text-rich_black text-7xl font-serif mb-14">
              Welcome To Bookit Service For all Your Book Club Needs
            </p>
            <div className="w-3/6">
              <p className="text-rich_black font-semibold font-serif mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                asperiores dolorem non quibusdam eligendi exercitationem, quo
                laboriosam dicta aliquid architecto doloremque harum deleniti!
                Magnam vitae hic repellendus eveniet eius totam. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Sequi, obcaecati
                sapiente tempora impedit in ratione quam itaque voluptatum eaque
                quis error, quos tempore aliquid eveniet iusto ipsum possimus
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
    </html>
  );
}
