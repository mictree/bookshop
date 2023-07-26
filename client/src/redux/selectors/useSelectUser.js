import { useSelector } from "react-redux";

const getAuth = (store) => store.auth

export const useSelectUser = () => useSelector(getAuth)
