const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between ">
          {/* ================logo================ */}
          <div className="flex items-center justify-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center ">
              S
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700] ">Supri</h2>
              <p className="text-smallTextColor text-[16px] font-[500]">
                Personal
              </p>
            </div>
          </div>
          {/* ====================logo end ================ */}

          {/* =========================menu================== */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li className="text-smallTextColor font-[600]">
                <a href="#about">About</a>
              </li>
              <li className="text-smallTextColor font-[600]">
                <a href="services">Services</a>
              </li>
              <li className="text-smallTextColor font-[600]">
                <a href="#portofolio">Portofolio</a>
              </li>
              <li className="text-smallTextColor font-[600]">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* =========================menu end================== */}

          {/* =========================menu right================== */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[700] border border-solid rounded-[8px] py-2 px-4 max-h-[40px] hover:bg-smallTextColor hover:text-white duration-300 hover:font-[500] ease-in ">
              <i className="ri-send-plane-line"></i> Let's Talk
            </button>

            <span className="text-2xl md:hidden text-smallTextColor cursor-pointer ">
              <i className="ri-menu-line"></i>
            </span>
          </div>

          {/* =========================menu right================== */}
        </div>
      </div>
    </header>
  );
};

export default Header;
