import Link from 'next/link';
import style from '../static/Style';

export default () => (
  <div>
    {style}
    <h1>Next.js</h1>
    <p>this is built in style</p>
    <hr />
    <div>
      <Link href="/other">
        <a>Go to Other page &gt;&gt;</a>
      </Link>
    </div>
  </div>
)
