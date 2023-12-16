/** @jsxImportSource @emotion/react */

import { ModalContainer, ModalWrapper, closeButton } from "./styles";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children } = props;

  if (!isOpen) return null;

  const handleModalClose = () => {
    onClose(); // onClose 함수 호출
  };

  return (
    <div css={ModalWrapper}>
      <button css={closeButton} onClick={handleModalClose}>x</button>
      <div css={ModalContainer}>
        {children}
      </div>
    </div>
  );
};