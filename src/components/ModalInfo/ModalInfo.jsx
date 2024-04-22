import { ModalBackdrop, ModalContent, CloseButton } from './ModalInfo.styled';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { selectAdvertsArr } from '../../redux/selectors';
// import { fetchAdverts } from '../../redux/operations';

export const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalBackdrop>
  );
};
