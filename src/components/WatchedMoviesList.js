import { WatchedMovie } from "./WatchedMovie";

export function WatchedMoviesList({ watched, onDeletedWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeletedWatched={onDeletedWatched}
        />
      ))}
    </ul>
  );
}
