import React from 'react'

class Book extends React.Component{
	render(){
        const {book,books} = this.props
        //For seacrchPage books, default shelf would be none if book is not in any shelf
        let bookShelf = 'none'
        // For each incoming book, if book id matches any of the booksid, shelf is set to corresponding shelf
        for (let item of books) {
      		if (item.id === book.id) {
        		bookShelf = item.shelf;
        		break;
      		}
    	}
             
    	return (
        	<li>
			  <div className='book'>
                <div className="book-top">
                  <div className="book-cover"
                    style={{width: 128,height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}>	
                  </div>
                  <div className="book-shelf-changer">
                      <select defaultValue={bookShelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                  </div>
                </div>
                <div className='book-title'> {book.title}</div>
                <div className='book-authors'>{book.authors}</div>
	          </div>  
			</li>
        )
    }
}

export default Book