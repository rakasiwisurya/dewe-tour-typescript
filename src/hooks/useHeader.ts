import { useState } from "react";

export const useHeader = () => {
  const [isModalLoginAvailable, setIsModalLoginAvailable] = useState(false);
  const [isModalRegisterAvailable, setIsModalRegisterAvailable] = useState(false);

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

  return {
    isModalLoginAvailable,
    isModalRegisterAvailable,
    handleModalLoginOpen,
    handleModalRegisterOpen,
    handleModalSwitch,
    handleModalClose,
  };
};
