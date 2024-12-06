import TabNav from "./components/tabNav";

export default function Home() {
  return (
    <div className="flex flex-col bg-isabelline h-screen ">
      <div className="basis-1/12 bg-isabelline h-full">
        <TabNav />
      </div>

      <div className="basis-11/12 flex flex-row justify-items-center justify-center">
        <div className="basis-5/6 bg-isabelline-900 shadow rounded-t-3xl p-9">
          <p className={`text-rich_black font-serif text-7xl mb-14`}>
            Welcome To Bookit Service For all Your Book Club Needs
          </p>
          <div className="flex flex-row">
            <p className="basis-3/4 text-rich_black font-semibold font-serif mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              asperiores dolorem non quibusdam eligendi exercitationem, quo
              laboriosam dicta aliquid architecto doloremque harum deleniti!
              Magnam vitae hic repellendus eveniet eius totam. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Sequi, obcaecati sapiente
              tempora impedit in ratione quam itaque voluptatum eaque quis
              error, quos tempore aliquid eveniet iusto ipsum possimus
              doloremque officia.
            </p>
            <div></div>
          </div>
          <div className=" flex flex-col px-3 space-y-1">
            <button className="flex flex-row items-center space-x-2">
              <img className="w-8 h-8" src="images/icons8-add-50.png" alt="" />
              <p className="text-rich_black text-xl font-serif">
                looking add a Book?
              </p>
            </button>
            <button className="flex flex-row items-center space-x-2">
              <img className="w-8 h-8" src="images/icons8-add-50.png" alt="" />
              <p className="text-rich_black text-xl font-serif">
                looking add a Review?
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
