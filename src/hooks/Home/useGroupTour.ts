import { useAppSelector } from "@/hooks";

export const useGroupTour = () => {
  const { isGroupToursLoading, groupTours } = useAppSelector((state) => state.groupTour);

  return {
    isGroupToursLoading,
    groupTours,
  };
};
