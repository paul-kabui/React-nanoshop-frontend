import ProductItem from "./productItem"

function ProductList(props){
    return(
        <div className="row g-3">
        {
            props.productData.map((data) => {
                return (data.productName === props.search || data.product_category === props.search)?
                <ProductItem 
                    key = {data.pk}
                    productId = {data.pk}
                    image = {data.display_image}
                    productName = {data.productName}
                    price = {data.price}
                    quantity = {data.quantity}
                    description = {data.description}
                    found ={true}
                    />
                :
                <ProductItem 
                key = {data.pk}
                productId = {data.pk}
                image = {data.display_image}
                productName = {data.productName}
                price = {data.price}
                quantity = {data.quantity}
                description = {data.description}
                />
            })
        }
    </div>
    )

}

export default ProductList