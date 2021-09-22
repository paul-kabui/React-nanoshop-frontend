import {Link} from 'react-router-dom'
function AboutCont(){
    return(
        <div className="container-md">
            <div className="m-4">
                <h2 className="text-muted">Our services</h2>
                <div className="row border p-2 p-md-5 bg-light shadow">
                      <h3 className="display-6">We sell Electronic component and digital gadgets</h3>
                      <p>
                            we sell a wide range of electronics which includes: Sensors, Microcontroller,electronics
                            (resistors, jumper wires, transistors, oscillators, inductors, displays lcd, leds etc)<br/>
                            Multimiters, tvs, laptops, desktops, motherboard, ic's etc<br/>
                      </p>
                        <Link to="/products">
                            <button className="btn btn-primary">Products</button>
                        </Link>
                      
                </div>
                <div className="row border p-2 p-md-5 mt-2 bg-light shadow">
                      <h3 className="display-6">Setting up,Maintaining and repairing electronics gadgets</h3>
                      <p>
                            we repair damaged/faulty electronics at favorable prices<br/>
                            Our team of Electronic Engineers sets up, maintains and repair your electronics and<br/>
                            We can offer assistance when setting up our Products
                      </p>
                      <Link to="/contact us">
                            <button className="btn btn-primary">Contact us</button>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutCont