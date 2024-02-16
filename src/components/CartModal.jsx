import Modal from "react-bootstrap/Modal";
import { useModal } from "../context/ModalContext";
const CartModal = () => {
  const { showCart, handleCloseCart } = useModal();
  return (
    <Modal
      show={showCart}
      onHide={handleCloseCart}
      contentClassName="bg_07101D text-white"
    >
      <Modal.Header>
        <Modal.Title>سبد خرید</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>سبد خرید شما خالی است</p>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="outline-none border-0 p-2 rounded-3 text-dark"
          onClick={handleCloseCart}
        >
          بستن
        </button>
        <button
          className="bg_FF3C00 outline-none border-0 text-white p-2 rounded-3"
          onClick={handleCloseCart}
        >
          تسویه حساب
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
