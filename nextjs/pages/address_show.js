import Link from 'next/link';
import Layout from '../components/Layout';
import AddressShow from '../components/AddressShow';

export default () => (
  <Layout header="Address" title="address book.">
    <AddressShow />
    <hr />
    <div>
      <Link href="/address">
        <button>back</button>
      </Link>
    </div>
  </Layout>
);
