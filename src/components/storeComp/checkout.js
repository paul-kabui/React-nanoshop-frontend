import { useRef, useState, useContext} from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import LocalCartContext from '../../store/cart-ctx'
import {Modal} from 'react-bootstrap'
import caution from '../../mainImages/caution.svg'
import mpesa from '../../mainImages/mpesa.png'

function CheckOutHandler(props){
    const cartCtx = useContext(LocalCartContext)
    const detailedList = cartCtx.cartItems
    const telRef = useRef()
    let [paymentMsg, setPaymentMsg] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(true)
    const [isValid, setISValid] = useState(false)
    const history = useHistory()

    const closeModal = () => {
        setIsOpen(false)
        history.replace('/products')
    }

    function SubmitHandler(e){
        e.preventDefault()
        const enteredTelNumber = telRef.current.value
        if(enteredTelNumber.length >= 9){
            fetch(
                'http://127.0.0.1:8000/Cart',
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
            })
            setIsLoading(true)
        }else{
            setISValid(true)
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

    if(paymentMsg.msg === 'fail'){
        return(
            <div>
                <Modal style={{'marginTop': '4rem'}} show={isOpen}>
                    <Modal.Header>
                        <Modal.Title>
                            <div className='d-flex'>
                                <img src={caution} height='50px'alt='Alert'/>
                                <h3 className='px-2 text-danger'>Payment Not Successful</h3>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5 className='fw-bold text-decoration-underline'>Check if</h5>
                        <ul className='list-unstyled'>
                            <li>- The number must be safaricom number</li>
                            <li>- Check if the length of number is valid</li>
                            <li>-  check your connection</li>
                        </ul>
                        <p><strong>please check if there is item in the cart</strong></p>
                        <Link to='/contact us'>
                            <span className='text-decoration-none'><i>contact</i></span>
                        </Link>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-sm btn-outline-dark' onClick={closeModal}>Close</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

    return(
        <div style={{'marginTop': '6rem'}}>
            <div className='row'>
                <div className='col-md-6'></div>
                <div className='col-md-3'>
                    {
                        isValid ?
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <p>invalid number length</p>
                        <p>number should start with +254</p>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div> : ''
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
                                   <span className='p-2'>+254</span>
                                   <input type='text' className='px-3 form-control-plaintext' required placeholder='Phone number' ref={telRef}
                                    />
                                </div>
                            </div>
                            <div className='d-flex mt-3'>
                                <button type='submit' className='btn btn-sm btn-outline-success'>Make payments</button>
                                <button className='ms-auto btn btn-sm btn-outline-dark' type="button">back to cart</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOutHandler