import React from 'react'
import BooksShelf from './BooksShelf'
import PropTypes from 'prop-types'

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
    	{/*Filtering books based on the shelf and passing on to book component*/ }
    	{shelfTypes.map((shelf,index)=> {
  			const shelfBooks = books.filter(book => book.shelf===shelf.type)
            return (
            	<div className='bookshelf' key={index}>
              	   <h2 className='bookshelf-title'>{shelf.title}</h2>
                  <div className='bookshelf-books'>
                    <BooksShelf shelfBooks={shelfBooks} changeShelf={changeShelf}/>
                  </div>
  				</div>
            )
      })}
    </div>
  )
}
// since it is a stateless functional component, add required propTypes here
HomePage.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default HomePage
