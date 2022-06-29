import React from "react";
import { Component } from "react";
import Search from "./Search";
import BookList from "./BookList"; 

let totalItems = 0;
let categories = "All";
let sorting = "Relevance"
let searchBook = "book";
let load = 0;


class Books extends Component{

  constructor(props) {
    //startIndex
    super(props);
    this.state = {
        books: [],
        search: "",
        sort:"",
        categories:""
    }
}

search = (e) => {
this.setState({search: e.target.value})
}

sorting = (e) => {
  this.setState({sorting: e.target.value})
  }

categories = (e) => {
    this.setState({categories: e.target.value})
    }

searchBook = (e) => {
 
e.preventDefault();
  
searchBook = this.state.search;
categories = this.state.categories;
sorting = this.state.sorting;

console.log(searchBook);
  console.log(categories);
  console.log(sorting);
  
 if (categories === undefined) {
    categories = "All";
  }

sorting = this.state.sorting;
  if (sorting === undefined) {
    sorting = "Relevance";
  }
  
if (categories === "All") {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}&maxResults=30&orderBy=${sorting}`)
  .then(response => response.json())
  .then((response) => {
    console.log(response);
    const cleanData = this.cleanData(response);
    this.setState({books: cleanData})
    this.setState({total: response.totalItems})
  
  })
}
else {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}+subject:${categories}&maxResults=30&orderBy=${sorting}`)
  .then(response => response.json())
  .then((response) => {
    console.log(response);
    const cleanData = this.cleanData(response);
    this.setState({books: cleanData})
    this.setState({total: response.totalItems})
  
  })
}
  totalItems = this.state.total;
}


cleanData = (response) => {
  const cleanedData = response.items.map((book) => {
    if(book.volumeInfo.hasOwnProperty("publishedDate") === false) {
      book.volumeInfo.publishedDate = "No date"
    }
     else if(book.volumeInfo.hasOwnProperty("authors") === false) {
      book.volumeInfo.authors = "No author"
    }
    else if(book.volumeInfo.hasOwnProperty("categories") === false) {
      book.volumeInfo.categories = "No categories"
    }
    else if(book.volumeInfo.hasOwnProperty("imageLinks") === false) {
      book.volumeInfo.imageLinks = {thumbnail: "no-image.png"}
    }
    else if(book.volumeInfo.hasOwnProperty("title") === false) {
      book.volumeInfo.title = "No title"
    }
    
    return book;
  } )
  return cleanedData;
}

loadMore = () => {
  load = load + 30;
  console.log(load);
  console.log(searchBook)
  console.log(categories);
  console.log(sorting);
  if(categories === "All") {

  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}&maxResults=30&orderBy=${sorting}&startIndex=${load}`)
  .then(response => response.json())
  .then((response) => {
    console.log(response);
    const cleanData = this.cleanData(response);
    this.setState({books: this.state.books.concat(cleanData)})
    this.setState({total: response.totalItems})
  })
}
else {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}+subject:${categories}&maxResults=30&orderBy=${sorting}&startIndex=${load}`)
  .then(response => response.json())
  .then((response) => {
    console.log(response);
    const cleanData = this.cleanData(response);
    this.setState({books: this.state.books.concat(cleanData)})
    this.setState({total: response.totalItems})
  })
}
}

render(){

  return (

      <div className="hed" >
          <div className="input-group mb-3 center">
        <Search searchBook={this.searchBook} search={this.search} sorting={this.sorting} categories={this.categories}></Search>
        </div>
       <p className="TotalItem">
      Total books:  {this.state.total}
       </p>
    <div >
            <BookList books={this.state.books} />
            </div>
            <button type="button" class="btn btn-dark" onClick={this.loadMore}>Load more</button>
            </div>
      
  )
}
}

       export default Books;



       

