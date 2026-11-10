import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "../../utils/cn";

export default function Header() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const isMovieListPage = pathname === "/";
  const isSearchPage = pathname === "/search";
  const isProfilePage = pathname === "/my-page" || pathname === "/my-page/edit";

  return (
    <header className="z-10 border-b border-gray-200 bg-white">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-5 sm:gap-10">
          <Link to="/" className="flex items-center gap-2 text-gray-950">
            <img src="/icons/movie.svg" alt="" className="block h-6 w-6" />
            <span className="text-lg font-extrabold tracking-tight">UMCine</span>
          </Link>
          <nav aria-label="주 메뉴" className="flex items-center gap-3 sm:gap-6">
            <Link
              to="/"
              aria-current={isMovieListPage ? "page" : undefined}
              className={cn(
                "py-2 text-xs font-medium text-gray-500 transition-colors hover:text-gray-950 sm:text-sm",
                isMovieListPage && "font-bold text-gray-950",
              )}
            >
              영화
            </Link>
            <Link
              to="/search"
              aria-current={isSearchPage ? "page" : undefined}
              className={cn(
                "py-2 text-xs font-medium text-gray-500 transition-colors hover:text-gray-950 sm:text-sm",
                isSearchPage && "font-bold text-gray-950",
              )}
            >
              검색
            </Link>
            <Link
              to="/my-page"
              aria-current={isProfilePage ? "page" : undefined}
              className={cn(
                "hidden py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-950 sm:inline-flex",
                isProfilePage && "font-bold text-gray-950 underline",
              )}
            >
              내 정보
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/search"
            aria-label="검색 페이지로 이동"
            className="rounded-lg border border-gray-200 p-2 text-gray-600 transition-colors hover:bg-gray-100"
          >
            <img src="/icons/search.svg" alt="" className="h-5 w-5" />
          </Link>
          <Link to="/login" className="rounded-lg bg-[#4a60df] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-indigo-700 sm:text-sm">
            로그인
          </Link>
        </div>
      </div>
    </header>
  );
}
