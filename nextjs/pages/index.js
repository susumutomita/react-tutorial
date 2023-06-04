import Link from 'next/link';
import style from '../static/Style';
import Counter from '../components/Counter';

export default () => (
  <div>
    {style}
    <h1>Next.js</h1>
    <p>this is built in style</p>
    <hr />
    <Counter />
    <div>
      <Link href="/other">
        <a>Go to Other page &gt;&gt;</a>
      </Link>
    </div>
  </div>
)
