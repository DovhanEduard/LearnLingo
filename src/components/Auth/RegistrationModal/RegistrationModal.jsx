import { useState } from 'react';
import { Modal } from 'antd';
import css from './RegistrationModal.module.css';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const RegistrationModal = ({ isRegModalOpen, setIsRegModalShow }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    setIsRegModalShow(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsRegModalShow(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen || isRegModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className={css.authModal}
        footer={null}
        width="566px"
        classNames={{ content: css.modalContent }}
        centered={true}
      >
        <RegistrationForm />
      </Modal>
    </>
  );
};

export default RegistrationModal;
