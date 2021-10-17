import LocalCartContext from '../../store/cart-ctx'
import {Link} from 'react-router-dom'
import { Navbar, Nav,Container } from 'react-bootstrap';
import {useContext, useState} from 'react'
import cartIcon from '../../mainImages/cart.jpeg'
import './navBar.css'

function NavBar(){
    const cartCtx = useContext(LocalCartContext)
    const [expanded, setExpanded] = useState(false)


    return(
        <div>
            <Navbar expanded={expanded} expand="md" className='Navbar' variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="text-decoration-none text-light">
                            <div className="">
                                <p className="nav-p fw-bold">
		                        	<span className='text-orange fw-bold h2'>N</span>
		                        	<span>a</span>
		                        	<span>n</span>
		                        	<span>o</span>
		                        </p>
                            </div>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : 'expanded')}/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/" className="nav-link active" onClick={() => setExpanded(false)}>
                                    Home
                                </Link>
                                <Link to="/contact us" className="nav-link"  onClick={() => setExpanded(false)}>
                                    ContactUs
                                </Link>
                            </Nav>
                            <Nav>
                                <Link to="Products" className="nav-link"  onClick={() => setExpanded(false)}>
                                    Products
                                </Link>
                                <Link to="/my order" className="nav-link"  onClick={() => setExpanded(false)}>
                                    MyOrder
                                </Link>
                                <Link to="/Services" className="nav-link"  onClick={() => setExpanded(false)}>
                                    Services
                                </Link>
                                <Link to="/cart" className="nav-link px-2"  onClick={() => setExpanded(false)}>
                                    <img src={cartIcon} className='cart-icon' alt='Cart'/>
                                    <span className='badge bg-light text-dark '>{cartCtx.cartNumber}</span>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar