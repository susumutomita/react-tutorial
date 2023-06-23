import Link from 'next/link';
import Layout from '../components/Layout';
import Address from '../components/Address';

export default () => (
  <Layout header="Address" title="address book.">
    <Address />
    <hr />
    <div>
      <Link href="/address_add">
        <button>Add address</button>
      </Link>
    </div>
  </Layout>
);