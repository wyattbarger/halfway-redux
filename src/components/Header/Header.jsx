import React from "react";
import { HeaderStyle } from "./HeaderStyle.js";
import HeaderTitle from "./HeaderTitle/HeaderTitle.jsx";
import HeaderSearchContainer from "./HeaderSearchContainer/HeaderSearchContainer.jsx";

export default function Header() {
  return (
    <HeaderStyle>
      <HeaderTitle></HeaderTitle>
      <HeaderSearchContainer></HeaderSearchContainer>
    </HeaderStyle>
  );
}
