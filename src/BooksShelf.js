import React from 'react'
import Book from './Book'

function BooksShelf(props){// stateless functional component
    const {shelfBooks} = props
    return (
      <ol className='books-grid'>
      {shelfBooks.map(book =>
    		<Book
              book={book}
        	  books={shelfBooks}
        	  key={book.id}
        />
    	)
      }
  </ol>
  )
}

export default BooksShelf