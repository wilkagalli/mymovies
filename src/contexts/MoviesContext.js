import React, { Children, useContext, useState } from "react";

const MoviesContext = React.createContext();
const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => useContext(MoviesContext);
export default MoviesContextProvider;
