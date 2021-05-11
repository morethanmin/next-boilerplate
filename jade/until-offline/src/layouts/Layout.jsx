import React from "react";
import style from "./Layout.module.scss";
import FooterContainer from "./footer";
import HeaderContainer from "./header";
import SectionContainer from "./section";

export default function Layout({ children }) {
  return (
    <div className={style.layout}>
      <HeaderContainer />
      <SectionContainer>{children}</SectionContainer>
      <FooterContainer />
    </div>
  );
}
