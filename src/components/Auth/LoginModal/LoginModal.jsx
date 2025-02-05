import { useState } from 'react';
import { Modal } from 'antd';
import LoginForm from '../LoginForm/LoginForm';
import css from './LoginModal.module.css';

const LoginModal = ({ isLoginModalOpen, setIsLoginModalShow }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    setIsLoginModalShow(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsLoginModalShow(false);
  };
  const handelSubmit = () => {
    setIsModalOpen(false);
    setIsLoginModalShow(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen || isLoginModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className={css.authModal}
        footer={null}
        width="566px"
        classNames={{ content: css.modalContent }}
        centered={true}
      >
        <LoginForm handelSubmit={handelSubmit} />
      </Modal>
    </>
  );
};

export default LoginModal;
