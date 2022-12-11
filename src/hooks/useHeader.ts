import { logout } from "@/redux";
import { webStorage } from "@/utils";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useHeader = () => {
  const [isModalLoginAvailable, setIsModalLoginAvailable] = useState(false);
  const [isModalRegisterAvailable, setIsModalRegisterAvailable] = useState(false);

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleModalLoginOpen = () => setIsModalLoginAvailable(true);
  const handleModalRegisterOpen = () => setIsModalRegisterAvailable(true);

  const handleModalSwitch = () => {
    setIsModalLoginAvailable((prevState) => !prevState);
    setIsModalRegisterAvailable((prevState) => !prevState);
  };

  const handleModalClose = () => {
    setIsModalLoginAvailable(false);
    setIsModalRegisterAvailable(false);
  };

  const handleLogout = () => {
    webStorage.clear();
    dispatch(logout());
  };

  return {
    user,
    isModalLoginAvailable,
    isModalRegisterAvailable,
    handleModalLoginOpen,
    handleModalRegisterOpen,
    handleModalSwitch,
    handleModalClose,
    handleLogout,
  };
};
