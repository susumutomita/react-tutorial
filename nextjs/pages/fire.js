import Link from 'next/link';
import Layout from '../components/Layout';
import Sampledata from '../components/Sampledata';

export default () => (
  <Layout header="Fire" title="Sample data.">
    <Sampledata />
    <Link href="./fire_add">
      <button>Go to Add data &gt;&gt;</button>
    </Link>
    <Link href="./fire_find">
      <button>Go to find data &gt;&gt;</button>
    </Link>
    <Link href="./fire_del">
      <button>Go to delete data &gt;&gt;</button>
    </Link>
  </Layout>
);
