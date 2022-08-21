import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout page='Home'>
        <h1>CENA | MUSICA | TRAGOS</h1>
      </Layout>
    </div>
  );
}
