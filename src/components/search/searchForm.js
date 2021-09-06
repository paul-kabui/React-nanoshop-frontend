import './search.css'

function Search(){
    return(
        <div className="container-fluid search">
            <div className="row">
                <div className="col-md-9"></div>
                <div className="col-md-3">
                    <input type="search" className="form-control" placeholder="Search"/>
                </div>
            </div>
        </div>
    )
}

export default Search