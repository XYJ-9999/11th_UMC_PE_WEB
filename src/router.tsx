import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  useSearch,
  useNavigate,
  useParams,
  Link,
} from "@tanstack/react-router";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";

import Header from "./components/header";
import MovieGrid from "./components/movie-grid";
import { movies } from "./data/movies";
import { useBookmarkStore } from "./stores/bookmark-store";
//새로추가한부분
import { searchMovies } from "./api/movies/search-movies";
import type { TmdbMovieListItem } from "./api/movies/models";

// ====================
// 전체 레이아웃
// ====================

export const rootRoute = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f4f5f8]">
      <Header />

      <Outlet />

      <footer className="mt-auto border-t border-gray-200 bg-white px-6 py-4 text-center text-[10px] text-gray-500">
        <p>
          This product uses the TMDB API but is not endorsed or certified by{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-900"
          >
            TMDB
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

// ====================
// 영화 목록 페이지
// ====================

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: MovieGrid,
});

// ====================
// 검색 페이지
// ====================

function SearchPage() {
  const { query } = useSearch({
    from: "/search",
  });

  const navigate = useNavigate({
    from: "/search",
  });

  const [searchText, setSearchText] = useState(query);
  const [searchResults, setSearchResults] = useState<TmdbMovieListItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleBookmark = useBookmarkStore((state) => state.toggleBookmark);

  const bookmarkedMovieIds = useBookmarkStore(
    (state) => state.bookmarkedMovieIds,
  );

  useEffect(() => {
    setSearchText(query);
  }, [query]);

  useEffect(() => {
    const normalizedQuery = query.trim();

    if (!normalizedQuery) {
      setSearchResults([]);
      setIsLoading(false);
      setErrorMessage("");
      return;
    }

    let ignore = false;

    setIsLoading(true);
    setErrorMessage("");

    searchMovies({ query: normalizedQuery })
      .then((response) => {
        if (!ignore) {
          setSearchResults(response.results);
        }
      })
      .catch((error) => {
        console.error("TMDB 영화 검색 실패:", error);

        if (!ignore) {
          setSearchResults([]);
          setErrorMessage(
            "영화 검색에 실패했어요. 잠시 후 다시 시도해 주세요.",
          );
        }
      })
      .finally(() => {
        if (!ignore) {
          setIsLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, [query]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextQuery = searchText.trim();

    navigate({
      search: nextQuery ? { query: nextQuery } : {},
    });
  };

  return (
    <main className="flex-1 bg-[#f4f5f8]">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <h2 className="mb-6 text-2xl font-bold text-[#191a20]">영화 검색</h2>

        <form
          onSubmit={handleSubmit}
          className="mb-8 flex w-full max-w-2xl gap-2"
        >
          <input
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="영화 제목을 검색하세요"
            className="h-10 flex-1 rounded-md border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="rounded-md bg-[#2864f0] px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            검색
          </button>
        </form>

        {!query && (
          <p className="text-sm text-gray-500">검색어를 입력해주세요.</p>
        )}

        {query && isLoading && (
          <p className="py-10 text-center text-sm text-gray-500">
            영화를 검색하고 있어요...
          </p>
        )}

        {query && !isLoading && errorMessage && (
          <p className="py-10 text-center text-sm text-red-500">
            {errorMessage}
          </p>
        )}

        {query && !isLoading && !errorMessage && (
          <p className="mb-5 text-sm text-gray-600">
            "{query}" 검색 결과{" "}
            <span className="font-semibold text-[#191a20]">
              {searchResults.length}개
            </span>
          </p>
        )}

        {query && !isLoading && !errorMessage && searchResults.length === 0 && (
          <p className="py-10 text-center text-sm text-gray-500">
            검색 결과가 없습니다.
          </p>
        )}

        {!isLoading && !errorMessage && searchResults.length > 0 && (
          <div className="flex flex-col divide-y divide-gray-200">
            {searchResults.map((movie) => {
              const bookmarked = bookmarkedMovieIds.includes(movie.id);

              return (
                <div key={movie.id} className="flex gap-4 py-5">
                  <Link
                    to="/movies/$movieId"
                    params={{ movieId: String(movie.id) }}
                    className="flex min-w-0 flex-1 gap-4 no-underline"
                  >
                    <div className="h-36 w-24 shrink-0 overflow-hidden rounded-md bg-gray-200">
                      {movie.poster_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                          alt={`${movie.title} 포스터`}
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-center text-xs text-gray-500">
                          포스터 없음
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 py-1">
                      <h3 className="truncate text-base font-bold text-[#191a20]">
                        {movie.title}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {movie.original_title}
                      </p>

                      <p className="mt-2 text-xs text-gray-500">
                        {movie.release_date || "개봉일 정보 없음"}
                      </p>

                      <p className="mt-3 line-clamp-3 text-xs leading-5 text-gray-600">
                        {movie.overview || "줄거리 정보가 없습니다."}
                      </p>
                    </div>
                  </Link>

                  <button
                    type="button"
                    aria-label={bookmarked ? "북마크 해제" : "북마크 추가"}
                    aria-pressed={bookmarked}
                    onClick={() => toggleBookmark(movie.id)}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition ${
                      bookmarked
                        ? "border-blue-500 bg-blue-600"
                        : "border-gray-200 bg-white hover:bg-gray-100"
                    }`}
                  >
                    <img
                      src={
                        bookmarked
                          ? "/icons/movie-icons/bookmark.svg"
                          : "/icons/movie-icons/bookmark-outline.svg"
                      }
                      alt=""
                      className={`h-5 w-5 ${
                        bookmarked ? "brightness-0 invert" : ""
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}

// ====================
// 검색 Route
// ====================

const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search",

  validateSearch: (search) => ({
    query: typeof search.query === "string" ? search.query : "",
  }),

  component: SearchPage,
});

// ====================
// 영화 상세 페이지
// ====================

function MovieDetailPage() {
  const { movieId } = useParams({
    from: "/movies/$movieId",
  });

  const movie = movies.find((item) => item.id === Number(movieId));

  const toggleBookmark = useBookmarkStore((state) => state.toggleBookmark);

  const bookmarkedMovieIds = useBookmarkStore(
    (state) => state.bookmarkedMovieIds,
  );

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  if (!movie) {
    return (
      <main className="flex flex-1 items-center justify-center bg-[#f4f5f8]">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900">
            영화를 찾을 수 없어요.
          </h2>
          <Link
            to="/"
            className="mt-4 inline-block rounded-md bg-gray-900 px-4 py-2 text-sm text-white no-underline"
          >
            영화 목록으로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  const bookmarked = bookmarkedMovieIds.includes(movie.id);

  const handleSaveReview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (rating === 0) {
      alert("별점을 선택해주세요.");
      return;
    }

    alert("평점 저장 기능은 아직 실제 저장소와 연결되지 않았어요.");
  };

  return (
    <main className="flex flex-1 flex-col bg-[#f4f5f8] text-[#191a20]">
      {/* 헤더 아래 영화 목록 이동 */}
      <div className="mx-auto w-full max-w-5xl px-6 pt-5 sm:px-8">
        <Link
          to="/"
          className="text-xs font-medium text-gray-500 no-underline hover:text-gray-900"
        >
          ← 영화 목록
        </Link>
      </div>

      {/* 영화 배경 및 제목 */}
      <section className="relative mt-4 h-[210px] shrink-0 overflow-hidden sm:h-[230px]">
        <img
          src={movie.backdropPath}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative mx-auto flex h-full w-full max-w-5xl flex-col items-start justify-end px-6 pb-5 sm:px-8">
          <h1 className="text-left text-xl font-bold leading-tight text-white sm:text-2xl">
            {movie.title}
          </h1>

          <p className="mt-1 text-left text-[11px] text-gray-200">
            {movie.originalTitle}
          </p>

          <p className="mt-2 text-left text-[10px] text-gray-200">
            {movie.releaseDate}
            <span className="mx-1.5">·</span>
            {movie.genres.join(" · ")}
            <span className="mx-1.5">·</span>
            {movie.runtime}
          </p>
        </div>
      </section>

      {/* 포스터 / 소개 / 평점 */}
      <section className="mx-auto grid w-full max-w-5xl flex-1 grid-cols-1 content-start gap-6 px-6 py-5 sm:px-8 md:grid-cols-[125px_minmax(0,1fr)_224px] md:gap-5">
        <div>
          <img
            src={movie.posterPath}
            alt={`${movie.title} 포스터`}
            className="mx-auto aspect-[2/3] w-[125px] rounded-md object-cover shadow-md md:mx-0"
          />
        </div>

        <div className="min-w-0 text-left">
          <h2 className="text-xs font-bold leading-5 text-gray-900">
            {movie.tagline}
          </h2>

          <p className="mt-2 whitespace-pre-line break-words text-[11px] leading-5 text-gray-500">
            {movie.overview}
          </p>

          <button
            type="button"
            onClick={() => toggleBookmark(movie.id)}
            aria-pressed={bookmarked}
            className={`mt-3 inline-flex h-8 items-center gap-1.5 rounded-md px-3 text-[11px] font-semibold text-white transition ${
              bookmarked
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <img
              src={
                bookmarked
                  ? "/icons/movie-icons/bookmark.svg"
                  : "/icons/movie-icons/bookmark-outline.svg"
              }
              alt=""
              className="h-3.5 w-3.5 brightness-0 invert"
            />
            {bookmarked ? "즐겨찾기 해제" : "즐겨찾기"}
          </button>
        </div>

        <aside className="border-t border-gray-200 pt-5 text-left md:min-h-[180px] md:border-l md:border-t-0 md:pl-5 md:pt-0">
          <h2 className="text-xs font-bold text-gray-900">내 평점</h2>

          <p className="mt-1 text-[9px] text-gray-400">
            별점은 필수, 후기는 선택이에요.
          </p>

          <form onSubmit={handleSaveReview}>
            <div className="mt-2 flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  aria-label={`${star}점`}
                  aria-pressed={rating === star}
                  className={`flex h-6 w-6 items-center justify-center rounded border text-sm transition ${
                    rating >= star
                      ? "border-blue-200 bg-blue-50 text-blue-500"
                      : "border-gray-200 bg-white text-gray-400 hover:bg-gray-100"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>

            <textarea
              value={review}
              onChange={(event) => setReview(event.target.value)}
              placeholder="영화를 보고 느낀 점을 남겨보세요."
              rows={4}
              className="mt-2 w-full resize-none rounded-md border border-gray-200 bg-white p-2 text-[10px] leading-4 outline-none placeholder:text-gray-400 focus:border-blue-400"
            />

            <button
              type="submit"
              className="mt-1.5 h-7 w-full rounded-md bg-[#191a20] text-[10px] font-semibold text-white transition hover:bg-gray-700"
            >
              평점 저장
            </button>
          </form>
        </aside>
      </section>
    </main>
  );
}

// ====================
// 영화 상세 Route
// ====================

const movieDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/movies/$movieId",
  component: MovieDetailPage,
});

// ====================
// Route Tree
// ====================

const routeTree = rootRoute.addChildren([
  indexRoute,
  searchRoute,
  movieDetailRoute,
]);

// ====================
// Router
// ====================

export const router = createRouter({
  routeTree,
});
