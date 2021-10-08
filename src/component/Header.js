// import React,{useState,useEffect}from 'react'
// import {Link} from 'react-router-dom'
// import styled from 'styled-components'
// import CartIcon  from '../pages/cart/carticon'
// import CartDropdown from '../pages/cart/cartDropdown'
// import {withRouter} from 'react-router-dom';
// import {connect} from 'react-redux';
// import {selectSize,selectcheckbox,selectsearchbox, logoutUser} from'../pages/cart/cartaction'
// import Timer from './Timer'


// const Wrapper = styled.div`
// label{
//   margin-right:10px;
// }
// padding: 20px;
// .headeroption{
//   display: flex;
//   justify-content: space-around;
//   background: cadetblue;
//     padding: 10px;
// }
// .option{
//   display: flex;
//   text-align: center;
//   justify-content: space-evenly;
//   align-items: center;
//   background:darkcyan;
// }

//   `



//   const selectedCategory =(e,selectedItem,updateItem) =>{
//     // console.log("selectbox",selectbox);
//     if(e.target.checked){
//       if(!selectedItem.includes(e.target.value)){
//         selectedItem = selectedItem.concat(e.target.value)
//         console.log("vvvvvvvvvvvvvv",selectedItem);
//         updateItem(selectedItem);
//       }
//     } else{
//       selectedItem = selectedItem.filter((data)=>data.toString() != e.target.value.toString());
//       updateItem(selectedItem);
//     }
//     // selectbox(selectedItem);
//   }
// const searchData =(e,search,update)=>{
//   // console.log("searchbox",searchbox);
// update(e.target.value)
// // searchbox();
// }
// const  Header =(props) => {
//   const [selectedItem,updateItem]=useState([]);
//   const [serachField,updatedSearchField]=useState('');
//   useEffect(()=>{
//     props.searchbox(serachField);
//   },[serachField])
  
//   const logout =()=>{
//     localStorage.removeItem('persist:root');
//     localStorage.removeItem('loggedIn');
//     // window.location.reload();
//     window.location.href = "http://localhost:3000/login";
//   }
//   useEffect(()=>{
//     props.selectbox(selectedItem);
//   },[selectedItem])
// console.log("props.location.pathname",props.location.pathname);
// return <div>
// {props.location.pathname.includes('/login')|| (props.location.pathname.length == 1 && props.location.pathname == '/')? null:(
//   <Wrapper>
//     {/* <Timer initialMinute = '0' initialSeconds = "10"  /> */}
//   <Link className ='logo-container'  to ='/'>
//   </Link>
//         <div className ='headeroption'>
//           <Link className ='option'  to ='/'>SHOP</Link>
//           <div>
//             <label>Search</label>
//           <input type ='text' value ={serachField} onChange ={(e)=>searchData(e,serachField,updatedSearchField)}/>
//           </div>
//           <button onClick={()=>props.history.push('/orderdetails')} >Order Details</button>
//           <button  aria-label ="logout"   onClick={()=>logout()} >Logout</button>

//        </div>
//        <CartDropdown />
//       <div className='option'>       
//           <div className='filter'>
//           <span>Filter</span>
//           <select onChange ={(e)=>props.selectedFilter(e.target.value)}>
//           <option value='select' selected hidden>select Size</option> 
//             <option value='s'>small</option>
//             <option value='m'>Medium</option>
//             <option value='l'>Large</option>
//             <option value ='xl'>XtraLarge</option>
//             <option value = 'xxl'>XtraSmall</option>
//             <option value = 'select'>None</option>
//           </select>
//         </div>
//         <div>
//             <div>Select the Category</div>
//             {props.selectedCategory.map(data=>(
//               <label>
//               <input type ='checkbox' value={data} onChange={(e)=>selectedCategory(e,selectedItem,updateItem)}/>
//               {data}
//               </label>
//             ))}
//           </div>
//         <CartIcon/>   
//         <h2>Pmax Studio</h2>
//         <a href ="https://www.youtube.com/watch?v=ghPC6wozctU">click here</a>
//       </div>
//       </Wrapper>
// )
// }
// </div> 
// }
//   const mapStateToProps =(state)=>({
//     selectedCategory :state.cartReducer.selectedCategory,
//     currentselectedCategory:state.cartReducer.currentselectedCategory,
//     search:state.cartReducer.search
//   });

// const mapDispatchToProps =(dispatch)=>({
//   selectedFilter : (data)=>{dispatch(selectSize(data))},
//    selectbox :(data)=>{dispatch(selectcheckbox(data))},
//   searchbox:(data)=>{dispatch(selectsearchbox(data))},
// })

// export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));