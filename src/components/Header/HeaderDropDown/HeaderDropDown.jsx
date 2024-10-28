import React, { useState } from "react";
import {
  DropDownButton,
  DropDownMenu,
  DropDownTileSection,
} from "./HeaderDropDownStyle";
import HeaderDropDownTile from "../HeaderDropDownTile/HeaderDropDownTile";
import { skillIconPackage } from "../../../assets/images";

export default function HeaderDropDown() {
  // Define state to toggle DropDownTileSelection
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Define a function to handle the users skill selection
  const handleSkillSelect = (skillName) => {
    setSelectedSkill(skillName);
    // Close the drop down upon selection
    setIsOpen(false);
    handleSubmit(null, skillName);
  };

  // Define an array of skills for the DropDownMenu
  // * MAY REQUIRE IDS TO MATCH API DATA RESPONSE *
  const skills = [
    {
      skillName: "Agility",
      skillIcon: skillIconPackage.agilityIcon,
    },
    {
      skillName: "Attack",
      skillIcon: skillIconPackage.attackIcon,
    },
    {
      skillName: "Construction",
      skillIcon: skillIconPackage.constructionIcon,
    },
    {
      skillName: "Cooking",
      skillIcon: skillIconPackage.cookingIcon,
    },
    {
      skillName: "Crafting",
      skillIcon: skillIconPackage.craftingIcon,
    },
    {
      skillName: "Defence",
      skillIcon: skillIconPackage.defenceIcon,
    },
    {
      skillName: "Farming",
      skillIcon: skillIconPackage.farmingIcon,
    },
    {
      skillName: "Firemaking",
      skillIcon: skillIconPackage.firemakingIcon,
      apiSkillId: 12,
    },
    {
      skillName: "Fishing",
      skillIcon: skillIconPackage.fishingIcon,
    },
    {
      skillName: "Fletching",
      skillIcon: skillIconPackage.fletchingIcon,
    },
    {
      skillName: "Herblore",
      skillIcon: skillIconPackage.herbloreIcon,
    },
    {
      skillName: "Hitpoints",
      skillIcon: skillIconPackage.hitpointsIcon,
    },
    {
      skillName: "Hunter",
      skillIcon: skillIconPackage.hunterIcon,
    },
    {
      skillName: "Magic",
      skillIcon: skillIconPackage.magicIcon,
    },
    {
      skillName: "Mining",
      skillIcon: skillIconPackage.miningIcon,
    },
    {
      skillName: "Prayer",
      skillIcon: skillIconPackage.prayerIcon,
    },
    {
      skillName: "Ranged",
      skillIcon: skillIconPackage.rangedIcon,
    },
    {
      skillName: "Runecraft",
      skillIcon: skillIconPackage.runecraftIcon,
    },
    {
      skillName: "Slayer",
      skillIcon: skillIconPackage.slayerIcon,
    },
    {
      skillName: "Smithing",
      skillIcon: skillIconPackage.smithingIcon,
    },
    {
      skillName: "Strength",
      skillIcon: skillIconPackage.strengthIcon,
    },
    {
      skillName: "Thieving",
      skillIcon: skillIconPackage.thievingIcon,
    },
    {
      skillName: "Woodcutting",
      skillIcon: skillIconPackage.woodcuttingIcon,
    },
  ];

  return (
    <DropDownMenu>
      <DropDownButton type="button" name="drop-toggle" onClick={toggleDropdown}>
        Select a Skill
      </DropDownButton>
      <DropDownTileSection type="submit" name="skill-selector" $isOpen={isOpen}>
        {skills.map((skills, index) => (
          <HeaderDropDownTile
            key={index}
            skillName={skills.skillName}
            skillIcon={skills.skillIcon}
            onClick={() => handleSkillSelect(skills.skillName)}
          />
        ))}
      </DropDownTileSection>
    </DropDownMenu>
  );
}
