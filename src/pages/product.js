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
            const productArray = []

            rcvdJson.forEach( dataArrays => { 
                var dataFields = dataArrays.fields
                var pk = 'M'+(dataArrays.pk)
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

    let TestData = [
        {
          "product_category": "Resistors",
          "quantity": 4,
          "productName": "resistor",
          "price": "100.00",
          "display_image": "resistors_TmrF1VJ.jpeg",
          "pk": 6
        },
        {
          "product_category": "ics",
          "quantity": 5,
          "productName": "cd 4047",
          "price": "250.00",
          "display_image": "cd4047.jpeg",
          "pk": 7
        },
        {
            "product_category": "ics",
            "quantity": 5,
            "productName": "Multimeter",
            "price": "12500.00",
            "display_image": "cd4047.jpeg",
            "pk": 8
        },
        {
            "product_category": "ics",
            "quantity": 5,
            "productName": "Arduino uno",
            "price": "1100.00",
            "display_image": "cd4047.jpeg",
            "pk": 9
        },
        {
            "product_category": "ics",
            "quantity": 5,
            "productName": "Ir sensor",
            "price": "450.00",
            "display_image": "cd4047.jpeg",
            "pk": 10
          }
      ]
    
    if(fetchedData.length !== 0){
        // console.log("test data:", TestData)
        // console.log("fetched original data:", fetchedData)
        return(
            <div className='m-3'>
                <Search/>
                <hr/>
                <ProductList productData={TestData}/>
                {/* <h1>fetched data</h1>
                <ProductList productData={fetchedData}/> */}
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