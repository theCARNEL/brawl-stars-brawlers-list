// src/components/Header.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Hapus 'Navigate'

interface HeaderProps {
  onSearch?: (query: string) => void;
  onSortChange?: (criterion: string) => void;
  brawlerName?: string;
  showSearchBar: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onSearch,
  onSortChange,
  brawlerName,
  showSearchBar,
}) => {
  const navigate = useNavigate();

  const titleText = showSearchBar
    ? "BRAWLERS LIST"
    : brawlerName?.toUpperCase() || "BRAWLERS LIST";

  return (
    <header>
      <div className="header-wrapper">
        <div className="header-left">
          <Link to="/">
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
          </Link>
        </div>

        <h1 className="header-title">{titleText}</h1>

        {/* --- Search Bar & Filter --- */}
        {showSearchBar && (
          <>
            <select
              id="sort-filter"
              onChange={(e) => onSortChange && onSortChange(e.target.value)}
            >
              <option value="NAME_ASC">Name (A-Z)</option>
              <option value="NAME_DESC">Name (Z-A)</option>
              <option value="RARITY">Rarity</option>
              <option value="ID">ID</option>
            </select>
            <input
              type="text"
              id="search-input"
              placeholder="Search brawler..."
              onChange={(e) => onSearch && onSearch(e.target.value)}
            />
          </>
        )}

        {/* --- Back Button --- */}
        {!showSearchBar && (
          <button className="back-button" onClick={() => navigate("/")}>
            &lt; BACK
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
