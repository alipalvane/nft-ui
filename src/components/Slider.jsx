import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <div className="container-fluid position-relative ">
      <div className="container-fluid container-xl mt-5 ">
        <div className="header_container_title mb-5 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center justify-content-center bg_gradient_main_site rounded-circle icon_header_container">
              <img src="img/Vector (4).png" alt="" />
            </div>
            <div className="text-light">
              <h5 className="fs-3 fw-medium">گالری عکس ها</h5>
              <span className="fs-4 fw-light">Gallery</span>
            </div>
          </div>
        </div>
        <div className="row row-gap-2">
          <Swiper
            spaceBetween={10}
            slidesPerView={5.2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="box_hot_bids rounded-4 position-relative">
                  <div className="img_hot_bids">
                    <img
                      src="img/gif7.gif"
                      alt=""
                      className="w-100 rounded-4 img-thumbnail"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="box_hot_bids rounded-4 position-relative">
                  <div className="img_hot_bids">
                    <img
                      src="img/Capture-11.webp "
                      alt=""
                      className="w-100 img-thumbnail rounded-4"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="box_hot_bids rounded-4 position-relative">
                  <div className="img_hot_bids">
                    <img
                      src="img/gif9.gif"
                      alt=""
                      className="w-100 rounded-4"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide ali">
                <div className="box_hot_bids rounded-4 position-relative">
                  <div className="img_hot_bids">
                    <img src="img/1.webp" alt="" className="w-100 rounded-4" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="box_hot_bids rounded-4 position-relative">
                  <div className="img_hot_bids">
                    <img
                      src="img/gif6.gif"
                      alt=""
                      className="w-100 rounded-4 img-thumbnail"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="box_hot_bids rounded-4 position-relative">
                  <div className="img_hot_bids">
                    <img
                      src="img/gif.gif"
                      alt=""
                      className="w-100 rounded-4 img-thumbnail"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        </div>
      </div>
      <div className="Ellipse_2"></div>
    </div>
  );
};

export default Slider;
