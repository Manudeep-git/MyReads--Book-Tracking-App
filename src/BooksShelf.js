import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'


function BooksShelf(props){// stateless functional component
    const {shelfBooks,changeShelf} = props
    return (
      <ol className='books-grid'>
      {shelfBooks.map(book =>
    		<Book
            book={book}
        	  books={shelfBooks}
        	  key={book.id}
			      changeShelf={changeShelf}
        />
    	)
      }
  </ol>
  )
}
// since it is a stateless functional component, add required propTypes here
BooksShelf.propTypes = {
  shelfBooks: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default BooksShelf
