import Header from './components/header';
import MovieGrid from './components/movie-grid';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <MovieGrid />

      <footer className="footer">
        <p>
          This product uses the TMDB API but is not endorsed or certified by
          <a href="https://www.themoviedb.org/" target="_blank">
            TMDB
          </a>
          .
        </p>
      </footer> 
    </div>
  );
}