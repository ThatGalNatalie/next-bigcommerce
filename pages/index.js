import Head from 'next/head';

import withApollo from '../lib/apollo';
import Layout from '../lib/layout';

import Products from '../components/Products';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Head>
        <title>Next BigCommerce</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Layout>
        <Products />
      </Layout>
    </div>
  );
}
export default withApollo({ ssr: true })(Home);
