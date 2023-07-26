import { useSelector } from "react-redux"


export const useTotalCartItem = () => {
    let total = 0
    const cart = useSelector((state)=>state.cart)
    cart.cart.forEach(item => {
        total += item.count
    })

    return total

}