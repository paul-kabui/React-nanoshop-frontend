import './contact.css'
import {useRef, useState} from 'react'

function ContactForm(){

    const emailRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()

    const [resp, setResp] = useState([])
    const [loaded, setLoaded] = useState(false)

    function emailHandler(e){
        e.preventDefault()
        const emailField = emailRef.current.value
        const subjectField = subjectRef.current.value
        const messageField = messageRef.current.value


        fetch(
            'http://127.0.0.1:8000/Emails',
            {
                method : 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'API-key',
                },
                body:JSON.stringify({
                    // csrfmiddlewaretoken: csrftoken,
                    'email' : emailField,
                    'subject' : subjectField,
                    'message' : messageField
                }),
            }
            
        )
        .then(rensponse =>{
            console.log(rensponse)
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
                <form className="p-2 p-md-5" onSubmit={emailHandler}>
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