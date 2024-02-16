const HeroHome = () => {
  return (
    <div className="container-fluid container-xl mt-5">
      <div className="row">
        <div className="col-lg-7 col-12">
          <div>
            <p className="text-light fw-light fs-4 text-center text-lg-end">
              NFT، از مفاهیم جدید و پرطرفدار در حوزه بلاک چین و کریپتوکارنسی است
              که امکان خلق و خرید و فروش دارایی‌های دیجیتالی منحصربه‌فرد و
              غیرتکراری را فراهم می‌کند.
            </p>
            <h1 className="fw-bold title_main_header text-center text-lg-end my-5">
              <p className="text-light ">
                <span>دنیای NFT های</span>{" "}
                <span className="text_FF3C00">شگفت انگیز</span>
              </p>
            </h1>
            <div className="main_img_header position-relative d-lg-none">
              <img src="img/header_img.png" className="w-100" alt="" />
              <div className="count_user_site py-1 position-absolute rounded-4 d-flex align-items-center justify-content-between px-4">
                <img src="img/Group 117.png" alt="" />
                <div className="text-light fw-bold ">
                  <span className="fs-5">+500</span>
                  <span className="fs-5">هنرمند</span>
                </div>
              </div>
            </div>
            <p className="text-secondary fw-medium fs-3 text-center text-lg-end">
              NFTها در شبکه بلاک چینی ساخته‌ شده‌اند که دفتر عمومی توزیع‌شده‌ای
              است و معاملات را ثبت می‌کند؛ این فرآیند، همان پایه‌ی ساخت ارزهای
              دیجیتال است. البته NFT‌ها معمولاً در بلاک چین اتریوم طراحی
              می‌شوند.{" "}
            </p>
          </div>
          <div className="d-flex gap-3 mt-5 justify-content-center">
            <form
              action=""
              className="border_FF3C00 border d-none d-lg-block rounded-pill position-relative w-50 search_form_header pe-5"
            >
              <button className="border-0 bg-transparent ms-2 position-absolute">
                <img src="img/searchnormal1.png" alt="" />
              </button>
              <input
                type="text"
                className="bg-transparent w-100 h-100 border-0 fs-4 fw-medium"
                placeholder="جستجو NFT ها و هنرمندان"
              />
            </form>
            <a
              href="#"
              className="w-50 py-3 d-none d-lg-block bg_gradient_main_site text-light fw-bold fs-4 text-center rounded-pill d-flex align-items-center justify-content-center"
            >
              دریافت مشاوره رایگان
            </a>
            <a
              href="#"
              className="w-50 py-3  d-lg-none bg_gradient_main_site text-light fw-bold fs-5 text-center rounded-3 d-flex align-items-center justify-content-center"
            >
              دریافت مشاوره رایگان
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-12 d-none d-lg-block">
          <div className="main_img_header position-relative">
            <img src="img/header_img.png" className="w-100" alt="" />
            <div className="count_user_site py-1 position-absolute rounded-4 d-flex align-items-center justify-content-between px-4">
              <img src="img/Group 117.png" alt="" />
              <div className="text-light fw-bold ">
                <span className="fs-5">+500</span>
                <span className="fs-5">هنرمند</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
