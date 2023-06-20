import Layout from '../components/Layout';
import Link from 'next/link';
import Firefind from '../components/Firefind';

export default () => (
  <Layout header="Fire" title="Sample data.">
    <Firefind />
    <Link href="./fire">
      <button>Go to top page&gt;&gt;</button>
    </Link>
  </Layout>
);
