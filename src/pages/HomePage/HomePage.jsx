import css from './HomePage.module.css';
import About from 'components/HomePage/About/About';
import AdvantagesList from 'components/HomePage/AdvantagesList/AdvantagesList';
import BackgroundImg from 'components/HomePage/BackgroundImg/BackgroundImg';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    console.log(regFunc());
  }, []);

  const regFunc = async () => {
    signInWithEmailAndPassword(auth, 'test5@gmail.com', '12345678')
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        // ..
      });
  };

  return (
    <section>
      <div className="container">
        <div className={css.wrapper}>
          <About />
          <BackgroundImg />
        </div>
        <AdvantagesList />
      </div>
    </section>
  );
};

export default HomePage;
