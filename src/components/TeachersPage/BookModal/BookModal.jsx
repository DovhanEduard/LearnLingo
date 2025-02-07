import css from './BookModal.module.css';
import { useState } from 'react';
import { Modal } from 'antd';
import BookForm from '../BookForm/BookForm';

const BookModal = ({
  isBookModalOpen,
  setIsBookModalOpen,
  avatar,
  name,
  surname,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    setIsBookModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsBookModalOpen(false);
  };
  const handleBook = () => {
    setIsModalOpen(false);
    setIsBookModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen || isBookModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className={css.authModal}
        footer={null}
        width="600px"
        classNames={{ content: css.modalContent }}
        centered={true}
      >
        <BookForm
          avatar={avatar}
          name={name}
          surname={surname}
          handleBook={handleBook}
        />
      </Modal>
    </>
  );
};

export default BookModal;
