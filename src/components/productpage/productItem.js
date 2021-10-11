import { useContext, useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'
import LocalCartContext from '../../store/cart-ctx'


function ProductItem(props){
    const cartCtx = useContext(LocalCartContext)
    const isCartItem = cartCtx.isCartItem(props.productId)
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {setIsOpen(true)}
    const closeModal = () => {setIsOpen(false)}

    function cartHandler(){
        if(isCartItem){
            cartCtx.removeFromCart(props.productId)
        }else{
            cartCtx.addToCart({
                id : props.productId,
                name : props.productName,
                intialPrice : props.price,
                userQuanitity : 1,
                calculatedPrice : 0,
                totalItemsAvailable : props.quantity
            })
        }
    }
    
    return(
        <div className="col-md-3">
            <Modal show={isOpen} className='detail-modal'>
                <ModalHeader>
                <h3 className='fw-bold priceSpan'>{props.productName}</h3>
                    <ModalTitle>
                        <button className='btn btn-close me-auto' onClick={closeModal}></button>   
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <h4 className='text-decoration-underline'>Description</h4>
                    <p className='text-start'>{props.description}</p>
                </ModalBody>
                <ModalFooter>
                    <div className="btn-group">
                        <button className='btn btn-sm btn-outline-dark' onClick={closeModal}>Back</button>
                        <div>
                            {
                            isCartItem ? <button className="btn btn-sm btn-success"onClick={cartHandler}>
                                Added to cart
                            </button> : <button className="btn btn-sm btn-outline-primary"onClick={cartHandler}>
                                Add to cart
                            </button>
                            } 
                        </div>
                    </div>
                </ModalFooter>
            </Modal>
            <div className="card shadow">
                <div>
                    {
                        (props.found)? 
                            <div className='bg-success'>
                                <span>interested</span>
                            </div>
                        :
                            ''
                    }
                    <img src={'http://127.0.0.1:8000/productImages/'+ props.image} 
                    className="img-thumbnail border-0" alt={props.productName}/>
                </div>
                <div className="card-body">
                    <hr/>
                    <div>
                        <h4 className="text-info text-capitalize">{props.productName}</h4>
                        <p>Kshs: <span className="fw-bold priceSpan">{props.price}</span></p>        
                    </div>
                    <div className="btn-group">
                        <button className='btn btn-sm btn-outline-primary' onClick={openModal}>Details</button>
                        {
                        isCartItem ? <button className="btn btn-sm btn-success"onClick={cartHandler}>
                            Added to cart
                        </button> : <button className="btn btn-sm btn-outline-primary"onClick={cartHandler}>
                            Add to cart
                        </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem