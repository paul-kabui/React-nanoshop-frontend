import './contact.css'
import {useRef, useState} from 'react'

function ContactForm(){

    const emailRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()

    const [resp, setResp] = useState([])
    const [loaded, setLoaded] = useState(false)

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

    function emailHandler(e){
        e.preventDefault()
        const emailField = emailRef.current.value
        const subjectField = subjectRef.current.value
        const messageField = messageRef.current.value

        fetch(
            'http://127.0.0.1:8000/Emails',
            {
                method : 'POST',
                // credentials: 'same-origin',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "X-CSRFToken" : csrftoken,
                },
                body:JSON.stringify({
                    csrfmiddlewaretoken: csrftoken,
                    'email' : emailField,
                    'subject' : subjectField,
                    'message' : messageField
                }),
            }
            
        )
        .then(rensponse =>{
            return rensponse.json()
        }).then((data) => {
            setResp(data)
            setLoaded(true)
            
        })


    }
    console.log(resp)

    return(
        <div className="container-md shadow border cont-form">
            <div className="row d-block">
                <form className="p-5" onSubmit={emailHandler}>
                    {
                        loaded? <h3 className='text-success'>Email sent</h3>: ''
                    }
                    <div className="col-md-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" placeholder="Enter your Email" required ref={emailRef}/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" className="form-control" placeholder="Subject" required ref={subjectRef}/>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="message">Message</label>
                        <textarea required className="form-control" rows="5" ref={messageRef}></textarea>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
           
        </div>
    )
}

export default ContactForm