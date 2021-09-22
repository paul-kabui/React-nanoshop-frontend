import './contact.css'

function ContactForm(){
    return(
        <div className="container-md shadow border cont-form">
            <div className="row d-block">
                <form className="p-5">
                    <div className="col-md-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" placeholder="Enter your Email" required/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" className="form-control" placeholder="Subject" required/>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="message">Message</label>
                        <textarea required className="form-control" rows="5"></textarea>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
           
        </div>
    )
}

export default ContactForm