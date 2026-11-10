import { Link } from "@tanstack/react-router";
import { profilePreview } from "./profile-preview";

const favoriteMovies = [
  { title: "스파이더맨: 브랜드 뉴 데이", date: "2026.07.29", poster: "spider-man-brand-new-day.jpg" },
  { title: "오디세이", date: "2026.08.05", poster: "odyssey.jpg" },
  { title: "미니언즈 & 몬스터즈", date: "2026.07.15", poster: "minions-monsters.jpg" },
];

export function ProfilePage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6">
      <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-extrabold tracking-tight">내 정보</h1>
        <Link to="/my-page/edit" className="rounded-lg bg-[#4a60df] px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">정보 수정</Link>
      </div>

      <section className="border-b border-gray-200 py-4">
        <h2 className="mb-4 font-bold">기본 정보</h2>
        <div className="flex flex-wrap items-center gap-6">
          <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-gray-200">
            <img src="/icons/person.svg" alt="" className="h-10 w-10" />
          </div>
          <dl className="grid min-w-0 flex-1 gap-4 sm:max-w-3xl sm:grid-cols-2">
            <div>
              <dt className="text-xs text-gray-500">닉네임</dt>
              <dd className="mt-1 text-sm font-semibold">{profilePreview.nickname}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">이메일</dt>
              <dd className="mt-1 break-all text-sm font-semibold">{profilePreview.email}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="pt-6">
        <h2 className="mb-4 font-bold">내 즐겨찾기</h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {favoriteMovies.map((movie) => (
            <li key={movie.poster}>
              <img src={`/images/movies/${movie.poster}`} alt={`${movie.title} 포스터`} className="aspect-[7/8] w-full rounded-lg object-cover" />
              <p className="mt-2 text-sm font-semibold">{movie.title}</p>
              <p className="mt-1 text-xs text-gray-500">{movie.date}</p>
            </li>
          ))}
        </ul>
        <div aria-label="즐겨찾기 1페이지" className="mt-8 flex items-center justify-center gap-3">
          <img src="/icons/chevron-left.svg" alt="" className="h-4 w-4 opacity-30" />
          <span aria-current="page" className="grid h-9 w-9 place-items-center rounded-lg bg-[#171a20] text-sm text-white">1</span>
          <img src="/icons/chevron-right.svg" alt="" className="h-4 w-4 opacity-30" />
        </div>
      </section>
    </main>
  );
}
