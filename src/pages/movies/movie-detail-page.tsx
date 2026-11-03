import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router";
import { getMovieDetail } from "@/api/movies";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export function MovieDetailPage() {
  const { movieId: movieIdParam } = useParams({
    from: "/movies/$movieId",
  });

  const movieId = Number(movieIdParam);
  const isValidMovieId = Number.isInteger(movieId) && movieId > 0;

  const movieQuery = useQuery({
    queryKey: ["movies", "detail", movieId],
    queryFn: () => getMovieDetail(movieId),
    enabled: isValidMovieId,
  });

  if (!isValidMovieId) {
    return <p>올바르지 않은 영화 번호예요.</p>;
  }

  if (movieQuery.isPending) {
    return <p>영화 상세 정보를 불러오는 중이에요.</p>;
  }

  if (movieQuery.isError) {
    return (
      <main>
        <p>영화 정보를 불러오지 못했어요.</p>
        <p>{movieQuery.error.message}</p>
        <Link to="/">영화목록으로 돌아가기</Link>
      </main>
    );
  }

  const movie = movieQuery.data;

  return (
    <main>
      <Link to="/">영화목록으로 돌아가기</Link>

      <h1>{movie.title}</h1>

      {movie.poster_path && (
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={`${movie.title} 포스터`}
          width="250"
        />
      )}

      <p>개봉일: {movie.release_date || "정보 없음"}</p>
      <p>평점: {movie.vote_average ?? "정보 없음"}</p>
      <p>{movie.overview || "줄거리 정보가 없어요."}</p>
    </main>
  );
}
