import Link from 'next/link';
import styles from '../styles/PosterAD.module.css';

const PosterAllDays = ({
  dayAD,
  dayDateAD,
  bannerBgAD,
  bannerGradientAD,
  bgBtnAD,
}) => {
  return (
    <div className={`${styles.poster_container} ${bannerGradientAD}`}>
      <div className={bannerBgAD}>
        <p className={styles.poster_top_text}>{dayAD}</p>
        <p className={styles.poster_bottom_text}>
          {dayDateAD} <span>MAYO</span>
        </p>
      </div>
      <div className={`${styles.poster_aButton} ${bgBtnAD}`}>
        <div className={styles.btn_bd_banner}>
          <Link href={dayAD.toLowerCase()}>COMPRAR</Link>
        </div>
      </div>
    </div>
  );
};

export default PosterAllDays;
