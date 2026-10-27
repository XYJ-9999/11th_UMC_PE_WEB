import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookmarkStore {
  bookmarkedMovieIds: number[];
  toggleBookmark: (movieId: number) => void;
}

export const useBookmarkStore = create<BookmarkStore>()(
  persist(
    (set) => ({
      bookmarkedMovieIds: [],

      toggleBookmark: (movieId) => {
        set((state) => {
          const alreadyBookmarked = state.bookmarkedMovieIds.includes(movieId);

          return {
            bookmarkedMovieIds: alreadyBookmarked
              ? state.bookmarkedMovieIds.filter((id) => id !== movieId)
              : [...state.bookmarkedMovieIds, movieId],
          };
        });
      },
    }),
    {
      name: "umcine-bookmark-store",
    },
  ),
);
