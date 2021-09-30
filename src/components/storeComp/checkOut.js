import { useRef, useState } from 'react'
import mpesa from '../../mainImages/mpesa.png'
import ThanksHandler from './thanks'


function CheckOutHandler(props){

    const telRef = useRef()
    const [isValid, setisValid] = useState(false)
    const [PaymentRensp, setPaymentResp] = useState([])
    const [isLoading , setIsLoading] = useState(true)

    function GetToken(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = GetToken('csrftoken');

    function SubmitHandler(e){
        e.preventDefault()
        const enteredTelNumber = telRef.current.value
        if(enteredTelNumber.length >= 10 && enteredTelNumber.length <= 13){
            setisValid(true)
            fetch(
                'http://127.0.0.1:8000/Cart',
                {
                    method : 'POST',
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        // "X-CSRFToken" : csrftoken,
                    },
                    body:JSON.stringify({
                        csrfmiddlewaretoken: csrftoken,
                        'telNumber' : enteredTelNumber,
                        'totals' : props.total,
                        'ids' : props.ids
                    }),
                }
                
            )
            .then(rensponse =>{
                return rensponse.json()
            }).then((data) => {
                setPaymentResp(data)
                setIsLoading(false)
                
            })
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
        }
    }


    console.log(PaymentRensp)
    if(PaymentRensp.rensp === 'payment successful'){
        return <ThanksHandler/>
    }
    
    return(
        <div className=' col-md-5 ms-auto me-auto' style={{'marginTop': '6rem'}}>
            <div className='m-3 shadow border  p-2 p-md-3'>
                <img src={mpesa} height='45px' alt='Mpesa'/>
                 <div>
                    <form  onSubmit={SubmitHandler}>
                        <div className='col-md-7'>
                             <label className='form-label' htmlFor='tel-number'>Mobile number</label>
                             <input type='number' className="form-control" required 
                                placeholder='Enter phone number' ref={telRef}/>
                        </div>
                        {isValid? <p className='text-success'>Data sent successfully</p>: ''}
                        <div className='d-flex mt-3'>
                            <button type='submit' className='btn btn-sm btn-outline-success'>Make payments</button>
                            <button className='ms-auto btn btn-sm btn-outline-dark' type="button">back to cart</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CheckOutHandler