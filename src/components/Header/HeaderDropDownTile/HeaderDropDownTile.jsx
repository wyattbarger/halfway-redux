import React from "react";
import {
  TileContainer,
  TileHeading,
  TileIcon,
} from "./HeaderDropDownTileStyle";

export default function HeaderDropDownTile({ skillName, skillIcon }) {
  return (
    <TileContainer>
      <TileHeading>{skillName}</TileHeading>
      <TileIcon src={skillIcon} alt={skillIcon} />
    </TileContainer>
  );
}
