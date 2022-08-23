
import {Link} from 'react-router-dom'
import CreateBook from "./CreateBook";


const BooksPage = ({ books ,updateBookStatues}) => {


  let shelfNames = ["Currently Reading", "Want To Read", "Read"];
  const shelfs = ["currentlyReading", "wantToRead", "read"];
  let booksShelfs = [];

  shelfs.map((shelf, index) => {
    booksShelfs[shelfNames[index]] = books.filter(
      (book) => book.shelf === shelf
    );
  });


  let thumb


  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelfNames.map((shelfName) => (
          <div key={shelfName} className="bookshelf">
            <h2  className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">

              
              <ol className="books-grid">
                {booksShelfs[shelfName].map((book)=> {

              if('imageLinks' in book){
              thumb=book.imageLinks.thumbnail
 
               }else{

              thumb =''

                }            
                return  (
                  <CreateBook key={book.id} book={book} updateBookStatues={updateBookStatues} Flag={'booksPage'} thumb={thumb} books={books}/>
                )
                })}
              </ol>
            </div>
          </div>
        ))}
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
};



export default BooksPage;
