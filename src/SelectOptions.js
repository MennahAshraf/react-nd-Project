

const SelectOptions=({statues,book,updateBookStatues,Flag,books})=>{

       if (Flag==='searchPage'){
        if(books.find(item => item.id === book.id )) {

            let index= books.findIndex(item => item.id === book.id )
            Flag='booksPage'
            statues=books[index].shelf

        }
            
       }
    
    const handleOnChange = (e)=>{
        e.preventDefault()
        
        updateBookStatues(book,e.target.value)
    }

    

    return (

       
        <div className="book-shelf-changer">
                            {  Flag==='searchPage' && (
                                <select value={'none'} onChange={handleOnChange}>
                                <option value="moveTo" disabled>
                                  Move to...
                                </option>
                                <option value="currentlyReading">
                                  Currently Reading
                                </option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            )


                            }
                            <select value={statues} onChange={handleOnChange}>
                              <option value="moveTo" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
    )
}

export default SelectOptions