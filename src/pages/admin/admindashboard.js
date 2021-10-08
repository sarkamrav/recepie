import React,{useState,useEffect,useReducer} from 'react';
import Form from './form'

// console.log("state",data);
const AdminDashboard =()=>{
    const [showform,updateshowform]=useState(false)
    const submitData =()=>{
        updateshowform(true)
    }
    

    return (
        <>
    <button onClick ={submitData} >Add Recepie</button>

    {showform &&<Form/>}
    </>
    )
    

}



export default AdminDashboard;



