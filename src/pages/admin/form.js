import React,{useState,useEffect,useReducer} from 'react';
   import {Field,reduxForm} from 'redux-form';
import TextField from '@material-ui/core/TextField';

const validate = values => {
    const errors = {}
    console.log("error",values)
    if (!values.password) {
      errors.password = 'Required'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    return errors
  }
  

let Form =(props)=>{
    const {handleSubmit, invalid}= props;
    const render =(props) =>{
        const{ input,label, type, meta: { touched,visited, error }} =  props;
          return(
        <div>
        <input
        {...input}
        label={label}
        type={type}
        />
        {/* {touched && error && <span>{error}</span>} */}
        </div>
          )
        }
  

        const submit = (submitdata)=>{
            console.log("submit data",submitdata)
          let loggedIn = false;
          console.log(submitdata);
                  }
//   }
    return(
        <form onSubmit={handleSubmit(submit)}>
                {/* <p className ='login'>Admin Login</p> */}
                 {/* {props.errorMessage.length>0?<div style= {{color:'red'}}>{props.errorMessage}</div>:null} */}
                <div>
                    <label>Category</label>
                   <Field name="category" label ="Email" component= {render}  type="text" />
                </div>
                <div>
                <label>SubCategory</label>
                  <Field name="subcategory" label ="Password" component= {render}  type="text" />
                </div>
          {/*<button type="submit"   disabled={invalid}>Submit</button> */}
           <button type="submit">Submit</button>
        
              </form>
    )
}

Form  =  reduxForm({
    form : 'addrecepie',
    validate
})(Form)

export default Form;