import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Day.module.css';

const Viernes = () => {
  return (
    <div>
      <Layout page='Viernes'>
        <div>
          <p className={styles.day_top_text}>UNP</p>
          <p className={styles.day_bottom_text}>VIERNES</p>
        </div>
        <div className={styles.day_dates_container}>
          <p className={styles.day_top_text}>VIERNES</p>
          <p className={styles.day_gold_text}>
            06 <span>Mayo</span>
          </p>
          <div className={`${styles.day_aButton}  gradientColor`}>
            <Link href='#'>COMPRAR</Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Viernes;
