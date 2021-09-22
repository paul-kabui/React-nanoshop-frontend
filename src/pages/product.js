import Search from "../components/productpage/searchForm"
import Footer from "../components/productpage/footer"
import ProductList from "../components/productpage/productList"

import {useState, useEffect} from 'react'

function Product(){
    const [isLoading, setIsLoading] = useState(true)
    const [fetchedData, setFetchedData ] = useState([])

    useEffect(() => {
        fetch(
            'http://127.0.0.1:8000/products',
            
        ).then(rensponse =>{
            return rensponse.json()
        }).then(data => {
            setIsLoading(false)
            var rcvdJson = JSON.parse(data.products)
            let productArray = []
            
            rcvdJson.forEach( dataArrays => { 
                var dataFields = dataArrays.fields
                var pk = dataArrays.pk
                dataFields.pk = pk
                productArray.push(dataFields)
                setFetchedData(productArray)
            });
        })
    },[])
    
    if(isLoading){
        return(
            <div className="text-center" style={{"marginTop":"15rem"}}>
                <div className="spinner-grow display-5 text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h4>Loading ....</h4>
            </div>
        )
    }

    return(
        <div>
            <Search/>
            <hr/>
            <ProductList productData={fetchedData}/>
            <Footer/>
        </div>
    )
}

export default Product