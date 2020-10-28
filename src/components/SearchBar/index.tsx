import React from "react";
import { FaSearch } from "react-icons/fa";
import { IconContainer } from "./style";

export const SearchBar = () => {
  return (
    <IconContainer>
      <FaSearch />
      <input placeholder="Search..."></input>
    </IconContainer>
  );
};
