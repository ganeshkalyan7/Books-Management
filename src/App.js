import './App.css';
import Books from './Books';
import React,{useState} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Addbooks from './Addbooks';
import Editbooks from './Editbooks';
export const BooksContext = React.createContext();


function App() {

  let [books,setBooks]=useState([ 
    {
      Title:"ATTITUDE IS EVRY THING",
     AuthorName:"jeff keller",
     img:"https://images-na.ssl-images-amazon.com/images/I/710jnzKlDTL.jpg",
     date_of_publish:"19 JAN 2017",
     price:199
 
    },
    {
      Title:"RUN,ROSE,RUN",
      AuthorName:"Dolly parton",
      img:"https://m.media-amazon.com/images/I/51h7odRtGhL.jpg",
      date_of_publish:" 7 March 2022",
      price:250


     },
     {
      Title:"THE THURSDAY MURDAR CLUB",
      AuthorName:"Richard Osman ",
      img:"https://m.media-amazon.com/images/I/512uUeNm5oL.jpg",
      date_of_publish:" 31 Oct  2021",
      price:130
     },
     {
      Title:"The Blue Umbrella",
      AuthorName:"Ruskin Bond  ",
      img:"https://images-na.ssl-images-amazon.com/images/I/81-Ly9OJ16L.jpg",
      date_of_publish:"  5 November  1992",
      price:130
     },
     {
      Title:"The Secret Lake",
      AuthorName:"Karen Inglis  ",
      img:"https://images-na.ssl-images-amazon.com/images/I/61XvU3oAOJL.jpg",
      date_of_publish:" 4  August 2011",
      price:57
     },
     {
      Title:"Summer of the Woods",
      AuthorName:"Ruskin Bond ",
      img:"https://images-na.ssl-images-amazon.com/images/I/71SCqLPDCFL.jpg",
      date_of_publish:"11 May  2013 ",
      price:120
     },
     {
      Title:"WHEN THE NIGHT FALLS",
      AuthorName:"Ruskin Bond ",
      img:"https://images-na.ssl-images-amazon.com/images/I/71qqfnrRL5L.jpg",
      date_of_publish:"1  October  2017 ",
      price:125
     },
     {
      Title:"Rich Dad Poor Dad",
      AuthorName:"Robert T. Kiyosaki ",
      img:"https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
      date_of_publish:" 11 April  2017  ",
      price:150
     },
     {
      Title:"Ash Mistry and the World of Darkness",
      AuthorName:"Sarwat Chadda ",
      img:"https://images-na.ssl-images-amazon.com/images/I/71bdMIGXzZL.jpg",
      date_of_publish:" 4 July 2013 ",
      price:20
     },
    
    
    
    



  ])
 
  return (
    <> 
    <div>
   
      <br/>
       
      <br/>  <br/>  <br/>
      
      <BrowserRouter> 
         <BooksContext.Provider value={{books,setBooks}}>
          <Routes>
          <Route path="/" element={<Books/>}></Route> 
          <Route path="addbooks" element={<Addbooks/>}></Route> 
          <Route path="/editbooks/:id" element={<Editbooks/>}></Route> 
      </Routes>
      </BooksContext.Provider>
      </BrowserRouter>
   </div>
    
    </>
    
  );
}

export default App;
