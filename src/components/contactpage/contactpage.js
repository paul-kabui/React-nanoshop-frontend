import './contact.css'
import ContactForm from './form'

function ContactContent(){
    return(
        <div className="m-3">
            <div className="main-body">
                <h4 className="fw-bold text text-orange">Contact us</h4>
                <ContactForm/>
            </div>
        </div>
    )
}

export default ContactContent