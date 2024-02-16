import { Link } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import LoginModal from "../LoginModal";
import CartModal from "../CartModal";
import { useState } from "react";

const Header = () => {
  const [showNav , setShowNav] = useState(false)
  const { handleShow, handleShowCart } = useModal();
  return (
    <header>
      <nav className="navbar navbar-expand-lg mt-3">
        <div className="container-fluid container-xl">
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            onClick={()=>setShowNav(!showNav)}
          >
            <img src="img/navbar-toggler-icon.png" alt="" />
          </button>
          <a href="#" className="navbar-brand text-light fs-1 fw-bold">
            Iran NFT
          </a>
          <div className="d-lg-none">
            <a href="#" className="me-3">
              <img src="img/search.png" alt="" />
            </a>
            <a href="#">
              <img src="img/user.png" alt="" />
            </a>
          </div>
          <div
            className={`${showNav ? '' : 'collapse'} navbar-collapse justify-content-lg-between bg_dark_md rounded p-2`}
            id="navbarNav"
          >
            <ul className="navbar-nav w_70 justify-content-center gap-3">
              <li className="nav-item">
                <Link to="/" className="nav-link text-secondary fs-5 fw-bold">
                  صفحه اصلی
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/learning"
                  className="nav-link text-secondary  fs-5 fw-bold"
                >
                  آموزش NFT{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/gallery"
                  className="nav-link text-secondary  fs-5 fw-bold"
                >
                  گالری NFT ایرانی
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="#news_letters"
                  className="nav-link text-secondary  fs-5 fw-bold"
                >
                  ارتباط با ما{" "}
                </a>
              </li>
            </ul>
            <div className="d-flex gap-1">
              <button
                type="button"
                onClick={handleShowCart}
                id="openModalBtnshoppingcart"
                className="bg_FF3C00 text-light fw-bold p-3 rounded-3 d-none d-lg-inline-block"
              >
                <img src="img/shoppingcart.png" alt="" />
              </button>

              <button
                type="button"
                id="openModalBtn"
                onClick={handleShow}
                className="bg_FF3C00 text-light fw-bold p-3 rounded-3 d-none d-lg-inline-block"
              >
                <img src="img/user.png" alt="" />
                ورود / ثبت نام
              </button>
            </div>
            <LoginModal />
            <CartModal />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
