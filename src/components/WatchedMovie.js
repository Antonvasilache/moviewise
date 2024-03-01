export function WatchedMovie({ movie, onDeletedWatched }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          {movie.runtime ? <span>{movie.runtime} min</span> : "N/A"}
        </p>

        <button
          className="btn-delete"
          onClick={() => onDeletedWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}
