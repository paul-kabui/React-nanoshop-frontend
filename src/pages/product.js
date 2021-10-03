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
            const rcvdJson = JSON.parse(data.products)
            const productList = []

            rcvdJson.forEach(items => { 
                const dataFields = items.fields
                const pk = items.pk
                const itemsObject ={
                    ...dataFields,
                    pk : pk
                }
                productList.push(itemsObject)
            });
            setFetchedData(productList)
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

    if(fetchedData.length !== 0){
        console.log("fetched original data:", fetchedData)
        return(
            <div className='m-3'>
                <Search/>
                <hr/>
                <ProductList productData={fetchedData}/>
                <Footer/>
            </div>
        )
    }else{
        return(
            <div className="text-center" style={{"marginTop":"15rem"}}>
                <div className="spinner-grow display-5 text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h4>Loading ....</h4>
            </div>
        )
    }

    
}

export default Product