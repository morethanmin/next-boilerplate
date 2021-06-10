import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import styles from "./index.module.scss";
export default function Layout({ children }) {
  return (
    <app className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </app>
  );
}
