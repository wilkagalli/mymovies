import React from "react";
import Card from "../../components/card/Card";
import List from "../../components/list/List";
import { getSeriesList } from "../../api/api";
import { useEffect } from "react";
import { useSeries } from "../../contexts/SeriesContext";
import { useSearch } from "../../contexts/SearchContext";

// import { Container } from './styles';

function Series() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const { series, setSeries } = useSeries();
  const { search } = useSearch();

  async function initializeSeries() {
    const seriesResponse = await getSeriesList();

    console.log(seriesResponse);

    // const { search, setSearch } = useSearch;
    const serieList = seriesResponse.results.map((serieApi) => {
      return {
        title: serieApi.name,
        image: `https://image.tmdb.org/t/p/original${serieApi.poster_path}`,
        rating: serieApi.vote_average,
        date: serieApi.first_air_date,
        isFavorite: favorites.includes(serieApi.name),
        type: "serie",
        isFavorite:
          favorites.findIndex((item) => item.title === serieApi.name) >= 0,
      };
    });

    setSeries(serieList);
  }

  useEffect(() => {
    initializeSeries();
  }, []);

  const filteredSeries = series.filter((serie) =>
    serie.title.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <>
      {filteredSeries.length > 0 ? (
        <List>
          {filteredSeries.map((serie) => (
            <Card
              key={serie.title}
              initialFavorite={serie.isFavorite}
              title={serie.title}
              rating={serie.rating}
              image={serie.image}
              date={serie.date}
              type={serie.type}
            ></Card>
          ))}
        </List>
      ) : (
        <h1>Não encontramos nenhuma serie!</h1>
      )}
    </>
  );
}

export default Series;
