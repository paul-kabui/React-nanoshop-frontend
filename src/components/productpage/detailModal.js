function Modal(props){
    return(
        <div>
            <button type="button" className="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
                Details
            </button>
            <div className="modal fade" id="exampleModalCenteredScrollable" tabIndex="-1" aria-labelledby="exampleModalCenteredScrollableTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenteredScrollableTitle">{props.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                This is just a short description of this product<br/>
                                details such as
                            </p>
                            <p>This content should appear at the bottom after you scroll.</p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-" data-bs-dismiss="modal">back</button>
                          <button type="button" className="btn btn-primary">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal 