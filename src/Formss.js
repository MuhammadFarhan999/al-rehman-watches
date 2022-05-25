import React, { Component } from 'react';
import {useFormik, Form} from 'formik';
import * as yup from 'yup';
import './formss.css';

function Formss (){
    const formik = useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            email:"",
            number:"",
            address1:"",
            address2:"",
            postalCode:"",
        },

        validationSchema : yup.object({
            firstname:yup.string()
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
            .max(10,"less then 10 char.")
            .required("this is required field"),
            lastname:yup.string()
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
            .max(10,"less then 10 char.")
            .required("this is required field"),
            password:yup.string()
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
            .max(10,"less then 10 char.")
            .required("this is required field"),
            email:yup.string()
            .email("Field should contain a valid e-mail").max(255).required("E-mail is required")
            .required("this is required field"),
            address1:yup.string()
            .required("this is required field"),
            address2:yup.string()
            .required("this is required field"),
            postalCode:yup.string()
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
            .max(10,"less then 8 char.")
            .required("this is required field"),
        }),

        onSubmit:(values) =>{
            console.log(values)
        }
    })


        return(
          <div className="f_main">
            
          <form onSubmit={formik.handleSubmit}>
          <h1>Product Order Form</h1>
          <label >Firstname</label>
          <br />
          <input 
          className='inp'
          type="text"
          name ="firstname"
          onChange={formik.handleChange}
          value= {formik.values.firstname}
          placeholder="Enter your firstname"
          />
          {formik.touched.firstname && formik.errors.firstname && <p style={{color:"red"}}>{formik.errors.firstname}</p>}
          <br />
          <label >Lastname</label>
          <br />
          <input 
          className='inp'
          type="text"
          name ="lastname"
          onChange={formik.handleChange}
          value= {formik.values.name}
          onBlur={formik.handleBlur}
          placeholder ="Enter your lastname"
          />
            {formik.touched.lastname && formik.errors.lastname && <p style={{color:"red"}}>{formik.errors.lastname}</p>}
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
          <label htmlFor="">Phone Number</label>
          <br />
          <input 
          className='inp'
          type="text"
          name ="number"
          onChange={formik.handleChange}
          value= {formik.values.number}
          placeholder="Phone Number"
          />
          {formik.touched.number && formik.errors.number && <p style={{color:"red"}}>{formik.errors.number}</p>}
          
          <br />
          <label >Name</label>
          <br />
          <input 
          className='inp'
          type="text"
          name ="lastname"
          onChange={formik.handleChange}
          value= {formik.values.name}
          onBlur={formik.handleBlur}
          placeholder ="Enter your lastname"
          />
            {formik.touched.lastname && formik.errors.lastname && <p style={{color:"red"}}>{formik.errors.lastname}</p>}
          <br />
          <label >Address 1</label>
          <br />
          <input 
          className='inp'
          type="text"
          name ="Address1"
          onChange={formik.handleChange}
          value= {formik.values.address1}
          onBlur={formik.handleBlur}
          placeholder ="Address 1"
          />
            {formik.touched.address1 && formik.errors.address1 && <p style={{color:"red"}}>{formik.errors.address1}</p>}
          <br />
          <label >Address 2</label>
          <br />
          <input 
          className='inp'
          type="text"
          name ="Address2"
          onChange={formik.handleChange}
          value= {formik.values.address2}
          onBlur={formik.handleBlur}
          placeholder ="Address 1"
          />
            {formik.touched.address2 && formik.errors.address2 && <p style={{color:"red"}}>{formik.errors.address2}</p>}
          <br />
          <select name="category" onChange={formik.handleChange}>
                  <option value="lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="karachi">Karachi</option>
                  </select>
                <br />
                <label htmlFor="">Postal Code</label>
                <input 
                className='inp'
                type="text"
                name ="postalCode"
                onChange={formik.handleChange}
                value= {formik.values.postalCode}
                placeholder="Enter an elphanumeric value"
                />
                {formik.touched.postalCode && formik.errors.postalCode && <p style={{color:"red"}}>{formik.errors.postalCode}</p>}
                <br />
          <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
      </div>
           

           );
        }
    
    
    export default Formss;




          

