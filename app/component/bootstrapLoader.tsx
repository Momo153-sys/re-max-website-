'use client'
import Head from 'next/head';

const BootstrapCSSLoader = () => {
    return (
        <Head>
          <link
            rel="preload"
            as="style"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          />
        </Head>
      );
};

export default BootstrapCSSLoader;