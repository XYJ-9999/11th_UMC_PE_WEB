import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { createFavorite, deleteFavorite, getFavoriteStatus } from "../api/favorites/favorites";
import { useAuthStore } from "../stores/auth-store";
import { getAuthMemberId } from "../utils/auth-member-id";

export function useFavorite(movieId: number) {
  const accessToken = useAuthStore((state) => state.accessToken);
  const memberId = getAuthMemberId(accessToken);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const queryKey = ["favorites", memberId, "detail", movieId];
  const favoriteQuery = useQuery({
    queryKey,
    queryFn: () => getFavoriteStatus(movieId),
    enabled: memberId !== null,
    retry: false,
  });
  const isBookmarked = memberId !== null && favoriteQuery.data === true;
  const mutation = useMutation({
    mutationFn: async (wasBookmarked: boolean) => {
      if (wasBookmarked) await deleteFavorite(movieId);
      else await createFavorite(movieId);
      return !wasBookmarked;
    },
    onMutate: () => queryClient.cancelQueries({ queryKey, exact: true }),
    onSuccess: (isFavorite) => {
      queryClient.setQueryData(queryKey, isFavorite);
      queryClient.invalidateQueries({ queryKey: ["favorites", memberId, "list"] });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey });
      queryClient.invalidateQueries({ queryKey: ["favorites", memberId, "list"] });
      alert("즐겨찾기 변경에 실패했어요. 다시 시도해 주세요.");
    },
  });

  const toggleBookmark = () => {
    if (memberId === null) {
      navigate({ to: "/login" });
      return;
    }
    if (favoriteQuery.isError) {
      favoriteQuery.refetch();
      return;
    }
    if (!favoriteQuery.isSuccess || mutation.isPending) return;
    mutation.mutate(isBookmarked);
  };

  return { isBookmarked, favoriteQuery, mutation, toggleBookmark };
}
