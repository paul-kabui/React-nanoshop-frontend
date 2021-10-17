import Footer from "../components/productpage/footer"
import ProductList from "../components/productpage/productList"

import {useState, useEffect} from 'react'

function Product(){
    const [isLoading, setIsLoading] = useState(true)
    const [fetchedData, setFetchedData ] = useState([])
    const [productToSearch, setProductToSearch] = useState('')
    const [errorMsg, setErrorMsg] = useState(false)

    useEffect(() => {
        fetch(
            'http://127.0.0.1:8000/api/products',
            
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
        }).catch((error)=>{
            setErrorMsg(true)
        })
    },[])

    function searchHandler(e){
        setProductToSearch(e.target.value)
    }
    if(isLoading){
        return(
            <div className="text-center" style={{"marginTop":"14rem"}}>
                <div className="spinner-grow display-5 text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h4>Loading ....</h4>
            </div>
        )
    }

    if(fetchedData.length !== 0){
        return(
            <div className='m-4'>
                {
                    errorMsg? 
                    <div className="col-md-9 alert alert-danger alert-dismissible fade show" role="alert">
                        <h4>Network error!!</h4>
                        <p>check your network and try again</p>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div> 
                    :
                    ''
                }
                <div className="container-fluid search" style={{'marginTop':'5rem'}}> 
                    <div className="row">
                        <div className="col-md-9"></div>
                        <div className="col-md-3">
                            <input type="search" className="form-control" placeholder="Search" onChange={searchHandler}/>
                        </div>
                    </div>
                </div>
                <hr/>
                <ProductList productData={fetchedData} search={productToSearch}/>
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