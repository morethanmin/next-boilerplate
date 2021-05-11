import React from "react";
import FooterContainer from "./footer";
import HeaderContainer from "./header";
import SectionContainer from "./section";

export default function Layout({ children }) {
  return (
    <>
      <HeaderContainer />
      <SectionContainer>{children}</SectionContainer>
      <FooterContainer />
    </>
  );
}
