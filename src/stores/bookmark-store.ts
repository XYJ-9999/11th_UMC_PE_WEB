import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { readBookmarkIds } from "../utils/bookmark-storage";

const PERSISTED_BOOKMARK_KEY = "umcine-bookmark-store";
const LEGACY_BOOKMARK_KEY = "umcine-bookmarks";

function migrateLegacyBookmarks() {
  const persistedValue = localStorage.getItem(PERSISTED_BOOKMARK_KEY);
  const legacyValue = localStorage.getItem(LEGACY_BOOKMARK_KEY);

  if (persistedValue !== null || legacyValue === null) return;

  const bookmarkedMovieIds = readBookmarkIds();
  localStorage.setItem(
    PERSISTED_BOOKMARK_KEY,
    JSON.stringify({
      state: { bookmarkedMovieIds },
      version: 0,
    }),
  );
  localStorage.removeItem(LEGACY_BOOKMARK_KEY);
}

migrateLegacyBookmarks();

interface BookmarkStore {
  bookmarkedMovieIds: number[];
  toggleBookmark: (movieId: number) => void;
}

export const useBookmarkStore = create<BookmarkStore>()(
  persist(
    (set) => ({
      bookmarkedMovieIds: [],
      toggleBookmark: (movieId) =>
        set((state) => ({
          bookmarkedMovieIds: state.bookmarkedMovieIds.includes(movieId)
            ? state.bookmarkedMovieIds.filter((id) => id !== movieId)
            : [...state.bookmarkedMovieIds, movieId],
        })),
    }),
    {
      name: PERSISTED_BOOKMARK_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        bookmarkedMovieIds: state.bookmarkedMovieIds,
      }),
    },
  ),
);
