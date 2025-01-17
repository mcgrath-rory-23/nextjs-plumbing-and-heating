import React from 'react';
import Link from 'next/link';

function Error({ statusCode }) {
  return (
    <div style={{ padding: 20, textAlign: 'center', fontSize: '18px' }}>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
      <div style={{ marginTop: 20 }}>
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
