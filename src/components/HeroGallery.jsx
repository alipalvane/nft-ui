const HeroGallery = () => {
  return (
    <div className="container-fluid container-xl mt-5">
      <div className="row">
        <div className="col-lg-7 col-12">
          <div>
            <h1 className="fw-bold title_main_header text-center text-lg-end my-5">
              <span className="text-light ms-2">گالری NFT</span>
              <span className="text_FF3C00">ایرانی ها</span>
            </h1>
            <div className="main_img_header position-relative d-lg-none">
              <img src="img/image 5 (2).png" className="w-100" alt="" />
              <div className="count_user_site_gallery py-1 position-absolute rounded-4 d-flex align-items-center justify-content-between px-4">
                <img src="img/Group 117.png" alt="" />
                <div className="text-light fw-bold ">
                  <span className="fs-5"> گالری هنرمندان </span>
                  <span className="fs-5"> ایرانی </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-12 d-none d-lg-block">
          <div className="main_img_header position-relative">
            <img src="img/image 5 (2).png" className="w-100" alt="" />
            <div className="count_user_site_gallery py-1 position-absolute rounded-4 d-flex align-items-center justify-content-between px-4">
              <img src="img/Group 117.png" alt="" />
              <div className="text-light fw-bold ">
                <p className="fs-5 mb-0">گالری هنرمندان</p>
                <p className="fs-5 mb-0">ایرانی</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGallery;
