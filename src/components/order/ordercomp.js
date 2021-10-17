import './order.css'
import {useRef, useState, useEffect} from 'react'
import DisplayOrder from './displayOrder'

function OrderForm(){
    const phoneRef = useRef()
    const codeRef = useRef()
    const [isLoaded, setIsLoaded] = useState(false)
    const [orderData, setOrderData] = useState([])
    const [localErrorMsg, setLocalErrorMsg] = useState(false)
    const [respError, setRespError] = useState('')
    const [csrfToken, setCsrfToken] = useState('')

    useEffect(() => {
        fetch("http://127.0.0.1:8000/csrf",{
            credentials: 'include',
        })
        .then((resp) =>{
            let token = resp.headers.get("X-CSRFToken")
            setCsrfToken(token)
        }).catch((err) => {
            setLocalErrorMsg(true)
        })
    }// eslint-disable-next-line
	,[])

    function SubmitHandler(e){
        e.preventDefault()
        const enteredPhone = phoneRef.current.value
        const enteredCode = codeRef.current.value

        fetch(
            'http://127.0.0.1:8000/api/Order',
            {
                method : 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "X-CSRFToken" : csrfToken,
                },
                body:JSON.stringify({
                    csrfmiddlewaretoken: csrfToken,
                    "phoneNumber":enteredPhone,
                    "mpesaCode":enteredCode
                }),
            }
        )
        .then(rensponse =>{
            return rensponse.json()
        }).then((data) => {
            const respInfo = data.info
            if(typeof respInfo === 'string'){
                setRespError(respInfo)
            }else{
                setOrderData(respInfo)
                setIsLoaded(true)
            }
        }).catch((error) =>{
            setLocalErrorMsg(true)
        })
    }

    const backHandler = () => {setIsLoaded(false)}

    if(isLoaded){
        return <DisplayOrder order={orderData} onCancel={backHandler}/>
    }

    return(
        <div>
            <div  className="order-form col-md-4 p-5 border ms-auto me-auto shadow">
            {
                localErrorMsg? 
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <p>Unable to connect!! please check your internet connection or Reload</p>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> 
                :
                ''
            }
            {
                (respError !== '')?
                <div className="col-md-12 alert alert-danger alert-dismissible fade show" role="alert">
                    <p>{respError}</p>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> 
                :
                ''
            }
            <h4 className="text-center fw-bold track">Track your order</h4>
            <form onSubmit={SubmitHandler}>
                <div className="col-md-11 text-center">
                    <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                    <div className='d-flex border'>
                        <span className='p-2 border-end'>+254</span>
                        <input type="text" name="phoneNumber" className="form-control-plaintext" 
                        required placeholder="  format (7 90 879 ---)" ref={phoneRef}/>
                    </div>
                </div>
                <div className="col-md-11 text-center m-2">
                    <label htmlFor="code" className="form-label">Mpesa Transaction code</label>
                    <input type="text" name="code" className="form-control" placeholder="Mpesa code" ref={codeRef}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
    )
}

export default OrderForm