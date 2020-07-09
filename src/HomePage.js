import React from 'react'
import BooksShelf from './BooksShelf'

function HomePage(props){//stateless component
  const {books,changeShelf}=props
  //title: "The Linux Command Line", shelf: "currentlyReading",<h2 className="bookshelf-title">Currently Reading</h2>
  const shelfTypes = [
    {type: 'currentlyReading',title: 'Currently Reading'},
    {type: 'wantToRead',title: 'Want to Read'},
    {type: 'read', title: 'Read'}
  ];

  return (
    <div className="list-books-content">
    	{shelfTypes.map((shelf,index)=> {
  			const shelfBooks = books.filter(book => book.shelf===shelf.type)
            return (
            	<div className='bookshelf' key={index}>
              	   <h2 className='bookshelf-title'>{shelf.title}</h2>
                  <div className='bookshelf-books'>
                    <BooksShelf shelfBooks={shelfBooks} changeShelf={changeShelf} />
                  </div>
  				</div>
            )
      })}
    </div>
  )
}

export default HomePage
