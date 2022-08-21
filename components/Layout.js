import Head from 'next/head';
import Header from './Header';

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>UNPLUGGED - {page}</title>
        <meta name='description' content='Unplugged Web Site' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
