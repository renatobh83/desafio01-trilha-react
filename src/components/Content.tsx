import { memo } from "react";
import { List, ListRowRenderer, AutoSizer } from "react-virtualized";
import { MovieCard } from "../components/MovieCard";
import "../styles/content.scss";
interface MovieProps {
  movies: {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }[];
}

function ContentComponent({ movies }: MovieProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <MovieCard
          title={movies[index].Title}
          poster={movies[index].Poster}
          runtime={movies[index].Runtime}
          rating={movies[index].Ratings[0].Value}
        />
      </div>
    );
  };
  return (
    <main>
      <div className="movies-list">
        <AutoSizer>
          {({ width }) => (
            <List
              height={500}
              rowHeight={500}
              width={250}
              overscanColumnCount={4}
              rowCount={movies.length}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </div>
    </main>
  );
}
export const Content = memo(
  ContentComponent,
  (prevProps: MovieProps, nextProps: MovieProps) => {
    return Object.is(prevProps.movies, nextProps.movies);
  }
);
