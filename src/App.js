import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import HomePage from './HomePage'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

 // gets called as soon as render method is invoked
  componentDidMount() {
     BooksAPI.getAll()
		.then((books)=> {
        	this.setState({
            	books: books,
            })
        })
  }

 // handles shelf change in homepage as well as searchPage
  handleChangeShelf = (updatedBook,newShelf) =>{
  	  BooksAPI.update(updatedBook,newShelf)
      	.then(response => {
            updatedBook.shelf=newShelf
      		this.setState(currState => ({
            	books: updatedBook.shelf!=='none'?
              ([...currState.books.filter(book => book.id !== updatedBook.id),updatedBook])
              :
              ([...currState.books.filter(book => book.id !== updatedBook.id)])
            }))
      })
  }


  render() {
    console.log(this.state.books)
	console.log(BooksAPI.headers)
    return (
      <div className="app">
        {this.state.showSearchPage ?
       (
       		<SearchPage books={this.state.books} changeShelf={this.handleChangeShelf}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
          	<HomePage books={this.state.books} changeShelf={this.handleChangeShelf} />
			<div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
		  </div>
          )}
      </div>
    )
  }
}

export default BooksApp
