import React, { Children, useContext, useState } from "react";

const SeriesContext = React.createContext();
const SeriesContextProvider = ({ children }) => {
  const [series, setSeries] = useState([]);

  return (
    <SeriesContext.Provider value={{ series, setSeries }}>
      {children}
    </SeriesContext.Provider>
  );
};

export const useSeries = () => useContext(SeriesContext);
export default SeriesContextProvider;
