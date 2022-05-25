import React, { Component } from 'react';
import './form.css';
import {useFormik, Form} from 'formik';
import * as yup from 'yup';

function Forms(){

    const formik = useFormik({
        initialValues:{
            username:"",
            name:"",
            email:"",
            status:"",
            checkbox:"",
            image:"",
            category:"",
            alphanumeric:""
        },

        validationSchema : yup.object({
            username:yup.string()
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
            .max(10,"less then 10 char.")
            .required("this is required field"),
            name:yup.string()
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
            .max(10,"less then 10 char.")
            .required("this is required field"),
            email:yup.string()
            .email("Field should contain a valid e-mail").max(255).required("E-mail is required")
            .required("this is required field"),
            alphanumeric:yup.string()
            .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            )
            .required('Please Enter your password'),
        }),

        onSubmit:(values) =>{
            console.log(values)
        }
    })
    console.log(formik.errors)
    console.log(formik.values)
    
    return(
        <div className='f_main'>
            <form onSubmit={formik.handleSubmit}>
                <h1>Sign Up</h1>
                <label >Username</label>
                <br />
                <input 
                className='inp'
                type="text"
                name ="username"
                onChange={formik.handleChange}
                value= {formik.values.username}
                placeholder="Enter your Username"
                />
                {formik.touched.username && formik.errors.username && <p style={{color:"red"}}>{formik.errors.username}</p>}
                <br />
                <label >Name</label>
                <br />
                <input 
                className='inp'
                type="text"
                name ="name"
                onChange={formik.handleChange}
                value= {formik.values.name}
                onBlur={formik.handleBlur}
                placeholder ="Enter your name"
                />
                  {formik.touched.name && formik.errors.name && <p style={{color:"red"}}>{formik.errors.name}</p>}
                <br />
                <label htmlFor="">Alphanumeric value</label>
                <input 
                className='inp'
                type="text"
                name ="alphanumeric"
                onChange={formik.handleChange}
                value= {formik.values.alphanumeric}
                placeholder="Enter an elphanumeric value"
                />
                {formik.touched.username && formik.errors.username && <p style={{color:"red"}}>{formik.errors.username}</p>}
                <br />
                <label >Email</label>
                <br />
                <input 
                className='inp'
                type="email"
                name ="email"
                onChange={formik.handleChange}
                value= {formik.values.email}
                placeholder ="Enter your email"
                />
                {formik.touched.email && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}

                <br />
                <label >Subject</label>
                <br />
                <input 
                type="radio"
                name='status'
                value="first"
                onChange={formik.handleChange}
                 />Web technologies
                 <br />
                <input 
                type="radio"
                name='status'
                value="second"
                onChange={formik.handleChange}
                 />VLSI
                 <br />
                <input 
                type="radio"
                name='status'
                value="first"
                onChange={formik.handleChange}
                 />DLD
                 <br />
                 <label htmlFor="">Check Box</label>
                 <br />
                 <input 
                 type="checkbox"
                 name='checkbox'
                 value="checkbox1"
                 onChange={formik.handleChange}
                 />JAVA
                 <br />
                 <input 
                 type="checkbox"
                 name='checkbox'
                 value="checkbox2"
                 onChange={formik.handleChange}
                 />Bootstrap
                 <br />
                 <input 
                 type="checkbox"
                 name='checkbox'
                 value="checkbox3"
                 onChange={formik.handleChange}
                 />PHP
                 <br />
                 <input
                 type="file"
                 name='image'
                 onChange={formik.handleChange}
                  />
                  <select name="category" onChange={formik.handleChange}>
                  <option value="lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="karachi">Karachi</option>
                  </select>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}
 
export default Forms;