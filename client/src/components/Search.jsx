import React from "react";
import { IoMdSearch } from "react-icons/io";

const Search = ({ setSearchValue }) => {
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <form className="flex items-center gap-1 rounded-md bg-gray-100 ps-1.5 shadow">
        <IoMdSearch size={20} />
        <input
          type="text"
          className="bg-transparent p-1.5 text-sm focus:outline-none"
          placeholder="Cari..."
          required
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Search;
