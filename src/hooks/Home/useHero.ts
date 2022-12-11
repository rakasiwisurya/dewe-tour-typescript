import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getGroupTours, resetGroupTours } from "@/redux";

export const useHero = () => {
  const [keyword, setKeyword] = useState("");

  const dispatch = useAppDispatch();
  const { groupToursErrors } = useAppSelector((state) => state.groupTour);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

  const handleSearch = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    const payload: { keyword?: string } = {};
    if (keyword) payload.keyword = keyword;

    dispatch(getGroupTours(payload));
  };

  const handleNotifClose = () => dispatch(resetGroupTours());

  return {
    groupToursErrors,
    handleChange,
    handleSearch,
    handleNotifClose,
  };
};
