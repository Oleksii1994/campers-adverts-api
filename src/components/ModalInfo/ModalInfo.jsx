import { ModalBackdrop, ModalContent, CloseButton } from './ModalInfo.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import Sprite from '../../img/symbol-defs.svg';

export const Modal = ({ show, onClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    const handleKeyDown = event => {
      if (event.keyCode === 27 && show) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [show, onClose]);

  if (!show) return null;

  return createPortal(
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <svg width="20" height="20">
            <use href={`${Sprite}#icon-close`}></use>
          </svg>
        </CloseButton>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    document.getElementById('root-modal')
  );
};
