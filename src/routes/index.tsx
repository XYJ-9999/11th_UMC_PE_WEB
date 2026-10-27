import { createFileRoute } from "@tanstack/react-router";
import MovieGrid from "../components/movie-grid";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return <MovieGrid />;
}