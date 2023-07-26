import { createContext, useContext, useState } from "react";

const Context = createContext()
export const BookQuantityProvider = ({children}) => {
    const [quantity, setQuantity] = useState(1)
    return <Context.Provider value={{quantity, setQuantity}}>{children}</Context.Provider>
}

export const useBookQuantityDetail = () => useContext(Context)