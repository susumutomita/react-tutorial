import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

const OtherPage = () => (
  <Layout header="Other" title="Other page.">
    <p>this is Other page.</p>
    <Counter />
    <hr />
    <div>
      <Link href="./">
        <button>&lt;&lt; Back to Top</button>
      </Link>
    </div>
  </Layout>
)

export default OtherPage;
