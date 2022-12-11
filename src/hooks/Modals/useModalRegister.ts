import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { register, resetRegister } from "@/redux";
import { ModalUnstyledOwnProps, SelectChangeEvent } from "@mui/material";

export const useModalRegister = (payload: { onClose: ModalUnstyledOwnProps["onClose"] | any }) => {
  const { onClose } = payload;

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    gender: 1,
    address: "",
  });

  const dispatch = useAppDispatch();

  const { isRegisterLoading, registerSuccess, registerErrors } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (registerSuccess) {
      setForm({ fullname: "", email: "", password: "", phone: "", gender: 1, address: "" });
      onClose();
    }
  }, [registerSuccess]);

  const handleNotifClose = () => dispatch(resetRegister());

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    const data = {
      fullname: form.fullname,
      email: form.email,
      password: form.password,
      phone: form.phone,
      gender_id: +form.gender,
      address: form.address,
    };

    dispatch(register(data));
  };

  return {
    isRegisterLoading,
    registerSuccess,
    registerErrors,
    handleNotifClose,
    handleChange,
    handleSelectChange,
    handleTextAreaChange,
    handleSubmit,
  };
};
