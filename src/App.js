import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./paginas/home/Home";
import Header from "./components/header/Header";
import Login from "./paginas/login/Login";
import Pagina404 from "../src/paginas/error/Pagina404.js";
import Favorite from "./paginas/favorite/Favorite";
import ValidacoesHeader from "./contexts/UserContext";
import UserContextProvider from "./contexts/UserContext";
import MoviesContextProvider from "./contexts/MoviesContext";
import SearchContextProvider from "./contexts/SearchContext";
import Series from "./paginas/series/Series";
import Movies from "./paginas/filmes/Filmes";
import SeriesContextProvider from "./contexts/SeriesContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <SearchContextProvider>
            <Header></Header>

            <MoviesContextProvider>
              <SeriesContextProvider>
                <Routes>
                  <Route exact path="/login" element={<Login />}></Route>
                  <Route exact path="/home" element={<Home />}></Route>
                  <Route exact path="/serie" element={<Series />}></Route>
                  <Route exact path="/movie" element={<Movies />}></Route>

                  <Route exact path="/favorite" element={<Favorite />}></Route>
                  <Route
                    exact
                    path="/"
                    element={<Navigate replace to="/home" />}
                  ></Route>
                  <Route path="*" element={<Pagina404 />}></Route>
                </Routes>
              </SeriesContextProvider>
            </MoviesContextProvider>
          </SearchContextProvider>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
