import React,{useEffect} from 'react'
import {Field,reduxForm} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import { useHistory,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {adminlogIn,getData,getDataJson,fetchdataload} from '../recepie/recepieaction';
import styled from 'styled-components';

const Wrapper = styled.div`
span{
  display:flex;
  color:red;
}
button{
  margin-top: 10%;
  border-radius: -16%;
  background: black;
  color: white;
  cursor:pointer;
}
.login{
  font-weight:bold;
  font-size:20px
}
display:flex;
flex-direction:column;
width:20%;
margin:auto;
text-align:center;
margin-top:10%;
.MuiFormControl-root{
  width:100%
}
`

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


let AdminLogin = (props) => {
const {handleSubmit, invalid}= props;

/* custom render component */
const render =(props) =>{
const{ input,label, type, meta: { touched,visited, error }} =  props;
  return(
<div>
<input
{...input}
label={label}
type={type}
/>
{touched && error && <span>{error}</span>}
</div>
  )
}



  const submit = (submitdata)=>{
    console.log("submit data",submitdata)
  let loggedIn = false;
  props.adminlogin(submitdata)
 
  }
  
    return (
      <Wrapper>
        {props.isLoggedIn ? <Redirect to="/admindashboard"/>:
      <form onSubmit={handleSubmit(submit)}>
        <p className ='login'>Admin Login</p>
        {props.errorMessage.length>0?<div style= {{color:'red'}}>{props.errorMessage}</div>:null}
        <div>
          <Field name="email" label ="Email" component= {render}  type="email" />
        </div>
        <div>
          <Field name="password" label ="Password" component= {render}  type="password" />
        </div>
  {/*<button type="submit"   disabled={invalid}>Submit</button> */}
   <button type="submit">Submit</button>

      </form>
}
    </Wrapper>
    )
}

const mapStateToProps = state=>({
  isLoggedIn : state.recepieReducer.adminLoggedIn,
  errorMessage : state.recepieReducer.adminErrorMessage,
})


const mapDispatchToProps = dispatch=>({
  adminlogin : (values)=>{dispatch(adminlogIn(values))},
  // jsondata :()=>{dispatch(getDataJson())}
})


AdminLogin  =  reduxForm({
    form : 'adminlogin',
    validate
})(AdminLogin)


export default connect(mapStateToProps,mapDispatchToProps)(AdminLogin)
