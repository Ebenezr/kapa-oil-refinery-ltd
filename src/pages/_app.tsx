import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "../utils/api";

import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <SessionProvider session={session}>
        {/*  */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </main> */}
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
