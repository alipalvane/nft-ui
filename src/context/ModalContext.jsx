/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  return (
    <ModalContext.Provider
      value={{
        show,
        handleShow,
        handleClose,
        showCart,
        handleShowCart,
        handleCloseCart,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
