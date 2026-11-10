import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect, useState, type SubmitEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../../api/movies/search-movies";
import { getTmdbPosterUrl } from "../../utils/movies/tmdb-image";
import { useBookmarkStore } from "../../stores/bookmark-store";

export function SearchPage() {
  const { query } = useSearch({ from: "/search" });
  const navigate = useNavigate({ from: "/search" });
  const [searchText, setSearchText] = useState(query ?? "");

  const bookmarkedMovieIds = useBookmarkStore(
    (state) => state.bookmarkedMovieIds,
  );
  const toggleBookmark = useBookmarkStore((state) => state.toggleBookmark);
  const bookmarkedMovieIdSet = new Set(bookmarkedMovieIds);

  const normalizedQuery = query?.trim() ?? "";
  const hasQuery = normalizedQuery.length > 0;

  const searchQuery = useQuery({
    queryKey: ["movies", "search", { query: normalizedQuery }],
    queryFn: () => searchMovies({ query: normalizedQuery }),
    enabled: normalizedQuery.length > 0,
  });

  const searchResults = searchQuery.data?.results ?? [];
  const totalResults = searchQuery.data?.total_results ?? 0;

  useEffect(() => {
    setSearchText(query ?? "");
  }, [query]);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextQuery = searchText.trim();

    navigate({
      search: nextQuery ? { query: nextQuery } : {},
    });
  }

  return (
    <main
      className={`mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 sm:px-6 ${
        hasQuery
          ? "py-8 sm:py-10"
          : "min-h-[calc(100vh-128px)] items-center justify-center py-12"
      }`}
    >
      {!hasQuery ? (
        <section className="w-full max-w-xl text-center">
          <h1 className="mb-7 text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl">
            어떤 영화를 찾고 있나요?
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex w-full items-center gap-3 rounded-xl border-2 border-gray-800 bg-white px-4 py-2 shadow-lg"
            role="search"
          >
            <label className="sr-only" htmlFor="movie-search">
              검색어
            </label>

            <img src="/icons/search.svg" alt="" className="h-5 w-5 shrink-0" />

            <input
              id="movie-search"
              type="search"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="예: 스파이더맨"
              className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-gray-400"
            />

            <button
              type="submit"
              className="rounded-lg bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              검색
            </button>
          </form>
        </section>
      ) : (
        <>
          <h1 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl">
            영화 검색
          </h1>

          <form
            onSubmit={handleSubmit}
            className="mb-4 flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm"
            role="search"
          >
            <label className="sr-only" htmlFor="movie-search">
              검색어
            </label>

            <img src="/icons/search.svg" alt="" className="h-5 w-5 shrink-0" />

            <input
              id="movie-search"
              type="search"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="영화 제목 또는 원제 검색"
              className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none"
            />

            {searchText && (
              <button
                type="button"
                aria-label="검색어 지우기"
                onClick={() => setSearchText("")}
                className="px-1 text-xl text-gray-400 hover:text-gray-700"
              >
                ×
              </button>
            )}

            <button
              type="submit"
              className="rounded-lg bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              다시 검색
            </button>
          </form>

          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-sm font-semibold text-gray-900">
              ‘{query}’ 검색 결과
            </h2>

            <p className="text-xs text-gray-400">
              영화 {totalResults}편 · 1페이지
            </p>
          </div>

          {searchQuery.isLoading ? (
            <p
              role="status"
              className="py-12 text-center text-sm text-gray-500"
            >
              검색 결과를 불러오는 중이에요.
            </p>
          ) : searchQuery.isError ? (
            <p role="alert" className="py-12 text-center text-sm text-red-600">
              {searchQuery.error.message}
            </p>
          ) : searchQuery.isSuccess && searchResults.length === 0 ? (
            <p className="rounded-lg border border-dashed border-gray-300 bg-white px-5 py-12 text-center text-sm text-gray-500">
              검색 결과가 없어요.
            </p>
          ) : (
            <ul className="grid grid-cols-1 overflow-hidden border border-indigo-300 bg-white/40 md:grid-cols-2">
              {searchResults.map((movie) => {
                const posterUrl = getTmdbPosterUrl(movie.poster_path);

                return (
                  <li
                    key={movie.id}
                    className="flex min-w-0 gap-3 border-b border-r border-indigo-200 p-3 sm:gap-4 sm:p-4"
                  >
                    <Link
                      to="/movies/$movieId"
                      params={{ movieId: String(movie.id) }}
                      aria-label={`${movie.title} 상세 보기`}
                      className="h-32 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-36 sm:w-24"
                    >
                      {posterUrl ? (
                        <img
                          src={posterUrl}
                          alt={`${movie.title} 포스터`}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gray-200 text-xs text-gray-600">
                          이미지 없음
                        </div>
                      )}
                    </Link>

                    <div className="flex min-w-0 flex-1 flex-col items-start">
                      <Link
                        to="/movies/$movieId"
                        params={{ movieId: String(movie.id) }}
                        className="line-clamp-1 text-sm font-bold text-gray-950 hover:text-indigo-700"
                      >
                        {movie.title}
                      </Link>

                      <p className="mt-1 line-clamp-1 text-[11px] text-gray-400">
                        {movie.original_title} · {movie.release_date}
                      </p>

                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-600">
                        {movie.overview}
                      </p>

                      <div className="mt-auto flex items-center gap-3 pt-2">
                        <Link
                          to="/movies/$movieId"
                          params={{ movieId: String(movie.id) }}
                          className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                        >
                          상세 보기 →
                        </Link>

                        <button
                          type="button"
                          aria-pressed={bookmarkedMovieIdSet.has(movie.id)}
                          aria-label={`${movie.title} 북마크 토글`}
                          onClick={() => toggleBookmark(movie.id)}
                          className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold transition-colors ${
                            bookmarkedMovieIdSet.has(movie.id)
                              ? "bg-blue-600 text-white"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          <img
                            src={
                              bookmarkedMovieIdSet.has(movie.id)
                                ? "/icons/bookmark.svg"
                                : "/icons/bookmark-outline.svg"
                            }
                            alt=""
                            className={`h-4 w-4 ${
                              bookmarkedMovieIdSet.has(movie.id)
                                ? "brightness-0 invert"
                                : ""
                            }`}
                          />
                          북마크
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </main>
  );
}
