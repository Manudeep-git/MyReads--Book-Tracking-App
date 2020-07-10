import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import HomePage from './HomePage'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
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
            	books: updatedBook.shelf!=='none'?([...currState.books.filter(book => book.id !== updatedBook.id),updatedBook])
              			: ([...currState.books.filter(book => book.id !== updatedBook.id)])
            }))
      })
  }


  render() {
    //console.log(this.state.books)
	//console.log(BooksAPI.headers)
    return (
      <div className="app">
        <Route
      		path='/search'
      		render={() => (
       		<SearchPage books={this.state.books} changeShelf={this.handleChangeShelf} />
	      )}
		    />
    		<Route exact path='/' render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
              	<HomePage books={this.state.books} changeShelf={this.handleChangeShelf} />
    			      <div className="open-search">
                  <Link to='/search'>Add a book</Link>
                </div>
    		      </div>
              )}
    		/>
      </div>
    )
  }
}

export default BooksApp
