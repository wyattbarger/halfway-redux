import React, { useState } from "react";
import { SearchContainer, SearchBar } from "./HeaderSearchContainerStyle";
import HeaderDropDown from "../HeaderDropDown/HeaderDropDown";

export default function HeaderSearchContainer() {
  // Store the username from the search input in state
  const [username, setUsername] = useState("");

  // Call Vercel serverless function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/osrsReq?username=${username}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Error fetching data");
      }
      // * BELOW LOGS FOR DEVELOPMENT !ATTN FOR PROD! *
      console.log(data);
    } catch (error) {
      console.error("Error fetching User data:", error.message);
    }
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchBar
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        name="username"
        placeholder="Search User"
        maxLength={12}
      />
      <HeaderDropDown username={username} />
    </SearchContainer>
  );
}
