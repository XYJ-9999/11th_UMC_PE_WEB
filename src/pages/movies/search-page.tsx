import { useState, type FormEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { searchMovies } from "@/api/movies";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export function SearchPage() {
  const { query } = useSearch({ from: "/search" });
  const navigate = useNavigate({ from: "/search" });
  const normalizedQuery = query?.trim() ?? "";

  const [inputValue, setInputValue] = useState(query ?? "");

  const searchQuery = useQuery({
    queryKey: ["movies", "search", { query: normalizedQuery }],
    queryFn: () => searchMovies({ query: normalizedQuery }),
    enabled: normalizedQuery.length > 0,
  });

  const searchResults = searchQuery.data?.results ?? [];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextQuery = inputValue.trim();
    if (!nextQuery) return;

    navigate({
      search: (prev) => ({ ...prev, query: nextQuery }),
    });
  }

  return (
    <main>
      <h1>영화 검색</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="영화 제목을 입력해 주세요."
        />
        <button type="submit">검색</button>
      </form>

      {!normalizedQuery ? (
        <p>검색할 영화 제목을 입력해 주세요.</p>
      ) : searchQuery.isLoading ? (
        <p>검색 결과를 불러오는 중이에요.</p>
      ) : searchQuery.isError ? (
        <p>검색 중 오류가 발생했어요: {searchQuery.error.message}</p>
      ) : searchResults.length === 0 ? (
        <p>검색 결과가 없어요.</p>
      ) : (
        <ul>
          {searchResults.map((movie) => (
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
    </main>
  );
}
