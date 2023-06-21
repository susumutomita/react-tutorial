import Layout from '../components/Layout';
import Link from 'next/link';
import Firedelete from '../components/Firedelete';

export default () => (
  <Layout header="Fire" title="delete data.">
    <Firedelete />
    <Link href="./fire">
      <button>Go to top page&gt;&gt;</button>
    </Link>
  </Layout>
);
