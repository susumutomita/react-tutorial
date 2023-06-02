import Link from 'next/link';

export default () => (
  <div>
    <style jsx>{`
      h1 {
        font-size: 72pt;
        font-weight: bold;
        text-align: right;
        letter-spacing: -8px;
        color: #f0f0f0;
        margin: -40px 0px;
      }
      p {
        margin: 0px;
        color: blue;
        font-size: 16pt;
      }
    `}</style>
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
