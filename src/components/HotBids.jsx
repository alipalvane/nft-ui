const HotBids = () => {
  return (
    <div className="mb-5">
    <div className="container-fluid position-relative">
      <div className="container-fluid container-xl mt-5 ">
        <div className="header_container_title mb-5 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center justify-content-center bg_gradient_main_site rounded-circle icon_header_container">
              <img src="img/Vector (4).png" alt="" />
            </div>
            <div className="text-light">
              <h5 className="fs-3 fw-medium">پیشنهادهای داغ</h5>
              <span className="fs-4 fw-light">Hot Bids</span>
            </div>
          </div>

          <div className="">
            <a href="#">
              <span className="fs-5 text-light">مشاهده همه</span>
              <img src="img/arrowleft.png" className="arrowleft" alt="" />
            </a>
          </div>
        </div>
        <div className="row row-gap-2">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="box_hot_bids p-3 rounded-4 position-relative">
              <div className="img_hot_bids">
                <img src="img/image 5.png" alt="" className="w-100 rounded-4" />
                <div className="position-absolute d-flex gap-3">
                  <div className="bg_blur rounded-pill fw-bold gap-3 d-flex justify-content-center align-items-center text_time_hot_bids text-light">
                    <span>8s</span>
                    <span>34m</span>
                    <span>2h</span>
                  </div>
                  <div className="bg_blur d-flex align-items-center justify-content-center hearet_icon_hot_bids rounded-circle">
                    <img src="img/heart.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="caption_hot_bids text-light">
                <div className="text-end mt-3">
                  <h5 className="fs-3 fw-bold">Digi Boy</h5>
                  <p className="fs-5 my-3">By Negar</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="fs-5">آخرین پیشنهاد</span>
                  </div>
                  <div>
                    <span className="fs-5">2,78 ETH</span>
                    <img src="img/Vector (2).png" alt="" />
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="#"
                    className="bg_gradient_main_site text-center py-2 py-lg-3 text-light fw-bold w-50 rounded-4 d-block"
                  >
                    پیشنهاد سریع
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6  col-lg-4">
            <div className="box_hot_bids p-3 rounded-4 position-relative">
              <div className="img_hot_bids">
                <img
                  src="img/image 5 (2).png"
                  alt=""
                  className="w-100 rounded-4"
                />
                <div className="position-absolute d-flex gap-3">
                  <div className="bg_blur rounded-pill fw-bold gap-3 d-flex justify-content-center align-items-center text_time_hot_bids text-light">
                    <span>8s</span>
                    <span>34m</span>
                    <span>2h</span>
                  </div>
                  <div className="bg_blur d-flex align-items-center justify-content-center hearet_icon_hot_bids rounded-circle">
                    <img src="img/heart.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="caption_hot_bids text-light">
                <div className="text-end mt-3">
                  <h5 className="fs-3 fw-bold">Angry Ape</h5>
                  <p className="fs-5 my-3">By Farshad</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="fs-5">آخرین پیشنهاد</span>
                  </div>
                  <div>
                    <span className="fs-5">2,78 ETH</span>
                    <img src="img/Vector (2).png" alt="" />
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="#"
                    className="bg_gradient_main_site text-center py-2 py-lg-3 text-light fw-bold w-50 rounded-4 d-block"
                  >
                    پیشنهاد سریع
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="box_hot_bids p-3 rounded-4 position-relative">
              <div className="img_hot_bids">
                <img
                  src="img/image 5 (3).png"
                  alt=""
                  className="w-100 rounded-4"
                />
                <div className="position-absolute d-flex gap-3">
                  <div className="bg_blur rounded-pill fw-bold gap-3 d-flex justify-content-center align-items-center text_time_hot_bids text-light">
                    <span>8s</span>
                    <span>34m</span>
                    <span>2h</span>
                  </div>
                  <div className="bg_blur d-flex align-items-center justify-content-center hearet_icon_hot_bids rounded-circle">
                    <img src="img/heart.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="caption_hot_bids text-light">
                <div className="text-end mt-3">
                  <h5 className="fs-3 fw-bold">Virtualland</h5>
                  <p className="fs-5 my-3">By Amirhossein</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="fs-5">آخرین پیشنهاد</span>
                  </div>
                  <div>
                    <span className="fs-5">2,78 ETH</span>
                    <img src="img/Vector (2).png" alt="" />
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="#"
                    className="bg_gradient_main_site text-center py-2 py-lg-3 text-light fw-bold w-50 rounded-4 d-block"
                  >
                    پیشنهاد سریع
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Ellipse_2"></div>
    </div>
    </div>
  );
};

export default HotBids;
