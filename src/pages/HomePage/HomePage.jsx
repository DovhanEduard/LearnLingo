import css from './HomePage.module.css';
import About from 'components/HomePage/About/About';
import AdvantagesList from 'components/HomePage/AdvantagesList/AdvantagesList';
import BackgroundImg from 'components/HomePage/BackgroundImg/BackgroundImg';

const HomePage = () => {
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
