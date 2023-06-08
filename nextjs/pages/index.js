import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

const HomePage = () => (
  <Layout header="Next" title="Top page.">
    <p>Welcome to next.js!</p>
    <Counter />
    <hr />
    <Link href="./other">
      <button>Go to Other &gt;&gt;</button>
    </Link>
  </Layout>
)

export default HomePage;
