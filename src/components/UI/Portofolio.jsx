import data from "../../assets/data/portfolioData";
import { useState, useEffect } from "react";
import Modal from "./Modal";

const portofolio = () => {
  const [nextItems, setNextItems] = useState(6);

  const [portofolios, setPortofolios] = useState(data);
  const [selectTab, setSeletTab] = useState("all");

  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setPortofolios(data);
    }
    if (selectTab === "web-design") {
      const filteredData = data.filter(
        (item) => item.category === "Web Design"
      );
      setPortofolios(filteredData);
    }
    if (selectTab === "ux-design") {
      const filteredData = data.filter((item) => item.category === "Ux");
      setPortofolios(filteredData);
    }
  }, [selectTab]);

  return (
    <section id="portofolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0 ">
            <h3 className="text-headingColor text-[2rem] font-700 ">
              My recent projects
            </h3>
          </div>
          <div className="flex gap-3 ">
            <button
              onClick={() => setSeletTab("all")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-primaryColor hover:text-white "
            >
              All
            </button>
            <button
              onClick={() => setSeletTab("web-design")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-primaryColor hover:text-white "
            >
              Web Design
            </button>
            <button
              onClick={() => setSeletTab("ux-design")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-primaryColor hover:text-white "
            >
              UX Design
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap mt-12">
          {portofolios?.slice(0, nextItems)?.map((portofolio, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="mt-5 group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w[32.2%] relative z-[1]"
            >
              <figure>
                <img className="rounded-[8px]" src={portofolio.imgUrl} alt="" />
              </figure>

              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block ">
                <div className="w-full h-full flex items-center justify-center ">
                  <button
                    onClick={() => showModalHandler(portofolio.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 "
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 ">
          {nextItems < portofolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 "
            >
              Load More
            </button>
          )}
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default portofolio;
