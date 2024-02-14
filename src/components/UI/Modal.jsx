import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portofolio = portofolios.find(
    (portofolio) => portofolio.id === activeID
  );
  return (
    <div>
      <img src={portofolio.imgUrl} alt="" />
    </div>
  );
};

export default Modal;
