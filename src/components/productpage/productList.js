import ProductItem from "./productItem"

function ProductList(props){
    // console.log(props)
    return <ul className="list-unstyled row m-3">
        {
            props.productData.map((data) => <ProductItem 
                id = {data.pk}
                key={data.pk}
                image={data.display_image}
                productName={data.productName}
                price={data.price}
                quantity={data.quantity}/>)
        }
    </ul>

}

export default ProductList