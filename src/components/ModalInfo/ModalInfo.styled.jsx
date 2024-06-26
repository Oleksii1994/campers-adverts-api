import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 720px;
  overflow-y: auto;
  width: 90%;
  max-width: 982px;
  min-width: 300px;
`;

export const CloseButton = styled.button`
  float: right;
  border: none;
  background: none;
  font-size: 1.5em;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
