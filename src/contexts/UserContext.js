import React, { Children, useContext, useState } from "react";
import validaUser from "../helpers/User";

const UserContext = React.createContext();
const UserContextProvider = ({ children }) => {
  const sessionUserLogged = validaUser();
  const [userIsLogged, setUserIsLogged] = useState(sessionUserLogged);

  return (
    <UserContext.Provider value={{ userIsLogged, setUserIsLogged }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export default UserContextProvider;
