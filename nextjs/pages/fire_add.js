import Layout from '../components/Layout';
import Link from 'next/link';
import Fireadd from '../components/Fireadd';

export default () => (
  <Layout header="Fire" title="add data.">
    <Fireadd />
    <Link href="./fire">
      <button>Go to top page&gt;&gt;</button>
    </Link>
  </Layout>
);
