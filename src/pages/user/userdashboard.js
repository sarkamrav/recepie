import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import{useraddcart} from '../recepie/recepieaction'
import { getDefaultNormalizer } from '@testing-library/react';

const UserDashboard=({recepie,dispatchtocart})=>{
    const [ingredients,updateingredients]  =useState([])
    const [currsubcat,updatecurrsubcat] =useState("")
    const [subcat,updatesubcat]  =useState([])
    const [des,updatedes] = useState('')
    const [cart,updatecart] =useState([]);
    const recepieCategory =[]
    const recepiesubCategory =[]
 

    console.log("recepie",recepie);
    recepie.map(data =>{
        if(!recepieCategory.includes(data.category)){
            recepieCategory.push(data.category);
        }
    })

    const showIngredient =(subrecepie)=>{
        const ingredient = [];
        const description =[]
        // alert(subrecepie);
           recepie.filter(data =>{
               if(data.subcategory == subrecepie) {
                updatecurrsubcat(subrecepie);
                console.log("lllllll",subrecepie)
                ingredient.push(data.ingredients) 
                description.push(data.description);
               }
              
            })
            console.log("ingredient",ingredient);
            console.log("description",description)
            updateingredients(ingredient[0]);
            updatedes(description[0])

}

    const showCategory = (reccat)=>{
        recepie.filter(data =>{
            console.log("data",reccat)
            if(data.category == reccat){
         
       if(!recepiesubCategory.includes(data.subcategory)){
            recepiesubCategory.push(data.subcategory);
        }}         
        })
        console.log("lllllllll",recepiesubCategory);
        updatesubcat(recepiesubCategory);

    }


     const addToCart =()=>{
         const fff =[]
        console.log("currsubcat",currsubcat);
        recepie.filter(data =>{
            if(data.subcategory == currsubcat) {
            //   fff.push(data);
            dispatchtocart(data)
            }
            // updatecartData(fff)
     })
     
    }
    console.log("ingredient",ingredients[0]);
    return(
        <>
        <div>Welcome to Admin Dashboard</div>
       <h4>Category</h4>
        {recepieCategory && recepieCategory.length>0&&recepieCategory.map(recepie =>{
            return(<><button onClick ={()=>showCategory(recepie)}>{recepie}</button></>)
        }) }
       <h4>SubCategory</h4>
          {subcat && subcat.length>0&&subcat.map(subrecepie =>{
            return(<><button onClick={()=>showIngredient(subrecepie)}>{subrecepie}</button><br/></>)
        }) }

     <h4>ingredient</h4>
          {ingredients && ingredients.length>0&&ingredients.map(ing =>{
            return(<><span>{ing.name}</span>:<span>{ing.price}</span>
            </>)
        }) }
        <div>{des}</div>
        <button onClick ={addToCart}>Add To Cart</button>
        </>
    )
}

const mapStateToProps =(state)=>({
    recepie : state.recepieReducer.recepiecollection
})
const mapDispatchToProps = dispatch =>({
    dispatchtocart :(values)=>{dispatch(useraddcart(values))}
})
export default connect(mapStateToProps,mapDispatchToProps)(UserDashboard)