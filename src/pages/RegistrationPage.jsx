import AuthModal from 'components/Common/AuthModal/AuthModal';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className="container">
      <AuthModal>
        <RegistrationForm />
      </AuthModal>
    </div>
  );
};

export default RegistrationPage;
