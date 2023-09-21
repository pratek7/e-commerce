import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = ({ searchQuery, setSearchQuery }) => {
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex justify-evenly items-center bg-slate-600 h-16">
      <div className="w-10 h-10 border border-black ">
        <img
          src="https://imgs.search.brave.com/xbklTduZtvOmUlJxdP2fy0z_QSz68dNR-FlydGZLIu8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk4LzE4LzYw/LzM2MF9GXzI5ODE4/NjA5MF9SaW15eG9s/NGpzWXZZYlFnMWk2/c3R0UTVOM29lYlhn/dC5qcGc"
          alt=""
        />
      </div>
      <div className="border text-white">
        <SearchIcon />
        <input
          className="bg-transparent ml-1 outline-none py-3 font-bold"
          type="text"
          placeholder="search"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="flex ">
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
