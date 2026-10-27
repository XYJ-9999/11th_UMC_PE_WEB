import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="h-16 shrink-0 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center px-6">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 text-[16px] font-extrabold text-gray-900 no-underline"
        >
          <img
            src="/logo.png"
            alt="UMCine 로고"
            className="h-[22px] w-[22px] object-contain"
          />
          UMCine
        </Link>

        <nav className="ml-10 flex items-center gap-6">
          <Link
            to="/"
            className="text-[13px] font-medium text-gray-900 no-underline"
          >
            영화
          </Link>

          <Link
            to="/search"
            className="text-[13px] font-medium text-gray-500 no-underline transition-colors hover:text-gray-900"
          >
            검색
          </Link>

          <a
            href="#"
            className="text-[13px] font-medium text-gray-500 no-underline transition-colors hover:text-gray-900"
          >
            내 정보
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Link
            to="/search"
            aria-label="검색"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m16 16 4 4" />
            </svg>
          </Link>

          <button
            type="button"
            className="rounded-md bg-gray-900 px-4 py-2 text-[12px] font-medium text-white transition hover:bg-gray-700"
          >
            로그인
          </button>
        </div>
      </div>
    </header>
  );
}
