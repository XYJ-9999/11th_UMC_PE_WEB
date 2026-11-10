import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/layout/header";

export const Route = createRootRoute({
  component: () => (
    <div className="flex min-h-screen flex-col bg-[#f5f6f8]">
      <Header />
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex min-h-12 max-w-6xl items-center justify-end gap-2 px-4 text-[10px] text-gray-500 sm:px-6 sm:text-xs">
          <img src="/images/logos/tmdb-logo.svg" alt="TMDB" className="h-3 w-auto" />
          <span>
            This product uses the TMDB API but is not endorsed or certified by TMDB.
          </span>
        </div>
      </footer>
    </div>
  ),
  notFoundComponent: () => <main>페이지를 찾을 수 없어요.</main>,
});
