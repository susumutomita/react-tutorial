import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

export default () => (
  <Layout header="Next" title="Top page.">
    <Counter />
    <p>Welcome to next.js!</p>
    <hr />
    <Link href="./other">
      <button>Go to Other &gt;&gt;</button>
    </Link>
  </Layout>
)
