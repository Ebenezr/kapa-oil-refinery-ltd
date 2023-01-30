import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../../styles/Home.module.css";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
      const [isMobile, setIsMobile] = useState(false);
      const [isIpad, setIsIpad] = useState(false);
      const [isDesktop, setIsDesktop] = useState(false);

      useEffect(() => {
        setIsMobile(/iPhone|Android/i.test(navigator.userAgent));
        setIsIpad(/iPad/i.test(navigator.userAgent));
        setIsDesktop(/Windows|Mac|Linux/i.test(navigator.userAgent));
      }, []);
  return (
    <main
      className={`  bg-bg ${
        isMobile
          ? styles.mobileContainer
          : isIpad
          ? styles.ipadContainer
          : isDesktop
          ? styles.desktopContainer
          : styles.mobileContainer
      }`}
    >
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
