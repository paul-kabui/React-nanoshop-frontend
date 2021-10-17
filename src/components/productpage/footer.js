import './product.css'
import {Link} from 'react-router-dom'

function Footer(){
    return(
        <div className="text-end mt-2">
            <Link to="/cart"><button className="btn btn-goCart">Go to cart</button></Link><br/>
        </div>
    )
}

export default Footer