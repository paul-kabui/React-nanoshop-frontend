import LocalCartContext from '../../store/cart-ctx'
import {Link} from 'react-router-dom'
import { Navbar, Nav,Container } from 'react-bootstrap';
import {useContext} from 'react'

function NavBar(){
    const cartCtx = useContext(LocalCartContext)
    return(
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand><Link to="/" className="text-decoration-none text-light">Nano</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link eventKey={1}>
                                    <Link to="/" className="nav-link active">Home</Link>
                                </Nav.Link>
                                <Nav.Link eventKey={2}>
                                    <Link to="/contact us" className="nav-link">ContactUs</Link>
                                </Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link eventKey={3}>
                                    <Link to="Products" className="nav-link">Products</Link>
                                </Nav.Link>
                                <Nav.Link eventKey={4}>
                                    <Link to="/my order" className="nav-link">MyOrder</Link>
                                </Nav.Link>
                                <Nav.Link eventKey={6}>
                                    <Link to="/Services" className="nav-link">Services</Link>
                                </Nav.Link>
                                <Nav.Link eventKey={7}>
                                    <Link to="/cart" className="nav-link px-2">
                                        Cart <span className='badge bg-light text-dark '>{cartCtx.cartNumber}</span>
                                    </Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar