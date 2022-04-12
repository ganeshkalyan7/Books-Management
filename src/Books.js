import React from 'react'
import { Card, CardContent, Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import  {useContext} from 'react';
import {BooksContext} from './App';
import {Link} from 'react-router-dom';




function Books() {
  let context = useContext(BooksContext);


  //delete
  const handeleDelete=(i)=>{
    let olddata=[...context.books]
    olddata.splice(i,1);
    context.setBooks(olddata)

  }
  
  return (

    
    <div  className="container">
        <nav className="navbar navbar-dark bg-dark">
           <div className="container-fluid">
             <div className="d-flex justify-content-center"> 
             <h1 className="container"> <b> BOOKS PARADISE  </b></h1>
             </div>
       
         <div className="d-flex justify-content-end">
          <Link to='/addbooks'> 
                <button type="button" className="btn btn-warning"><h3>ADD BOOKS </h3></button>
               </Link> 
           </div>
          
      
         
  </div>
  </nav>




 
        <br/>   <br/>    <br/> 



      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        {
          context.books.map((e,i) => {
            return <>
              <Grid item xs={2} sm={4} md={4} >
                <Card sx={{ maxWidth: 345 }} key={i}  id="grid" >
                 <CardContent>
                        {i+1}
                  </CardContent>

                  <CardContent>
                  <img src={e.img} alt="book" height="200" width="230" />
                  </CardContent>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <h2><b> {e.Title}</b></h2>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                         <h3> by:-<b>{e.AuthorName}  </b>  </h3>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <h4> {e.date_of_publish} </h4>
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                           <AttachMoneyIcon sx={{ fontSize:30}}/><span> {e.price}</span>
                    </Typography>
                    <Link to= {`/editbooks/${i}`}>
                    <Button > <ModeEditIcon sx={{ fontSize:50}} /> </Button>
                    </Link>
                    <Button  onClick={()=>{handeleDelete(i)}}>  <DeleteIcon   sx={{ fontSize:50}} />   </Button>
                    
                  </CardContent>
                   
               
                </Card>
              </Grid>

              </>


          })




        }
      </Grid>







    </div>
  )
}

export default Books