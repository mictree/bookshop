import { useSelector } from "react-redux";

const getCart = (store) => store.cart

export const useCart = () => useSelector(getCart)
