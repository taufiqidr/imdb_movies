import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const TopBar = () => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterClick = () => {
    if (selectedValue) {
      router.push(selectedValue); // Redirect to the selected URL
    }
  };

  const handleSearchClick = () => {
    if (searchQuery) {
      router.push(`/search/${searchQuery}`);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div
      className="flex items-center justify-between bg-gray-200 p-4"
      id="top-bar"
    >
      <div className="search-container ml-10 flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-l-md border px-2 py-1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="rounded-r-md bg-blue-500 px-3 py-1 text-white"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
      <div>
        <Link href={"/"}>
          <p className="text-3xl font-bold">Home</p>
        </Link>
      </div>
      <div className="filter-container mr-10 flex items-center">
        <select
          className="rounded-l-md border px-2 py-1"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="/movies250">Top 250 Movies</option>
          <option value="/tv250">Top 250 TV Shows</option>
          <option value="/">Most Popular Movies</option>
          <option value="/populartv">Most Popular TV Shows</option>
          <option value="/comingsoon">Comings Soon</option>
        </select>
        <button
          className="rounded-r-md bg-blue-500 px-3 py-1 text-white"
          onClick={handleFilterClick}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default TopBar;
