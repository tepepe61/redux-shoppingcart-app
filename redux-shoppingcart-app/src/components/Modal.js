import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../features/modal/ModalSlice";
import { clearCart } from "../features/cart/CartSlice";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>買い物カゴを全てからにしますか？</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            // 1. onClickにいっぱい書くのありなんやな
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            OK
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            やめとく
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
