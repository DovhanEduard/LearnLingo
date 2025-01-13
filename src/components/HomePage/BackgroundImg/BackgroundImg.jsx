import css from './BackgroundImg.module.css';

const BackgroundImg = () => {
  return (
    <div className={css.background}>
      <img
        className={css.headImg}
        src="/img/head-emoji.png"
        alt="head emoji image"
      />
      <img className={css.macImg} src="/img/mac.png" alt="apple mac image" />
    </div>
  );
};

export default BackgroundImg;
