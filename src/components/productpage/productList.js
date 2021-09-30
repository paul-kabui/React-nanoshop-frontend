import ProductItem from "./productItem"

function ProductList(props){
    return(
        <ul className="row list-unstyled g-3">
        {
        props.productData.map((data) => <ProductItem 
            key = {data.pk}
            productId = {data.pk}
            image = {data.display_image}
            productName = {data.productName}
            price = {data.price}
            quantity = {data.quantity}
            />)
        }
    </ul>
    )

}

export default ProductList