import Link from 'next/link';
import Layout from '../components/Layout';
import PosterDia from '../components/PosterDia';

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
        <div className={styles.eventos_title}>
          <h1>ESTA SEMANA</h1>
        </div>
        <div className='posters'>
          <PosterDia day={'VIERNES'} dayDate={'06'} />
          <PosterDia day={'SABADO'} dayDate={'07'} />
        </div>
        <div className={styles.eventos_title}>
          <h1>PROXIMOS EVENTOS MAYO</h1>
        </div>
      </Layout>
    </div>
  );
}
