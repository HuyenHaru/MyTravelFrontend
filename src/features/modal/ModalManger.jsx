import React from 'react';
import { useSelector } from 'react-redux';
import UploadImage from './profile/UploadImage';
// import LibImage from './profile/LibImageModal';

const modalLookup = {
  UploadProfileImage: UploadImage,
  // LibImageModal: LibImage,
};

function ModalManger(props) {
  const currentModal = useSelector(state => state.modal);
  let renderModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderModal = <ModalComponent {...modalProps} />;
  }

  return <span>{renderModal}</span>;
}

export default ModalManger;
