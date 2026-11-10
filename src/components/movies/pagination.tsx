interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.min(totalPages, 500);

  if (lastPage <= 1) return null;

  const startPage = Math.max(1, Math.min(currentPage - 2, lastPage - 4));

  const pages = Array.from(
    { length: Math.min(5, lastPage) },
    (_, index) => startPage + index,
  );

  const buttonClass =
    "h-9 min-w-9 rounded-lg border px-3 text-sm font-semibold " +
    "disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <nav
      aria-label="영화 목록 페이지"
      className="mt-10 flex justify-center gap-2"
    >
      <button
        type="button"
        className={buttonClass}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        이전
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          aria-current={currentPage === page ? "page" : undefined}
          className={`${buttonClass} ${
            currentPage === page
              ? "border-indigo-600 bg-indigo-600 text-white"
              : "border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className={buttonClass}
        disabled={currentPage === lastPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        다음
      </button>
    </nav>
  );
}
