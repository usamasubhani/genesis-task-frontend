import styles from "./UI.module.css";

interface ModalProps {
  text: String;
  details: any;
  open: Boolean;
  onClose: () => void;
}

const Modal = ({ text, details, open, onClose }: ModalProps) => {
  return (
    open && (
      <div className={styles.modalContainer} onClick={onClose}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <button className={styles.modalClose} onClick={onClose}>
              &times;
            </button>
          </div>
          <div>
            <div className="container">
              <div className="row">
                <h2 className="text-center text-uppercase">{text}</h2>
              </div>
              <div className="row">{details}</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
