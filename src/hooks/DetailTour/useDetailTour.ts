import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getGroupTour, resetGroupTour } from "@/redux";

export const useDetailTour = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);

  const dispatch = useAppDispatch();
  const { isGroupTourLoading, groupTour, groupTourErrors } = useAppSelector(
    (state) => state.groupTour
  );

  useEffect(() => {
    dispatch(getGroupTour({ id }));
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(groupTour).length > 0) {
      if (groupTour.price) {
        setTotal(groupTour.price * count);
      }
    }
  }, [groupTour, count]);

  const handleNotifClose = () => dispatch(resetGroupTour());

  const handleCountAdd = () => {
    setCount((prevState) =>
      prevState < (groupTour.max_quota ? groupTour.max_quota : 2) ? prevState + 1 : prevState
    );
  };

  const handleCountSubtract = () => {
    setCount((prevState) => (prevState > 1 ? prevState - 1 : prevState));
  };

  const handleBook = async () => {
    console.log("book...");
    alert("book...");
  };

  return {
    count,
    total,
    isGroupTourLoading,
    groupTour,
    groupTourErrors,
    handleNotifClose,
    handleCountAdd,
    handleCountSubtract,
    handleBook,
  };
};
