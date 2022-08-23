import SelectOptions from "./SelectOptions"

const CreateBook = ({book,updateBookStatues,searchFlag,books,thumb})=>{
    return (
        <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            
                            backgroundImage:`url(${thumb})`,
                          }}
                        ></div>
                        
                        <SelectOptions statues={book.shelf} book={book} updateBookStatues={updateBookStatues} searchFlag={searchFlag} books={books}/>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors}</div>
                    </div>
                  </li>
    )


}

export default CreateBook