import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

import { api } from "../utils/api";

import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="#" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Kapa oil Refineries ltd" />
      </Head>

      <SessionProvider session={session}>
        <main className={`flex flex-col`}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </main>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
