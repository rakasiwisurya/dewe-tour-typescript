import { useEffect } from "react";
import { useAppDispatch } from "@/hooks";
import { getGroupTours } from "@/redux";

export const useHome = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGroupTours());
  }, [dispatch]);

  return {};
};
