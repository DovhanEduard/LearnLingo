import css from './HomePage.module.css';
import About from 'components/HomePage/About/About';
import AdvantagesList from 'components/HomePage/AdvantagesList/AdvantagesList';
import BackgroundImg from 'components/HomePage/BackgroundImg/BackgroundImg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout, register } from '../../redux/auth/operations';
import { getTeachers } from '../../redux/teachers/operations';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);
  // login({
  //   email: 'test12@gmail.com',
  //   password: '12345678',
  // })
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
