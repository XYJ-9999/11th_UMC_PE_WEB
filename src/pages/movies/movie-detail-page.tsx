import { useEffect, useState, type SubmitEvent } from "react";
import { Link, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "../../api/movies/get-movie-detail";
import { getMovieDetailErrorMessage } from "../../utils/movies/get-movie-detail-error-message";
import {
  getTmdbBackdropUrl,
  getTmdbPosterUrl,
} from "../../utils/movies/tmdb-image";
import { BookmarkButton } from "../../components/bookmark-button";

export function MovieDetailPage() {
  const { movieId: movieIdParam } = useParams({
    from: "/movies/$movieId",
  });

  const movieId = Number(movieIdParam);
  const isValidMovieId = Number.isInteger(movieId) && movieId > 0;

  const movieDetailQuery = useQuery({
    queryKey: ["movies", "detail", movieId],
    queryFn: () => getMovieDetail(movieId),
    enabled: isValidMovieId,
  });

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isReviewSaved, setIsReviewSaved] = useState(false);

  useEffect(() => {
    setRating(0);
    setComment("");
    setIsReviewSaved(false);
  }, [movieId]);

  if (!isValidMovieId) {
    return (
      <main className="mx-auto flex min-h-[calc(100vh-128px)] w-full max-w-6xl flex-1 items-start px-4 py-12 sm:px-6">
        <p
          role="alert"
          className="rounded-xl border border-gray-200 bg-white px-6 py-5 text-gray-700"
        >
          올바르지 않은 영화 번호예요.
        </p>
      </main>
    );
  }

  if (movieDetailQuery.isPending) {
    return (
      <main className="mx-auto flex min-h-[calc(100vh-128px)] w-full max-w-6xl flex-1 items-start px-4 py-12 sm:px-6">
        <p
          role="status"
          className="rounded-xl border border-gray-200 bg-white px-6 py-5 text-gray-700"
        >
          영화 상세 정보를 불러오는 중이에요.
        </p>
      </main>
    );
  }

  if (movieDetailQuery.isError) {
    return (
      <main className="mx-auto flex min-h-[calc(100vh-128px)] w-full max-w-6xl flex-1 items-start px-4 py-12 sm:px-6">
        <p
          role="alert"
          className="rounded-xl border border-gray-200 bg-white px-6 py-5 text-gray-700"
        >
          {getMovieDetailErrorMessage(movieDetailQuery.error)}
        </p>
      </main>
    );
  }

  const movie = movieDetailQuery.data;

  const posterUrl = getTmdbPosterUrl(movie.poster_path);
  const backdropUrl = getTmdbBackdropUrl(movie.backdrop_path);
  const genreNames = movie.genres.map((genre) => genre.name).join(", ");

  const runtime =
    typeof movie.runtime === "number"
      ? movie.runtime >= 60
        ? `${Math.floor(movie.runtime / 60)}시간 ${movie.runtime % 60}분`
        : `${movie.runtime}분`
      : "상영 시간 정보가 없어요.";

  return (
    <main className="flex-1 text-gray-900">
      <section className="relative isolate flex min-h-[270px] overflow-hidden bg-gray-950 text-white sm:min-h-[310px]">
        {backdropUrl ? (
          <img
            src={backdropUrl}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gray-500 text-sm text-white">
            이미지 없음
          </div>
        )}

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/35"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/20"
        />

        <div className="mx-auto flex w-full max-w-6xl flex-col justify-end px-4 py-6 sm:px-6 sm:py-8">
          <Link
            to="/"
            className="mb-auto inline-flex w-fit items-center gap-2 rounded-full px-1 py-1 text-xs font-medium text-white/90 transition hover:text-white"
          >
            <span aria-hidden="true">←</span> 영화 목록
          </Link>

          <div className="max-w-3xl pt-12 sm:pt-16">
            <h1 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              {movie.title}
            </h1>

            <p className="mt-1 text-xs text-gray-200 sm:text-sm">
              {movie.original_title}
            </p>

            <p className="mt-2 text-[11px] font-medium text-gray-100 sm:text-xs">
              {movie.release_date} · {genreNames} · {runtime}
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-[360px] bg-[#f5f6f8]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 px-4 py-6 sm:px-6 md:grid-cols-[140px_minmax(0,1fr)_260px] md:gap-6 lg:gap-8">
          <div className="mx-auto aspect-[2/3] w-36 self-start overflow-hidden rounded-lg bg-gray-200 shadow-xl md:mx-0 md:w-full">
            {posterUrl ? (
              <img
                src={posterUrl}
                alt={`${movie.title} 포스터`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs text-gray-600">
                이미지 없음
              </div>
            )}
          </div>

          <div className="min-w-0">
            <h2 className="text-base font-bold text-gray-900">
              {movie.tagline}
            </h2>

            <p className="mt-3 text-xs leading-6 text-gray-600 sm:text-sm">
              {movie.overview}
            </p>

            <BookmarkButton movieId={movie.id} variant="detail" showLabel />
          </div>

          <aside className="border-t border-gray-200 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
            <h2 className="text-sm font-bold text-gray-900">내 평점</h2>

            <p className="mt-1 text-[10px] text-gray-400">
              별점을 주고, 후기는 선택이에요.
            </p>

            <form
              className="mt-3"
              onSubmit={(event: SubmitEvent<HTMLFormElement>) => {
                event.preventDefault();
                setIsReviewSaved(true);
              }}
            >
              <div className="flex gap-1" role="group" aria-label="별점 선택">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    aria-label={`${star}점`}
                    aria-pressed={rating === star}
                    onClick={() => {
                      setRating(star);
                      setIsReviewSaved(false);
                    }}
                    className={`flex h-8 w-8 items-center justify-center rounded-md border text-lg transition-colors ${
                      rating >= star
                        ? "border-amber-300 bg-amber-50 text-amber-500"
                        : "border-gray-200 bg-white text-gray-400 hover:bg-gray-100"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>

              <label className="sr-only" htmlFor="movie-review">
                영화 후기
              </label>

              <textarea
                id="movie-review"
                value={comment}
                onChange={(event) => {
                  setComment(event.target.value);
                  setIsReviewSaved(false);
                }}
                placeholder="영화를 보고 느낀 점을 남겨보세요."
                rows={3}
                className="mt-2 w-full resize-y rounded-md border border-gray-200 bg-white p-3 text-xs outline-none placeholder:text-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />

              <button
                type="submit"
                disabled={rating === 0}
                className="mt-1 w-full rounded-md bg-gray-900 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                {isReviewSaved ? "평점 저장 완료" : "평점 저장"}
              </button>
            </form>
          </aside>
        </div>
      </section>
    </main>
  );
}
