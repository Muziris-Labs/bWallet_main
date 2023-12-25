"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { useState } from "react";

const PageSearch = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex h-11 w-2/6 gap-3 rounded-full bg-black px-5 py-2 text-white">
      <label htmlFor="search">
        <MagnifyingGlassIcon className="h-6 w-6 text-white" />
      </label>

      <input
        id="search"
        value={search}
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="disabled:bg-blue-white/60 w-full rounded-full border-none bg-transparent px-1 text-base outline-none disabled:border-0"
      />
    </div>
  );
};

export default PageSearch;
