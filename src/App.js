import "./App.css";
import { useState,useEffect } from "react";
import BooksPage from "./BooksPage";
import SearchPage from "./SearchPage";
import { Route,Routes,useNavigate } from "react-router-dom";
import * as BooksAPi from './BooksAPI'
import PropTypes from 'prop-types'

function App() {
  
  const [books,setBooks]=useState([])
  const navigate=useNavigate()

  const updateApi = async (book,shelf)=>{
    await  BooksAPi.update(book,shelf)
  }

  const updateBookStatues = (updated,statues)=>{


     //check file found in my reads or not 
    let updatedBook = books.find(book => book.id === updated.id )
    let updatedBooks

    if(updatedBook){

       // update file shelf 
       updatedBook={...updatedBook,shelf:statues}

       // update backend
         updateApi(updated,statues)
   
       // delete old file shelf 
         updatedBooks=  books.filter(book => book.title !== updatedBook.title)
       // add new updated file shelf 
         updatedBooks=[...updatedBooks,updatedBook]
         refreshBooks(updatedBooks)
         navigate('/')

    }

    else {
      let newBook = {...updated,shelf:statues}

      refreshBooks([...books,newBook])
      updateApi(newBook,statues)
      navigate('/')
       

    }
  
  }

  

  useEffect(()=>{
    let mounted =true 

    if (mounted){

      const getBooks =async()=>{
        const res = await BooksAPi.getAll()
        
        setBooks(res)
    }

    getBooks()
      
    }

    return ()=>{
      mounted= false 
    }
      

  },[])

  const refreshBooks=(books)=>{
      setBooks(books)
  }

  return (
    <div className="app">

      <Routes>


      <Route exact path="/" element={<BooksPage books={books} updateBookStatues={updateBookStatues}/>}/>

      <Route exact path="/search" element={<SearchPage updateBookStatues={updateBookStatues} books={books}/>}/>
      


      </Routes>
      
    </div>
  )
}

App.propTypes={
  books:PropTypes.array,
  books:PropTypes.array.isRequired,
  updateBookStatues:PropTypes.func,
  
}

export default App;
