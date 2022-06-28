import React from "react";
import { Component } from "react";
import { StepTitle } from "semantic-ui-react";




const Modal = ({show, item, onClose}) => {
   // console.log(show);
   // console.log(item);
  if(!show) {
    return null;
    }
 else {
    return (
        <>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close" onClick={onClose}>Close</button>
                <div className="inner-box">
                  <img src={item.volumeInfo.imageLinks.smallThumbnail} alt=""/>  
              <div className="info">
                <h1>{item.volumeInfo.title}</h1>
                <h3>{item.volumeInfo.categories}</h3>
                <h4>{item.volumeInfo.authors} <span>{item.volumeInfo.publishedDate}</span></h4><br/>
                <button onClick={onClose}>Close</button>
              </div>
                </div>
                <h4 className="description">{item.volumeInfo.description}</h4>
            </div>
            </div>    

        </>
    )
 }
}



export default Modal;