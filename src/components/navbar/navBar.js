import {Link} from 'react-router-dom'
import './navBar.css'

function Nav(){
    return(
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top mb-5">
                <div className="container-fluid">
                    <h4 className="navbar-brand" >Eworkshop</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact us" className="nav-link">Contact us</Link>
                            </li>
                        </ul>
                        <ul className="d-flex navbar-nav">
                            <li className="nav-item">
                                <Link to="/products" className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/my order" className="nav-link">My order</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about Us" className="nav-link">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link" href="#">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav