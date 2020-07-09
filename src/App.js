import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import HomePage from './HomePage'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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
  

  render() {
    console.log(this.state.books)
	console.log(BooksAPI.headers)
    return (
      <div className="app">
        {this.state.showSearchPage ? 
       (
       		<SearchPage books={this.state.books}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
          	<HomePage books={this.state.books} />
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
