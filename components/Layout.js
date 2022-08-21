import Head from 'next/head';

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>UNPLUGGED - {page}</title>
        <meta name='description' content='Unplugged Web Site' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <h1 className='title'>Nav bar</h1>
      {children}
    </div>
  );
};

export default Layout;
