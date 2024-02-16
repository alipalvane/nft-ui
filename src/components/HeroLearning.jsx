const HeroLearning = () => {
  return (
    <div className="container-fluid container-xl mt-5">
      <div className="row">
        <div className="col-lg-7 col-12">
          <div>
            <p className="text-light fw-light fs-4 text-center text-lg-end">
              شما می‌توانید با استفاده از فناوری بلاک چین، NFT آثار هنری خود را
              تولید کرده و آن‌ها را در پلتفرم‌های مختلف بفروشید.
            </p>
            <h1 className="fw-bold title_main_header text-center text-lg-end my-5">
              <span className="text-light">آموزش ساده</span>
              <span className="text_FF3C00">NFT</span>
            </h1>
            <div className="main_img_header position-relative d-lg-none">
              <img src="img/image 5.png" className="w-100" alt="" />
              <div className="count_user_site py-1 position-absolute rounded-4 d-flex align-items-center justify-content-between px-4">
                <div className="text-light fw-bold ">
                  <span className="fs-5">آموزش</span>
                  <span className="fs-5">جامع </span>
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
        </div>
        <div className="col-lg-5 col-12 d-none d-lg-block">
          <div className="main_img_header position-relative">
            <img src="img/image 5.png" className="w-100" alt="" />
            <div className="count_user_site py-1 position-absolute rounded-4 d-flex align-items-center justify-content-between px-4">
              <div className="text-light fw-bold ">
                <span className="fs-5">زمان مطالعه:</span>
                <span className="fs-5">4دقیقه </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLearning;
