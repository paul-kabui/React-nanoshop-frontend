import { useRef, useState, useContext, useEffect} from 'react'
import LocalCartContext from '../../store/cart-ctx'
import {Modal} from 'react-bootstrap'
import mpesa from '../../mainImages/mpesa.png'

function CheckOutHandler(props){
    const cartCtx = useContext(LocalCartContext)
    const detailedList = cartCtx.cartItems
    const telRef = useRef()
    const [paymentMsg, setPaymentMsg] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const [isInValid, setISInValid] = useState(false)
    const [errorMsg, setErrorMSg] = useState(false)
    const [csrfToken, setCsrfToken] = useState('')
    
    useEffect(() => {
        fetch("http://127.0.0.1:8000/csrf",{
            credentials: 'include',
        })
        .then((resp) =>{
            let token = resp.headers.get("X-CSRFToken")
            setCsrfToken(token)
        }).catch((err) => {
            setErrorMSg(true)
        })
    }// eslint-disable-next-line
	,[])

    function SubmitHandler(e){
        e.preventDefault()
        const enteredTelNumber = telRef.current.value
        if(enteredTelNumber.length >= 9 && enteredTelNumber.length <= 10){
            fetch(
                'http://127.0.0.1:8000/api/Cart',
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
                        'telNumber' : enteredTelNumber,
                        'totalsPrice' : props.totalPrice,
                        'detailedItemList' : detailedList 
                    }),
                }    
            ).then(rensponse =>{
                return rensponse.json()
            }).then((data) => {
                setPaymentMsg(data)
                setIsLoading(false)
            }).catch((error) => {
                setErrorMSg(true)
            })
            setIsLoading(true)
        }else{
            setISInValid(true)
        }
    }

    if(isLoading){
        return(
            <div  style={{"marginTop":"20rem"}}>
                <Modal show={true} style={{"marginTop":"10rem"}}>
                    <Modal.Body>
                        <div className='text-center'>
                            <div className="spinner-grow display-5 text-success" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <h4 className='text-success'>Processing payments ....</h4>
                            <p>check your phone to enter your Mpesa pin</p>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
    if(paymentMsg.msg === 'success'){
        return(
            <div className=' col-md-5 ms-auto me-auto' style={{'marginTop': '6rem'}}>
                <div className='m-3 shadow border  p-2 p-md-3'>
                    <h3 className='fw-bold'>Nano</h3>
                    <h4 style={{'color':'orange'}}>Thanks for shopping with us</h4>
                    <i className='text-muted'>welcome again</i><br/>
                    <span className='text-muted text-center'>@2022</span>
                </div>
            </div>
        )
    }

    

    return(
        <div style={{'marginTop': '6rem'}}>
            <div className='row'>
                <div className='col-md-6'></div>
                <div className='col-md-3'>
                    {
                        isInValid ?
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <p>invalid number!</p>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div> 
                        :
                        ''
                    }
                    {
                        errorMsg? 
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <p>Unable to connect!! please check your internet connection or Reload</p>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div> 
                        :
                        ''
                    }
                    {
                        (paymentMsg.length !== 0  &&  paymentMsg.msg !== 'success') ?
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <p>{paymentMsg.msg}</p>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div> 
                        :
                        ''  
                    }
                </div>
            </div>
            <div className=' col-md-5 ms-auto me-auto'>
                <div className='shadow border p-1 p-md-3'>
                    <img src={mpesa} height='45px' alt='Mpesa'/>
                     <div>
                        <form className='m-2' onSubmit={SubmitHandler}>
                            <div className='col-md-7'>
                                <label className='form-label' htmlFor='tel-number'>Mobile number</label>
                                <div className='d-flex border'>
                                   <span className='p-2 border-end'>+254</span>
                                   <input type='text' className='px-3 form-control-plaintext' required placeholder='Phone number' ref={telRef}
                                    />
                                </div>
                            </div>
                            <div className='d-flex mt-3'>
                                <button type='submit' className='btn btn-sm btn-outline-success'>Make payments</button>
                                <button className='ms-auto btn btn-sm btn-outline-dark' type="button" onClick={props.onCancel}>
                                    back to cart
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOutHandler