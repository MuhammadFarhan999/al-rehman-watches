import React, { PureComponent } from 'react';
import './login.css'
import {useFormik, Form} from 'formik';
import * as yup from 'yup';


function Login(){

    const formik = useFormik({
        initialValues:{
            username:"",
            password:"",
            
        },

        validationSchema : yup.object({
            username:yup.string()
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
            .max(10,"less then 10 char.")
            .required("this is required field"),
            password:yup.string()
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
            .max(10,"less then 10 char.")
            .required("this is required field"),
            
        }),

        onSubmit:(values) =>{
            console.log(values)
        }
    })
    console.log(formik.errors)
    console.log(formik.values)
    
    return(
        <div className='s_main_container'>
           
        <div className="bg-image"></div>

           <div className="l_container">
               <h1>Login</h1>
               <p>Login into your account</p>
               <form onSubmit={formik.handleSubmit}>
               <div className="form-group">
                   <input 
                   type="text"
                    className="form-control" 
                    name="username"
                    id="txt"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    aria-describedby="helpId"
                    placeholder="Username"
                       />
                       {formik.touched.username && formik.errors.username && <p style={{color:"red"}}>{formik.errors.username}</p>}
                   <div className="form-group">
                       <input 
                       type="password"
                       className="form-control"
                       name="password" 
                       onChange={formik.handleChange}
                       value={formik.values.password}
                       id="txt" 
                       placeholder="Password"
                       />
                       {formik.touched.username && formik.errors.username && <p style={{color:"red"}}>{formik.errors.username}</p>}
                   </div>
                   <button type='submit'>Login</button>
                   <br/>
                   <a href="/" className="fp">Forget Password?</a>
               </div>
               </form> 
           </div>
          
   </div>
        

    );
}

 
export default Login;
