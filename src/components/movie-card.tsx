import { Link } from "@tanstack/react-router";
import type { Movie } from "../types/movie";
import { useBookmarkStore } from "../stores/bookmark-store";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const toggleBookmark = useBookmarkStore((state) => state.toggleBookmark);

  const bookmarkedMovieIds = useBookmarkStore(
    (state) => state.bookmarkedMovieIds,
  );

  const bookmarked = bookmarkedMovieIds.includes(movie.id);

  return (
    <article className="group w-full">
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-gray-200">
        <Link
          to="/movies/$movieId"
          params={{ movieId: String(movie.id) }}
          className="block h-full w-full"
        >
          <img
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={movie.posterPath}
            alt={`${movie.title} 포스터`}
          />
        </Link>

        <button
          type="button"
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition ${
            bookmarked
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-black/50 hover:bg-black/70"
          }`}
          aria-label={bookmarked ? "북마크 해제" : "북마크 추가"}
          aria-pressed={bookmarked}
          onClick={() => toggleBookmark(movie.id)}
        >
          <img
            className="h-5 w-5"
            src={
              bookmarked
                ? "/icons/movie-icons/bookmark.svg"
                : "/icons/movie-icons/bookmark-outline.svg"
            }
            alt=""
          />
        </button>
      </div>

      <Link
        to="/movies/$movieId"
        params={{ movieId: String(movie.id) }}
        className="block no-underline"
      >
        <h3 className="mt-2 truncate text-sm font-semibold text-gray-900 transition-colors group-hover:text-gray-600">
          {movie.title}
        </h3>

        <p className="mt-1 text-xs text-gray-500">{movie.releaseDate}</p>
      </Link>
    </article>
  );
}
