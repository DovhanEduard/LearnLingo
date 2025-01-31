import { useState } from 'react';
import { Button, Modal } from 'antd';
import css from './AuthModal.module.css';

const AuthModal = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className={css.authModal}
        footer={null}
        width="566px"
        wrapClassName="asdasdsdasd"
        classNames={{ content: css.myModalContent }}
      >
        {children}
      </Modal>
    </>
  );
};

export default AuthModal;
