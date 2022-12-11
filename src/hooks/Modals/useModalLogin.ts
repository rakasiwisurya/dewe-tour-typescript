import { ModalUnstyledOwnProps } from "@mui/material";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { login, resetLogin } from "@/redux";

export const useModalLogin = ({ onClose }: { onClose: ModalUnstyledOwnProps["onClose"] | any }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const { isLoginLoading, loginSuccess, loginErrors } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (loginSuccess) {
      setForm({ email: "", password: "" });
      onClose();
    }
  }, [loginSuccess]);

  const handleNotifClose = () => dispatch(resetLogin());

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    const data = {
      email: form.email,
      password: form.password,
    };

    dispatch(login(data));
  };

  return {
    isLoginLoading,
    loginSuccess,
    loginErrors,
    handleNotifClose,
    handleChange,
    handleSubmit,
  };
};
