import './order.css'
import {useRef, useState} from 'react'

function OrderForm(){
    const phoneRef = useRef()
    const codeRef = useRef()
    const [isLoaded, setIsLoaded] = useState(false)
    const [orderData, setOrderData] = useState([])

    function SubmitHandler(e){
        e.preventDefault()
        const enteredPhone = phoneRef.current.value
        const enteredCode = codeRef.current.value

        fetch(
            'http://127.0.0.1:8000/Order',
            {
                method : 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    // "X-CSRFToken" : csrftoken,
                },
                body:JSON.stringify({
                    // csrfmiddlewaretoken: csrftoken,
                    "phoneNumber":enteredPhone,
                    "mpesaCode":enteredCode
                }),
            }
        )
        .then(rensponse =>{
            return rensponse.json()
        }).then((data) => {
            setOrderData(data)
            setIsLoaded(true)
        }) 
    }

    console.log(orderData.myOrder)

    return(
        <div>
            <div  className="order-form col-md-4 p-5 border ms-auto me-auto shadow">
            <h4 className="text-center fw-bold track">Track your order</h4>
            <form onSubmit={SubmitHandler}>
                <div className="col-md-11 text-center">
                    <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                    <div className='d-flex border'>
                        <span className='p-2'>+254</span>
                        <input type="text" name="phoneNumber" className="form-control-plaintext" 
                        required placeholder="format (7 90 879 ---)" ref={phoneRef}/>
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