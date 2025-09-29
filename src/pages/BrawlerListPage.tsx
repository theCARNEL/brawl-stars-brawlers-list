import React, { useState, useEffect } from "react";
import Header from "../components/Header.tsx";
import BrawlerList from "../components/BrawlerList.tsx";
import Footer from "../components/Footer.tsx";

interface Rarity {
  id: number;
  name: string;
}
interface Brawler {
  id: number;
  name: string;
  rarity: Rarity;
  [key: string]: any;
}

interface BrawlerListPageProps {
  allBrawlers: Brawler[];
}

const BrawlerListPage: React.FC<BrawlerListPageProps> = ({ allBrawlers }) => {
  const [filteredBrawlers, setFilteredBrawlers] = useState(allBrawlers);
  const [isLoading, setIsLoading] = useState(allBrawlers.length === 0);
  const [sortCriterion, setSortCriterion] = useState("NAME_ASC");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (allBrawlers.length > 0) {
      applyAllLogic(allBrawlers, sortCriterion, searchQuery);
      setIsLoading(false);
    }
  }, [allBrawlers]);

  const applyAllLogic = (
    brawlerList: Brawler[],
    criterion: string,
    query: string
  ): void => {
    // 1. Filtering
    let processedList = brawlerList;
    if (query !== "") {
      processedList = brawlerList.filter((brawler) =>
        (brawler.name as string).toLowerCase().includes(query.toLowerCase())
      );
    }

    // 2. Sorting
    const sortedList = [...processedList].sort((a, b) => {
      switch (criterion) {
        case "NAME_ASC":
          return a.name.localeCompare(b.name);
        case "NAME_DESC":
          return b.name.localeCompare(a.name);
        case "RARITY":
          return a.rarity.id - b.rarity.id;
        case "ID":
          return a.id - b.id;
        default:
          return 0;
      }
    });
    setFilteredBrawlers(sortedList);
  };

  const handleSearch = (query: string): void => {
    setSearchQuery(query);
    applyAllLogic(allBrawlers, sortCriterion, query);
  };

  const handleSortChange = (newCriterion: string): void => {
    setSortCriterion(newCriterion);
    applyAllLogic(allBrawlers, newCriterion, searchQuery);
  };

  return (
    <>
      <Header
        onSearch={handleSearch}
        onSortChange={handleSortChange}
        showSearchBar={true}
      />
      <div className="header-banner"></div>
      <main>
        {isLoading ? (
          <div id="loading">Loading Data...</div>
        ) : (
          <BrawlerList brawlers={filteredBrawlers} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default BrawlerListPage;
