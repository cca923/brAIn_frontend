import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { toastSelector } from "../../store/selectors";
import { removeToast } from "../../store/toast/slice";

import { ItemContainer, ToastContainer } from "./styles";

const ToastItem = ({ message, type }) => {
  return <ItemContainer type={type}>{message}</ItemContainer>;
};

const Toast = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector(toastSelector);

  useEffect(() => {
    if (messages?.length > 0) {
      const timeout = setTimeout(() => {
        dispatch(removeToast());
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [dispatch, messages?.length]);

  return (
    <ToastContainer>
      {messages?.map((msg) => (
        <ToastItem key={msg?.id} message={msg?.message} type={msg?.type} />
      ))}
    </ToastContainer>
  );
};

export default Toast;
