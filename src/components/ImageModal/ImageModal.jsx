import Modal from 'react-modal';
import css from "./ImageModal.module.css"
const customStyles ={
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(60, 60, 60, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
   
  }
}


Modal.setAppElement('#root');

export default function ImageModal({open, closeModal, selectedImage,}) {

  
    return (
      <>
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image modal window"
      >
        {selectedImage && (
          <div className={css.elements}>
            <img
            className={css.photo}
            onClick={closeModal}
             src={selectedImage.urls.regular}
             alt={selectedImage.alt_description} />
          </div>
        )}

      </Modal>
      </>
 )
  }