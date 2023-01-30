import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../../styles/Home.module.css";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className={`bg-bg ${styles.mobileContainer}`}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
