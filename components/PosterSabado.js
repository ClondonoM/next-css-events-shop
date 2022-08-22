import Link from 'next/link';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { ImTicket } from 'react-icons/im';
import { MdOutlineLocationOn } from 'react-icons/md';
import styles from '../styles/Poster.module.css';

const PosterSabado = () => {
  return (
    <div className={`${styles.poster_container} gradientColor`}>
      <p className={styles.poster_text_black_1}>SABADO</p>
      <div className={styles.poster_banner_2}>
        <p className={styles.poster_top_text}>SABADO</p>
        <p className={styles.poster_bottom_text}>
          07 <span>MAYO</span>
        </p>
      </div>
      <div className={styles.poster_text_box}>
        <div className={styles.poster_text_black_2}>
          <FaRegCalendarAlt /> 07 de Mayo a las 23:00
          <hr color='black' />
        </div>
        <div className={styles.poster_text_black_2}>
          <ImTicket /> desde $850
          <hr color='black' />
        </div>
        <div className={styles.poster_text_black_2}>
          <MdOutlineLocationOn /> Av. Rafael Nunez 4873
        </div>
      </div>
      <div className={styles.poster_aButton}>
        <Link href='sabado'>COMPRAR</Link>
      </div>
    </div>
  );
};

export default PosterSabado;
