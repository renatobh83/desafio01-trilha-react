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

export function Content(props: MovieProps) {
  return (
    <main>
      <div className="movies-list">
        {props.movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  );
}
