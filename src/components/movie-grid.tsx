import MovieCard from "./movie-card";
import { movies } from "../data/movies";

export default function MovieGrid() {
  return (
    <main className="flex-1 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 pb-10 pt-5">
        <h2 className="mb-5 text-left text-lg font-bold text-black opacity-100">
          영화 목록
        </h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
}
