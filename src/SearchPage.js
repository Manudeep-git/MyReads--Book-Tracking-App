import React from 'react'
//import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'

class SearchPage extends React.Component{
	state ={
    	query: '',
        newBooks : []
    }

	updateQuery = (query) => {
    	this.setState({
        	query: query
        })
      	this.searchResults(query)
    }

	clearQuery = () => {
    	this.updateQuery('')
    }

	searchResults = (query) => {
        BooksAPI.search(query,20)
          .then(books => {
          this.setState({
            newBooks : books,
          })
        })
    }

	render(){
      	const{query, newBooks}=this.state
      	const{books,changeShelf}=this.props
		const showBooks = query === ''? books:newBooks
	  return (
        <div className="search-books">
          <div className="search-books-bar">
             <Link to='/' className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text"
					   value={query}
					   placeholder="Search by title or author"
					   onChange={event => this.updateQuery(event.target.value)}
				/>
              </div>
            </div>

            <div className="search-books-results">
			 {query === ''?
              (<div className='display-count'>{"Showing Books in Shelf"}</div>)
					:
					(
                  	  <div className="display-count">
                  			<span>Search Returned {newBooks.length} books.</span>
							<button onClick={this.clearQuery}>New Search</button>
                  	  </div>
                  	)
			 }

              <ol className="books-grid">
				 {/*To keep interface consistent displaying shelf books if no search is made*/}
				{ showBooks.map(book => (
                  		<Book
                    	  book={book}
                          books={books}
                          key={book.id}
						  changeShelf={changeShelf}
						/>
                   ))
                }
			 </ol>
          </div>
        </div>
        );
    }
}

export default SearchPage
