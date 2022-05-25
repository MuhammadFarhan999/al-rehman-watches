import React, { PureComponent } from 'react';
import './login.css'

import {useFormik, Form} from 'formik';
import * as yup from 'yup';


function Signup(){

    const formik = useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            email:"",
            password:"",
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
            .required("this is required field")
            
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
                    value={formik.values.firstname}
                    aria-describedby="helpId"
                    placeholder="First Name"
                       />
                       {formik.touched.firstname && formik.errors.firstname && <p style={{color:"red"}}>{formik.errors.firstname}</p>}
                       <input 
                   type="text"
                    className="form-control" 
                    name="username"
                    id="txt"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                    aria-describedby="helpId"
                    placeholder="Username"
                       />
                       {formik.touched.firstname && formik.errors.firstname && <p style={{color:"red"}}>{formik.errors.firstname}</p>}
                       <input 
                className="form-control"
                type="email"
                name ="email"
                onChange={formik.handleChange}
                value= {formik.values.email}
                placeholder ="Enter your email"
                id='txt'
                />
                {formik.touched.email && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}
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
                      {formik.touched.firstname && formik.errors.firstname && <p style={{color:"red"}}>{formik.errors.firstname}</p>}
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

// class Signup extends React.Component {
//     render() { 
//         return <div className='s_main_container'>
           
//              <div className="bg-image"></div>

//                 <div className="l_container">
//                     <h1>Sign Up</h1>
//                     <p>Create your account</p>
//                     <div className="form-group">
//                         <input type="text" className="form-control" name="" id="txt" aria-describedby="helpId" placeholder="First Name"/>
//                         <input type="text" className="form-control" name="" id="txt" aria-describedby="helpId" placeholder="Last Name"/>
//                         <input type="email" className="form-control" name="" id="txt" aria-describedby="helpId" placeholder="Email"/>
//                         <div className="form-group">
//                             <input type="password" className="form-control" name="" id="txt" placeholder="Password"/>
//                         </div>
//                         <a href="/" className="fp">Already have an account? </a>
//                         <button><a href="/">Sign Up</a></button>
//                         <br/>
                       
//                     </div>

//                 </div>
               
//         </div>;
//     }
// }
export default Signup;
