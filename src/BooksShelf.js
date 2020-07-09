import React from 'react'
import Book from './Book'

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

export default BooksShelf
