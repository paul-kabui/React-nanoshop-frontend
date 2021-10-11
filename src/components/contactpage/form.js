import './contact.css'
import {useRef, useState} from 'react'

function ContactForm(){

    const emailRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()

    const [respInfo, setRespInfo] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)

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
                    'Content-Type': 'application/json',
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
            return rensponse.json()
        }).then((data) => {
            setRespInfo(data)
            setLoaded(true)
            
        }).then((error) => {
            setErrorMsg(true)
            console.log('errror',error)
        })


    }
    return(
        <div className="container-md shadow border cont-form">
            <div className="row">
                <div className='col-md-6 form-cnt'>
                    <form className="p-2 p-md-5" onSubmit={emailHandler}>
                        {
                            loaded? 
                                <div className="col-md-9 alert alert-success alert-dismissible fade show" role="alert">
                                    <h4>{respInfo.info}</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div> 
                            : ''
                        }
                        {
                            errorMsg? 
                            <div className="col-md-7 alert alert-danger alert-dismissible fade show" role="alert">
                                <p>Error! invalid inputs</p>
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div> 
                            :
                            ''
                        }
                        <div className="col-md-9">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" placeholder="Enter your Email" required ref={emailRef}/>
                        </div>
                        <div className="col-md-9">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" className="form-control" placeholder="Subject" required ref={subjectRef}/>
                        </div>
                        <div className="col-md-10">
                            <label htmlFor="message">Message</label>
                            <textarea required className="form-control" rows="5" ref={messageRef}></textarea>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-md-6 mt-md-5 text-start">
                    <span className="fw-bold text-muted display-6">if your want to:</span>
                    <ul className="list-unstyled">
                        <li className='px-4'>* Send a comment</li>
                        <li className='px-4'>* place a bulk order</li>
                        <li className='px-4'>* Use other payment method other than that provided</li>
                    </ul>
                    <span className="display-6 text-muted fw-bold">If your facing issues with:</span>
                        <ul className='list-unstyled list-group'>
                            <li className='px-4'>* Accessing the site</li>
                            <li className='px-4'> * Placing an order</li>
                            <li className='px-4'>*Tracking you order</li>
                            <li className='px-4'>*Trouble with making payment</li>
                        </ul>
                        <h4 className='text-muted mt-3'>
                            send as an email and we will give you feedback immediately
                        </h4>
                </div>
            </div>
           
        </div>
    )
}

export default ContactForm