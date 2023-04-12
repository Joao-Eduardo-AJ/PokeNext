import { ReactNode } from 'react';
import { Footer, Navbar } from '.';
import Head from 'next/head';

interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.icon" />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main className="mainContainer">{children}</main>
      <Footer />
    </>
  );
};
