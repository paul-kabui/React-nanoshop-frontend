import './contact.css'
import {useRef, useState, useEffect} from 'react'
import phone from './images/contact.svg'
import location from '../../mainImages/google3.jpeg'
import email from '../../mainImages/email.svg'


function ContactForm(){

    const emailRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()

    const [respInfo, setRespInfo] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)
    const [csrfToken, setCsrfToken] = useState('')

    useEffect(() => {
        fetch("http://127.0.0.1:8000/csrf",{
            credentials: 'include',
        })
        .then((resp) =>{
            let token = resp.headers.get("X-CSRFToken")
            setCsrfToken(token)
        }).catch((err) => {
            setErrorMsg(true)
        })
    }// eslint-disable-next-line
	,[])

    function emailHandler(e){
        e.preventDefault()
        const emailField = emailRef.current.value
        const subjectField = subjectRef.current.value
        const messageField = messageRef.current.value


        fetch(
            'http://127.0.0.1:8000/api/email',
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
                    'email' : emailField,
                    'subject' : subjectField,
                    'message' : messageField
                }),
            }
            
        )
        .then(rensponse =>{
            return rensponse.json()
        }).then((data) => {
            setRespInfo(data)
            setLoaded(true)
            
        })
        .catch((err) => {
            setErrorMsg(true)
        })


    }
    return(
        <div className="container-md border cont-form">
            <div className="row">
                <div className='col-md-6'>
                    <form className="p-2 p-md-3" onSubmit={emailHandler}>
                        {
                            loaded? 
                                <div className="col-md-9 alert alert-info alert-dismissible fade show" role="alert">
                                    <h4>{respInfo.info}</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div> 
                            : ''
                        }
                        {
                            errorMsg? 
                            <div className="col-md-7 alert alert-danger alert-dismissible fade show" role="alert">
                                <p>Unable to connect!! please check your internet connection or Reload</p>
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div> 
                            :
                            ''
                        }
                        <div className="col-md-9">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control form-ctrl" placeholder="Enter your Email" required ref={emailRef}/>
                        </div>
                        <div className="col-md-9">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" className="form-control form-ctrl" placeholder="Subject" required ref={subjectRef}/>
                        </div>
                        <div className="col-md-10">
                            <label htmlFor="message">Message</label>
                            <textarea required className="form-control form-ctrl" rows="5" ref={messageRef}></textarea>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-md-6 mt-md-2 text-start">
                    <span className="fw-bold display-6 text-muted">
                        Our Location
                    </span><br/>
                    <span>not actual location(remember to update)</span>
                    <div className='row'>
                        <img src={location} className='img-fluid img-location border-dark' alt='thika'/>
                    </div>
                    <div className='row'>

                    </div>
                </div>
            </div>
            <hr/>
            <div className='row mb-3'>
                <div className='col-md-4'>
                    <span><img src={phone} alt="not found" height="35px"/>0790879541</span>
                </div>
                <div className='col-md-4'>
                    <span><img src={phone} alt="not found" height="35px"/>0731535249</span>
                </div>
                <div className='col-md-4'>
                    <span><img src={email} alt="not found" height="35px"/>paulphauz95@gmail.com</span>
                </div>
            </div>
           
        </div>
    )
}

export default ContactForm