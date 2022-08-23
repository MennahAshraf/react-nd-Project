import { useState} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import CreateBook from './CreateBook'
import PropTypes from 'prop-types'

const SearchPage = ({updateBookStatues,books})=>{

   const [query,setQuery]=useState('')
    const  handleQuery=(query)=>{
      setQuery(query)
    }

    let thumb

    const [searchedBooks,setSearchedBooks]=useState([])

    const search = async(query)=>{
       let res = await BooksAPI.search(query)
       setSearchedBooks(res)

    }


        const handleOnChange=(value)=>{
          handleQuery(value)
          
          search(value)}

          console.log(query)
    

    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>
            Close
            </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={event =>handleOnChange(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {(searchedBooks !== undefined && searchedBooks.length>0)  && searchedBooks.map((book) =>
                {   
                   if('imageLinks' in book){
                    thumb=book.imageLinks.thumbnail
                   
                   }else{

                    thumb =''

                   }
                  
              return    (
                  
                <CreateBook book={book} updateBookStatues={updateBookStatues} Flag={'searchPage'} thumb={thumb} books={books}/>
                )})}
          </ol>
        </div>
      </div>
    )

}

SearchPage.propTypes={
  query:PropTypes.string,
  searchedBooks:PropTypes.array,
  search:PropTypes.func,
  handleOnChange:PropTypes.func
}
export default SearchPage