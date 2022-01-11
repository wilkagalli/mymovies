import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import List from "./components/list/List";

const filmes = [
  {
    title: "A roda do tempo",
    rating: 10,
    image: "images/a-roda.jpg",
  },

  {
    title: "Homem Aranha",
    rating: 10,
    image: "images/homem.jpg",
  },

  {
    title: "Homem Aranha",
    rating: 10,
    image: "images/homem.jpg",
  },

  {
    title: "Homem Aranha",
    rating: 10,
    image: "images/homem.jpg",
  },

  {
    title: "Homem Aranha",
    rating: 10,
    image: "images/homem.jpg",
  },

  {
    title: "Homem Aranha",
    rating: 10,
    image: "images/homem.jpg",
  },
];

function App() {
  return (
    <>
      <Header></Header>

      <List>
        {filmes.map((filme) => (
          <Card
            title={filme.title}
            rating={filme.rating}
            image={filme.image}
          ></Card>
        ))}
      </List>
    </>
  );
}

export default App;
