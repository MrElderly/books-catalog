import React from "react";



const Search = (props) => {
    return (
       <div>
        <div className="input-group mb-3 inp">
            <form className="input-group mb-3 inp " onChange={props.search} onSubmit={props.searchBook}   action="">
        <input
        onChange={props.search}
            type="text"
            className="form-control"
            placeholder="Enter name book"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
         
        />
        <button onClick={props.searchBook}  onChange={props.search} className="btn btn-outline-secondary" type="button" id="button-addon2" >Search</button>
       </form>
       </div> 
       <div className="sort">
        <p></p>
        <p>Catigories</p>
        <select id="test" className="form-select categories" aria-label="Default select example" onChange={props.categories}  onSubmit={props.categories} >
  <option selected value="All">All</option>
  <option value="Art" onClick={props.searchBook}>Art</option>
  <option value="Biography" onClick={props.searchBook}>Biography</option>
  <option value="Computers" onClick={props.searchBook}>Computers</option>
  <option value="Histor" onClick={props.searchBook}>History</option>
  <option value="Medical" onClick={props.searchBook}>Medical</option>
  <option value="Poetry" onClick={props.searchBook}>Poetry</option>
</select>
<p>Sorting by</p>
<select className="form-select corting" aria-label="Default select example" onChange={props.sorting}  onSubmit={props.sorting}>
  <option selected value="Relevance" onClick={props.searchBook}>Relevance</option>
  <option value="Newest" onClick={props.searchBook}>Newest</option>
</select>

        </div>
        
        </div>



        )}

        export default Search;