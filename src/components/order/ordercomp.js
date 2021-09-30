import './order.css'
import {useRef, useState} from 'react'

// import {useRef, useEffect, useState} from 'react'

function OrderForm(){
    const phoneRef = useRef()
    const codeRef = useRef()
    const [isLoaded, setIsLoaded] = useState(false)
    const [loadedData, setLoadedData] = useState([])


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
        const enteredPhone = phoneRef.current.value
        const enteredCode = codeRef.current.value

        
    
        fetch(
            'http://127.0.0.1:8000/Order',
            {
                method : 'POST',
                // credentials: 'same-origin',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    // "X-CSRFToken" : csrftoken,
                },
                body:JSON.stringify({
                    csrfmiddlewaretoken: csrftoken,
                    "phoneNumber":enteredPhone,
                    "mpesaCode":enteredCode
                }),
            }
            
        )
        .then(rensponse =>{
            return rensponse.json()
        }).then((data) => {
            setLoadedData(data)
            setIsLoaded(true)
        })

        
        
    
    }

    if(isLoaded){
        return(
            <div style={{'marginTop':'5rem'}}>
                <h1>{loadedData.msg}</h1>
            </div>
        )
    }

    return(
        <div  className="order-form col-md-4 p-5 border ms-auto me-auto shadow">
            <h4 className="text-center fw-bold track">Track your order</h4>
            <form onSubmit={SubmitHandler}>
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