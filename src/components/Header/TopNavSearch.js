import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useContext } from "react";
import styled from "styled-components";
import search from "./searchOption";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { backDropContext } from "../../Store";
import { useEffect } from "react";

const TopNavSearch = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [suggestions, setSuggestions] = useState([])
  const [enteredQuery, SetEnteredQuery] = useState('')
  const backdrop = useContext(backDropContext);

  useEffect(() => {
    console.log(enteredQuery)
  }, [enteredQuery])

  const SearchOptions = search.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  const FormSubmitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <TopNavSearchBar className="flex">
      <div className="nav__select__container">
        <select
          name="search_options"
          id="searchOptions"
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {SearchOptions}
        </select>
        <span className="flex searchoptionSpan">
          {selectedOption} <ArrowDropDownIcon />
        </span>
      </div>
      <form className="nav__input__Container flex" onSubmit={FormSubmitHandler}>
        <input type="text" onClick={backdrop.enableBackDrop} onChange={(e) => SetEnteredQuery(e.target.value)} />
        <div className="nav__floyout_Search">
          { }
        </div>
        <div className="Nav__search__button flex">
          <SearchIcon fontSize="medium" />
        </div>
      </form>

    </TopNavSearchBar>
  );
};

export default TopNavSearch;

const TopNavSearchBar = styled.div`
  align-items: center;
  height: 45px;
  width: 100%;
  .nav__select__container {
    height: 100%;
    position: relative;

    span {
      background-color: #eeece8;
      color: #858282;
      z-index: 10;
      position: relative;
      pointer-events: none;
      border-right: 0.5px solid #cacaca;
      height: 100%;
      align-items: center;
      padding: 0 0.2rem 0 0.6rem;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      font-size: 0.75rem;
    }
    select {
      position: absolute;
      z-index: 0;
      height: inherit;
      cursor: pointer;
    }
  }

  .nav__input__Container {
    height: 100%;
    align-items: center;
    z-index: 20;
    flex-grow: 2;
    input {
      height: 100%;
      outline-color: #fdba3d;
      border: 1px solid white;
      width: 100%;
      flex-grow: 2;
      padding: 0.5rem;
      font-size: 1rem;
      color: #242323;
      min-width: 200px;
    }
  }

  .Nav__search__button {
    background-color: #fdba3d;
    height: 100%;
    color: black;
    padding: 0.2rem 0.8rem;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #dda949;
    }
  }
`;
