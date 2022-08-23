import Link from 'next/link';
import Layout from '../components/Layout';
import PosterAllDays from '../components/PosterAllDays';
import PosterDay from '../components/PosterDay';

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
          <PosterDay
            day={'VIERNES'}
            dayDate={'06'}
            bannerBg={'poster_banner_1'}
          />
          <PosterDay
            day={'SABADO'}
            dayDate={'07'}
            bannerBg={'poster_banner_2'}
          />
        </div>
        <div className={styles.eventos_title}>
          <h1>PROXIMOS EVENTOS MAYO</h1>
        </div>
        <div className={styles.poster_container_all}>
          <PosterAllDays
            dayAD={'VIERNES'}
            dayDateAD={'13'}
            bannerBgAD={'poster_banner_1'}
            bannerGradientAD='gradientViernes'
            bgBtnAD={'bg_btn_viernes'}
          />
          <PosterAllDays
            dayAD={'SABADO'}
            dayDateAD={'14'}
            bannerBgAD={'poster_banner_2'}
            bannerGradientAD='gradientSabado'
            bgBtnAD={'bg_btn_sabado'}
          />
          <PosterAllDays
            dayAD={'VIERNES'}
            dayDateAD={'20'}
            bannerBgAD={'poster_banner_1'}
            bannerGradientAD='gradientViernes'
            bgBtnAD={'bg_btn_viernes'}
          />
          <PosterAllDays
            dayAD={'SABADO'}
            dayDateAD={'21'}
            bannerBgAD={'poster_banner_2'}
            bannerGradientAD='gradientSabado'
            bgBtnAD={'bg_btn_sabado'}
          />
        </div>
        <div className='container_center mt-mb-1'>
          <div className={styles.btn_all_events}>
            <Link href='#'>VER TODOS LOS EVENTOS</Link>
          </div>
        </div>
        <div className={styles.birthday_title}>
          <h1>
            FESTEJA TU CUMPLEAÑOS EN <span>UNPLUGGED</span>
          </h1>
        </div>
      </Layout>
    </div>
  );
}
