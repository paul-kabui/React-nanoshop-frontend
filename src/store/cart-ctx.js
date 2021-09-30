import { createContext, useState} from "react";


const LocalCartContext = createContext({
    cartItems : [],
    cartNumber : 0,
    addToCart : (localCart) => {},
    removeFromCart : (productId) => {},
    isCartItem : (productId) => {}
})



export function LocalCartContextProvider(props){
    const [userCart, setUserCart] = useState([])

    function addToCartHandler(localCart){
        setUserCart((prevLocalCart) => {
            return prevLocalCart.concat(localCart)
        })
    }
    function removeFromCartHandler(productId){
        setUserCart((prevLocalCart) => {
            return prevLocalCart.filter((cartItem) => cartItem.id !== productId )
        })
    }
    function isCartItemHandler(productId){
        return userCart.some(cartItem => cartItem.id === productId)
    }

    const context = {
        cartItems : userCart,
        cartNumber : userCart.length,
        addToCart : addToCartHandler,
        removeFromCart : removeFromCartHandler,
        isCartItem : isCartItemHandler
    }

    return <LocalCartContext.Provider value={context}>
        {props.children}
    </LocalCartContext.Provider>
}

export default LocalCartContext