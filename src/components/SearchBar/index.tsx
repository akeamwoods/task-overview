import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
import { actions } from "../../store/actions";
import { IconContainer } from "./style";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const searchTerm = useTypedSelector((state) => state.searchTerm);
  const dispatch = useDispatch();
  useEffect(() => {
    if (search !== searchTerm) dispatch(actions.searchQueryUpdated(search));
  }, [search, searchTerm, dispatch]);
  return (
    <IconContainer>
      <FaSearch />
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </IconContainer>
  );
};
