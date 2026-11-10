import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../api/movies/get-movies";
import MovieGrid from "../../components/movies/movie-grid";
import Pagination from "../../components/movies/pagination";

export function MovieListPage() {
  const [page, setPage] = useState(1);

  const moviesQuery = useQuery({
    queryKey: ["movies", "list", { page }],
    queryFn: () => getMovies({ page }),
  });

  const movies = moviesQuery.data?.results ?? [];
  const totalPages = moviesQuery.data?.total_pages ?? 0;

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
  };

  return (
    <main className="mx-auto min-h-[calc(100vh-73px)] w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
      <h1 className="mb-7 text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl">
        영화 목록
      </h1>

      {moviesQuery.isPending ? (
        <p role="status" className="py-12 text-center text-gray-500">
          영화를 불러오는 중이에요.
        </p>
      ) : moviesQuery.isError ? (
        <p role="alert" className="py-12 text-center text-red-600">
          {moviesQuery.error.message}
        </p>
      ) : movies.length === 0 ? (
        <p className="py-12 text-center text-gray-500">표시할 영화가 없어요.</p>
      ) : (
        <>
          <MovieGrid movies={movies} />

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </main>
  );
}
