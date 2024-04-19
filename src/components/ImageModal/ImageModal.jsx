import ReactModal from 'react-modal';
export default function ImageModal() {

  
    return (
      <ReactModal
      isOpen={false}
      onAfterOpen={handleAfterOpenFunc}
      onRequestClose={handleRequestCloseFunc}
      >

      </ReactModal>
    );
  }