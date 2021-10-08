import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from'react-redux';

const ProtecteRoute =({component:Component,userLoggedIn,params, ...rest})=>{
    // console.log("isauth",isLoggedIn);
    // console.log("Component",Component);
    // alert("Component",Component);
    // const islog = localStorage.getItem('loggedIn')
    // console.log("log",islog);
    alert("params",params);
    return (
        <div>
        <Route {...rest} render ={(props)=>{
           return userLoggedIn === true ?<Component {...props}/>:<Redirect to = '/' />
        } }/>
    </div>
    )
}
const mapStateToProps =(state) =>({
    userLoggedIn:state.recepieReducer.userLoggedIn
    // adminLoggedIn:state.recepieReducer.adminLoggedIn
})

export default connect(mapStateToProps)(ProtecteRoute);