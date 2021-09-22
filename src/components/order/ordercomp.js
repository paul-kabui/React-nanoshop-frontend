import './order.css'
import {useRef} from 'react'
// import SendPostData from '../../apiServices/product.api'

function OrderForm(){
    const phoneRef = useRef()
    const codeRef = useRef()

    // function getToken(name) {
    //     let cookieValue = null;
    //     if (document.cookie && document.cookie !== '') {
    //         const cookies = document.cookie.split(';');
    //         for (let i = 0; i < cookies.length; i++) {
    //             const cookie = cookies[i].trim();
    //             if (cookie.substring(0, name.length + 1) === (name + '=')) {
    //                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //                 break;
    //             }
    //         }
    //     }
    //     return cookieValue;
    // }
    // var csrftoken = getToken('csrftoken');

    function submitHandler(e){
        e.preventDefault()
        const enteredPhone = phoneRef.current.value
        const enteredCode = codeRef.current.value
        var orderData = {
            "phoneNumber":enteredPhone,
            "mpesaCode":enteredCode
        };
        
        fetch('http://127.0.0.1:8000/Order',{
            // method:'POST',
            // headers:{
            //     'content-Type':'application/json',
            //     'X-CSRFToken':csrftoken
            // },
            body:JSON.stringify(orderData),
        })
        
    

    }
    return(
        <div  className="order-form col-md-4 p-5 border ms-auto me-auto shadow">
            <h4 className="text-center fw-bold track">Track your order</h4>
            <form onSubmit={submitHandler} method="POST">
                {/* {{csrftoken}} */}
                <div className="col-md-11 text-center">
                    <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                    <input type="number" name="phoneNumber" className="form-control" required placeholder="telephone number" ref={phoneRef}/>
                </div>
                <div className="col-md-11 text-center m-2">
                    <label htmlFor="code" className="form-label">Mpesa Transaction code</label>
                    <input type="text" name="code" className="form-control" placeholder="Mpesa code" ref={codeRef}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default OrderForm