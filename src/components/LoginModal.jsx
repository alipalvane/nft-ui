import Modal from "react-bootstrap/Modal";
import { useModal } from "../context/ModalContext";

const LoginModal = () => {
  const { show, handleClose } = useModal();
  return (

      <Modal show={show} onHide={handleClose} contentClassName="bg_07101D text-white">
        <Modal.Header>
          <Modal.Title className="text-white">ورود/ثبت نام</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="signup-form" action="/signup" method="post">
            <label htmlFor="password">شماره همراه:</label>
            <input
              className="col-12 mt-2 border-0 rounded-3 p-2"
              type="tel"
              id="tel"
              name="tel"
              placeholder="09123456789"
              required
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="outline-none border-0 p-2 rounded-3 text-dark" onClick={handleClose}>
            بستن
          </button>
          <button className="bg_FF3C00 outline-none border-0 text-white p-2 rounded-3" onClick={handleClose}>
            فرستادن کد
          </button>
        </Modal.Footer>
      </Modal>
   
  );
};

export default LoginModal;
