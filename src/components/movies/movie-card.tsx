import { Link } from "@tanstack/react-router";
import type { TmdbMovieListItem } from "../../api/movies/models";
import { getTmdbPosterUrl } from "../../utils/movies/tmdb-image";
import { BookmarkButton } from "../bookmark-button";

interface MovieCardProps {
  movie: TmdbMovieListItem;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = getTmdbPosterUrl(movie.poster_path);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-gray-900 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-gray-800">
        <Link
          to="/movies/$movieId"
          params={{ movieId: String(movie.id) }}
          className="block h-full w-full"
        >
          {posterUrl ? (
            <img
              src={posterUrl}
              alt={movie.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-200 text-sm text-gray-600">
              이미지 없음
            </div>
          )}
        </Link>

        <BookmarkButton movieId={movie.id} />
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <Link
          to="/movies/$movieId"
          params={{ movieId: String(movie.id) }}
          className="inline-block"
        >
          <h3 className="line-clamp-1 text-base font-bold text-gray-100 transition-colors group-hover:text-blue-400">
            {movie.title}
          </h3>
        </Link>
        <p className="mt-1 text-xs font-medium text-gray-400">
          {movie.release_date}
        </p>
      </div>
    </div>
  );
}

