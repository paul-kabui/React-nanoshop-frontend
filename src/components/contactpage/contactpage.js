import './contact.css'
import ContactForm from './form'
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import phone from './images/contact.svg'
import email from './images/email.svg'

function ContactContent(){
    return(
        <div className="main-body">
            <h4 className="fw-bold text">Leave an Email</h4>
            <ContactForm/>
            <div className="text-center mt-2">
                <div className="d-flex justify-content-center py-2">
                    <a href="//https://twitter.com/paulkabui01"><img src={email} alt="not found" height="35px"/></a>
                    <a href="//https://twitter.com/paulkabui01"><img src={twitter} alt="not found" height="35px" className="px-5"/></a>
                    <a href="//facebook.com"><img src={facebook} alt="not found" height="35px"/></a><br/><br/>
                </div>
                <div>
                    <span className="text-light"><img src={phone} alt="not found" height="35px"/>0790879541</span><br/>
                    <span className="text-light"><img src={phone} alt="not found" height="35px"/>0731535249</span>
                </div>
            </div>
        </div>
    )
}

export default ContactContent