import Link from 'next/link';
import Layout from '../components/Layout';
import Address from '../components/Address';

const HomePage = () => (
  <Layout header="Address" title="address book.">
    <Address />
    <hr />
    <div>
      <Link href="/address_add">
        <button>add</button>
      </Link>
    </div>
  </Layout>
);

export default HomePage;
