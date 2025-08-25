import { Modal, ModalProps } from "./Modal";
interface Props extends ModalProps {}

export const SideModal = ({ ...props }: Props) => {
  return (
    <>
      <Modal {...props} side="right" />
    </>
  );
};
