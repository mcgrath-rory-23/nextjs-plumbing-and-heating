import { Inter } from "next/font/google";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Clinton Plumbing & Heating</title>
        <meta name="description" content="Reliable plumbing services in your area" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={inter.className}>
        {children}
      </div>
    </>
  );
}
