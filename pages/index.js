import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import Poster from '../components/Poster';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='container'>
      <Layout page='Home'>
        <div className={styles.banner}>
          <h1>COMPRA TUS ANTICIPADAS</h1>
          <div className={styles.banner_buttons}>
            <div className={`${styles.banner_aButton}  gradientColor`}>
              <Link href='viernes'>UNP VIERNES</Link>
            </div>
            <div className={`${styles.banner_aButton}  gradientColor`}>
              <Link href='sabado'>UNP SABADO</Link>
            </div>
          </div>
        </div>
        <div className={styles.esta_semana_title}>
          <h1>ESTA SEMANA</h1>
        </div>
        <div>
          <Poster dia={VIERNES} />
        </div>
      </Layout>
    </div>
  );
}
