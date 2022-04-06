import React, { Children, useContext, useState } from "react";

const SearchContext = React.createContext();
const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
export default SearchContextProvider;
