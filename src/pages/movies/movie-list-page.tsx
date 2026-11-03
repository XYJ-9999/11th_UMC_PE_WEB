import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { getMovies } from "@/apis/movies";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export function MovieListPage() {
  const [page, setPage] = useState(1);

  const moviesQuery = useQuery({
    queryKey: ["movies", "list", { page }],
    queryFn: () => getMovies({ page }),
  });

  const movies = moviesQuery.data?.results ?? [];
  const totalPages = moviesQuery.data?.total_pages ?? 0;

  return (
    <main>
      <h1>인기 영화</h1>

      {moviesQuery.isPending ? (
        <p>영화를 불러오는 중이에요.</p>
      ) : moviesQuery.isError ? (
        <p>영화를 불러오지 못했어요: {moviesQuery.error.message}</p>
      ) : movies.length === 0 ? (
        <p>표시할 영화가 없어요.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to="/movies/$movieId"
                params={{ movieId: String(movie.id) }}
              >
                {movie.poster_path ? (
                  <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={`${movie.title} 포스터`}
                    width="150"
                  />
                ) : (
                  <p>포스터 없음</p>
                )}
                <h2>{movie.title}</h2>
                <p>{movie.release_date || "개봉일 정보 없음"}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div>
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => setPage((currentPage) => currentPage - 1)}
        >
          이전
        </button>

        <span>
          {page} / {totalPages || 1}
        </span>

        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => setPage((currentPage) => currentPage + 1)}
        >
          다음
        </button>
      </div>
    </main>
  );
}
