import About from 'components/HomePage/About/About';
import BackgroundImg from 'components/HomePage/BackgroundImg/BackgroundImg';

const HomePage = () => {
  return (
    <section>
      <div className="container">
        <About />
        <BackgroundImg />
      </div>
    </section>
  );
};

export default HomePage;
