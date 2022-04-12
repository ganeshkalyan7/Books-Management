import React from 'react';
import {useState,useContext} from  'react';
import { useNavigate } from 'react-router-dom';
import {BooksContext} from './App';


function Addbooks() {
    let context = useContext(BooksContext);
    const initialvalues={
        title:"",
        authorname:"",
        img:"",
        date_of_publish:"",
        price:""
    }
    const [values,setValues]=useState(initialvalues);
    const navigate=useNavigate();

    const onChange=(e)=>{
        e.preventDefault();
    setValues({...values,[e.target.name]: e.target.value})
}
const  handleSubmit=()=>{
    let newDta={
        Title:values.title,
        AuthorName:values.authorname,
        img: values.img,
        date_of_publish:values.date_of_publish,
        price:values.price

    }
    let newArray = [...context.books];
    newArray.push(newDta)
    console.log(newArray);
    context.setBooks(newArray);
    navigate('/')
}




    return (
        <>
            <div className="container">
                 <h1 class="d-flex justify-content-center" ><b>ADD BOOK TO QEUE</b></h1>
                <div id="addbooks" > 
                <form class="row g-3">

                    <div class="col-auto">
                        <label > BOOK Title</label>
                        <input type="text" class="form-control" placeholder="title of the book" name='title' value={values.title} onChange={onChange} />
                    </div>
                    <br />   <br />    <br /> <br />
                    <div class="col-auto">
                        <label >AuthorName</label>
                        <input type="text" class="form-control" placeholder="Enter AuthorName" name='authorname' value={values.authorname} onChange={onChange}  />
                    </div>
                </form>
                <br />
                <form class="row g-3">

                    <div class="col-auto">
                        <label >image of the book</label>
                        <input type="url" class="form-control"  placeholder="url link of book"  name='img'  value={values.img} onChange={onChange} />
                    </div>
                    <br />   <br />    <br /> <br />
                    <div class="col-auto">
                        <label>  date_of_publish </label>
                        <input type="text" class="form-control" placeholder="date of releas"  name='date_of_publish' value={values.date_of_publish} onChange={onChange}  />
                    </div>
                </form>
                <br />   <br />    <br />
                <form class="row g-3">
                    <br />   <br />    <br /> <br />
                    <div class="col-auto">
                        <label> price of the book</label>
                        <input type="number" class="form-control" placeholder="price of book" name='price' value={values.price}  onChange={onChange} />
                    </div>
                </form>
                <br/>   <br />    <br />
                <button type="button" class="btn btn-primary" onClick={handleSubmit}>submit</button>
                
                </div>




            </div>

        </>

    );
}
export default Addbooks;