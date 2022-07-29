import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import search from "./searchOption";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { enableBackDrop } from "../../Store/backdrop-Slice";
import { setQuery } from "../../Store/SearchField-Slice";

const TopNavSearch = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const query = useSelector(state => state.searchQuery.query)
  // const [suggestions, setSuggestions] = useState([])
  const redirect = useNavigate()

  const dispatch = useDispatch()
  const backdropEnableHandler = () => {
    dispatch(enableBackDrop())
  }

  const inputChangeHandler = (e) => {
    dispatch(setQuery(e.target.value))
  }

  // Select Input Data (Options created)
  const SearchOptions = search.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });



  const FormSubmitHandler = async (e) => {
    e.preventDefault()
    if (query !== '') {
      redirect(`/productList/${query}`)
    }
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
        <input type="text" onClick={backdropEnableHandler} value={query} onChange={inputChangeHandler} />
        <div className="nav__floyout_Search">
          { }
        </div>
        <button className="Nav__search__button flex">
          <SearchIcon fontSize="medium" />
        </button>
      </form>

    </TopNavSearchBar>
  );
};

export default TopNavSearch;

const TopNavSearchBar = styled.div`
  align-items: center;
  height: 40px;
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
    background: #febd69;
    height: 100%;
    color: black;
    border: 1px solid transparent;
    padding: 0.2rem 0.5rem;
    border-radius: 0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    .MuiSvgIcon-root{
      font-size:1.8rem;
    }
    &:hover {
      background: #dda949;
    }
  }
`;
