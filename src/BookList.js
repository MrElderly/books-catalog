import React from "react";
import { useState } from "react";
//import BookCard from "./BookCard";
import Modal from "./Modal";

let BookList = (props) => {

    const [show,setShow] = useState(false);
    const [bookItem,setItem] = useState();
   

    const style = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"

    }
  return (
    <>
      <div className="book" style={style} >
          {
              props.books.map((book) => {
                let thumbnail=book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
                if(thumbnail!= undefined){
                  return( 
                    <>
                  
                    
                          <div className="card" style={style} >
                          <img src={thumbnail} className="card-img-top" alt="..."/>
                          <div className="card-body">
                          <h3 className="card-title">{book.volumeInfo.title}</h3>
                            <p className="card-text">{book.volumeInfo.categories}</p>
                            <p className="card-text">{book.volumeInfo.authors}</p>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setShow(true);setItem(book)}}>More</button>
                          </div>
                        </div>
                        
                        <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                      
                       </>  
                  
                  )
                }
              })
          }
      </div>
     
      </>
  )
}

       export default BookList;