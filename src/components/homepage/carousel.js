import './carousel.css'
import first from './images/first.jpg'
import chip2 from './images/chip2.jpg'
import motherboard from './images/motherboard.jpg'
import {Link} from 'react-router-dom'

function Carousel(){
    return(
		<div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-indicators">
		  		<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
		  		<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
		  		<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
			<div className="carousel-inner">
		  		<div className="carousel-item active">
				  	<div className="overlay-image" style={{ backgroundImage: `url(${motherboard})` }}></div>
					<svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" 
						preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill=""/>
					</svg>
					<div className="container">
			  			<div className="carousel-caption text-start">
							<h1 className="heading display-6 fw-bold">Welcome to Nano Electronics.</h1>
							<p>
								Find and shop for all Electronics component including: Sensors, Capacitors, Resistor,<br/>
								Lcd`s, MotherBoard, Ic`s, Microcontrollers etc.
							</p>
			 			</div>
					</div>
		  		</div>
		  		<div className="carousel-item">
				  	<div className="overlay-image" style={{ backgroundImage: `url(${first})` }}></div>
					<svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" 
						preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill=""/>
					</svg>
					<div className="container">
			  			<div className="carousel-caption">
							<h1 className="heading fw-bold">We also Sell Electronics device.</h1>
							<p>
								We sell devices such as Digital tv`s, osilloscopes, signal generators, multimeter,<br/>
								radios, microwaves etc</p>
								<Link to="/products"><button className="btn btn-primary">Products</button></Link>
			  			</div>
					</div>
		  		</div>
		  		<div className="carousel-item">
				  	<div className="overlay-image" style={{ backgroundImage: `url(${chip2})` }}></div>
					<svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" 
						preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill=""/>
					</svg>
					<div className="container">
				  		<div className="carousel-caption text-end">
							<h1 className="heading fw-bold">About Us.</h1>
							<p>
								We are a company that sell, maintain and also  repair Electronic devices.<br/>
								We offer our product at favarouble prices<br/>
								Contact us
							</p>
							<Link to="/contact us"><button className="btn btn-primary">Contacts Us</button></Link>
				  		</div>
					</div>
		  		</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
			  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			  <span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
			  <span className="carousel-control-next-icon" aria-hidden="true"></span>
			  <span className="visually-hidden">Next</span>
			</button>
	  	</div>
    )
}

export default Carousel