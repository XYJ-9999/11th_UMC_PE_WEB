import { tmdbClient } from "../tmdb-client";
import type { TmdbMovieListResponse } from "./models";

interface GetMoviesRequest {
  page?: number;
}

type GetMoviesResponse = TmdbMovieListResponse;

// 인기 영화 목록 조회
function getMovies({ page = 1 }: GetMoviesRequest = {}) {
  return tmdbClient
    .get("movie/popular", {
      searchParams: { language: "ko-KR", page },
    })
    .json<GetMoviesResponse>();
}

// 영화 상세 정보 조회
function getMovieDetail(movieId: number) {
  return tmdbClient
    .get(`movie/${movieId}`, {
      searchParams: { language: "ko-KR" },
    })
    .json<TmdbMovieDetailResponse>();
}

interface TmdbMovieDetailResponse {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  runtime: number | null;
  genres: {
    id: number;
    name: string;
  }[];
}

// 외부에서 사용할 수 있도록 export
export {
  getMovies,
  getMovieDetail,
  type GetMoviesRequest,
  type GetMoviesResponse,
  type TmdbMovieDetailResponse,
};
