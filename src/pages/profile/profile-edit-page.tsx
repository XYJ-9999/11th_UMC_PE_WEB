import { useEffect, useState } from "react";
import { profilePreview } from "./profile-preview";

export function ProfileEditPage() {
  const [nickname, setNickname] = useState(profilePreview.nickname);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6 sm:px-6">
      <form className="flex flex-1 flex-col" onSubmit={(event) => event.preventDefault()}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">내 정보 수정</h1>
            <p className="mt-2 text-sm text-gray-500">닉네임과 프로필 이미지만 변경할 수 있어요.</p>
          </div>
          <button type="submit" className="rounded-lg bg-[#4a60df] px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">변경사항 저장</button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col items-center pt-4">
            <label className="group relative cursor-pointer">
              <span className="grid h-20 w-20 place-items-center overflow-hidden rounded-full bg-gray-200 group-focus-within:ring-2 group-focus-within:ring-indigo-600">
                {imageUrl ? (
                  <img src={imageUrl} alt="프로필 미리보기" className="h-full w-full object-cover" />
                ) : (
                  <img src="/icons/person.svg" alt="" className="h-10 w-10" />
                )}
              </span>
              <img src="/icons/edit.svg" alt="" className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-white p-1" />
              <input
                type="file"
                accept="image/*"
                aria-label="프로필 이미지 선택"
                className="sr-only"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file && file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024) {
                    setImageUrl(URL.createObjectURL(file));
                  }
                }}
              />
            </label>
            <p className="mt-2 text-sm font-semibold">프로필 이미지</p>
            <p className="mt-1 text-xs text-gray-500">선택 사항 · 최대 5MB</p>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="profile-nickname" className="mb-1 block text-sm font-semibold">닉네임</label>
              <div className="flex items-center gap-2 rounded-lg border border-[#e1e4ea] bg-white px-3 focus-within:border-[#4a60df]">
                <input id="profile-nickname" value={nickname} onChange={(event) => setNickname(event.target.value)} className="h-12 min-w-0 flex-1 text-sm outline-none" />
                <button type="button" disabled className="shrink-0 text-xs font-semibold text-[#3454e5]">중복 확인</button>
              </div>
            </div>
            <div>
              <label htmlFor="profile-email" className="mb-1 block text-sm font-semibold">이메일</label>
              <input id="profile-email" type="email" value={profilePreview.email} readOnly className="h-12 w-full rounded-lg border border-[#e1e4ea] bg-white px-3 text-sm" />
            </div>
          </div>
        </div>
      </form>

      <section className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-red-300 bg-red-50 p-4 text-red-800">
        <div>
          <h2 className="text-sm font-bold">회원 탈퇴</h2>
          <p className="mt-1 text-xs">탈퇴하면 작성한 평점, 후기와 즐겨찾기가 모두 삭제되며 복구할 수 없습니다.</p>
        </div>
        <button type="button" disabled className="rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-semibold">회원 탈퇴</button>
      </section>
    </main>
  );
}
