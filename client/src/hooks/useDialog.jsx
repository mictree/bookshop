import { createContext, useContext, useState } from "react";

const Context = createContext()
export const DialogProvider = ({children}) => {
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    const [dialogData, setDialogData]= useState({})
    return <Context.Provider value={{isOpenDialog, setIsOpenDialog, dialogData, setDialogData}}>{children}</Context.Provider>
}

export const useDialog = () => useContext(Context)