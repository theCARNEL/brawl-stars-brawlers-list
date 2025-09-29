import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BrawlerListPage from "./pages/BrawlerListPage.tsx";
import BrawlerDetailPage from "./pages/BrawlerDetailPage.tsx";
import "./App.css";

function App() {
  const [allBrawlers, setAllBrawlers] = useState([]);

  useEffect(() => {
    const fetchBrawlers = async () => {
      try {
        const response = await fetch("/brawlers.json");

        // Tambahkan cek ini untuk memastikan respons berhasil
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Tambahkan log untuk melihat data apa yang dimuat
        console.log("Data loaded:", data);

        if (data.items && Array.isArray(data.items)) {
          setAllBrawlers(data.items);
        } else {
          console.error("Format data JSON tidak valid.");
        }
      } catch (error) {
        console.error("Gagal memuat data:", error);
      }
    };
    fetchBrawlers();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<BrawlerListPage allBrawlers={allBrawlers} />}
        />
        <Route
          path="/brawler/:brawlerName"
          element={<BrawlerDetailPage allBrawlers={allBrawlers} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
