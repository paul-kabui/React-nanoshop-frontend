import { createContext, useState} from "react";


const LocalCartContext = createContext({
    cartItems : [], //localStorage.get(name of data saved)
    cartNumber : 0,
    addToCart : (localCart) => {},
    removeFromCart : (productId) => {},
    updateCart : (id,newPrice,newQuantity) => {},
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
    function updateCartDataHandler(id, newPrice, newQuantity){
        setUserCart((prevLocalCart)=> {
            // data immutability must be prevented on all cost
           return prevLocalCart.map(item => item.id === id ? 
            {...item, calculatedPrice : newPrice, userQuanitity : newQuantity} : item)
        })
    }
    
    function isCartItemHandler(productId){
        return userCart.some(cartItem => cartItem.id === productId)
    }

    const context = {
        cartItems : userCart, //set to localStorage
        cartNumber : userCart.length,
        addToCart : addToCartHandler,
        removeFromCart : removeFromCartHandler,
        updateCart : updateCartDataHandler,
        isCartItem : isCartItemHandler,
    }

    return <LocalCartContext.Provider value={context}>
        {props.children}
    </LocalCartContext.Provider>
}

export default LocalCartContext