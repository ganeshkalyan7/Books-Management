import React from 'react';
import { InputLabel,Input,FormControl } from '@mui/material';
import Grid from '@mui/material/Grid';
import  {useContext} from 'react';
import {BooksContext} from './App';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function Editbooks() {
    let [title,setTitle]=useState(" ");
    let [authorName,setAuthorName]=useState("");
    let [img,setImg]=useState("");
    let [date_of_publish,setDate_of_publish]=useState("");
    let [price,setPrice]=useState("");

    let context = useContext(BooksContext);
    let params = useParams();
    console.log(params);
    let navigate = useNavigate();

    useEffect(() => {
        if (params.id < context.books.length) {
         setTitle(context.books[params.id].Title)
         setAuthorName(context.books[params.id].AuthorName)
         setImg(context.books[params.id].img)
         setDate_of_publish(context.books[params.id].date_of_publish);
         setPrice(context.books[params.id].price);
    
        }
        else {
          alert("Selected Students is Not available")
        }
      }, [params.id, context.books]);

      let handleSubmit = () => {
        let newdata = {
          Title: title,
          AuthorName: authorName,
          img: img,
          date_of_publish: date_of_publish,
          price: price,
         
        }
        let newArray = [...context.books];
        newArray.splice(params.id, 1, newdata);
        console.log(newArray);
        context.setBooks(newArray);
        navigate('/')
      }






  return (
    <div className='container'>
    
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 3, md: 4 }}>
    <div id="editbooks"> 
    <Grid item xs={6}>
    
    <FormControl>
      <div id="input" >


           <InputLabel htmlFor="my-input">Title Of Book</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={title}  onChange={(e) => setTitle(e.target.value)}/>
      </div>  
              
   </FormControl> &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;
 
    

    <FormControl>
           <InputLabel htmlFor="my-input">AuthorName</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text"  value={authorName}  onChange={(e) => setAuthorName(e.target.value)}/>
             
              
   </FormControl>
   </Grid>
   <br/>  <br/>  <br/>

   <Grid item xs={6}>
    <FormControl>
           <InputLabel htmlFor="my-input">Image Link Of Book</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text"  value={img}    onChange={(e) => setImg(e.target.value)}/>
             
              
   </FormControl> &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;
   


    <FormControl>
           <InputLabel htmlFor="my-input">Published Date</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={date_of_publish}  onChange={(e) => setDate_of_publish(e.target.value)} />
             
              
   </FormControl>
   </Grid>
   <br/> 

   <Grid item xs={12}>
   &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;
    <FormControl>
           <InputLabel htmlFor="my-input"> Price Of Book</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={price}  onChange={(e) => setPrice(e.target.value)} />
             
              
   </FormControl>
   </Grid>
     <br/> <br/>
   <Grid item xs={12}>
   <Button variant="contained" onClick={handleSubmit}>Update</Button>
   </Grid>
   </div>
  </Grid>
   


    </div>
  )
}

export default Editbooks