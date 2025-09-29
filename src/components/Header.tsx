import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Header = ({ onSearch, onSortChange, brawlerName, showSearchBar }) => {
  const navigate = useNavigate();

  const titleText = showSearchBar
    ? "Brawl Stars Brawler List"
    : brawlerName || "BRAWLERS LIST";

  return (
    <header>
      <div className="header-wrapper">
        <div className="header-left">
          <img
            src="https://supercell.com/_next/static/media/supercell_logo.50e3c1ff.webp"
            alt="Supercell Logo"
            className="logo"
          ></img>
          <img
            src="https://supercell.com/images/0f037a93198129e58a26e509722f04a7/output.webp"
            alt="Brawl Stars Logo"
            className="logo"
          ></img>
        </div>

        <h1 className="header-title">BRAWLERS LIST</h1>
        {showSearchBar && (
          <>
            {/* --- Filter Dropdown --- */}
            <select
              id="sort-filter"
              onChange={(e) => onSortChange(e.target.value)}
            >
              <option value="NAME_ASC">Name (A-Z)</option>
              <option value="NAME_DESC">Name (Z-A)</option>
              <option value="RARITY">Rarity</option>
              <option value="ID">ID</option>
            </select>
            {/* --- Search Bar --- */}
            <input
              type="text"
              id="search-input"
              placeholder="Search brawler..."
              onChange={(e) => onSearch(e.target.value)}
            />
          </>
        )}
        {/* --- Back Button --- */}
        {!showSearchBar && (
          <button className="back-button" onClick={() => navigate("/")}>
            &lt; Back
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
