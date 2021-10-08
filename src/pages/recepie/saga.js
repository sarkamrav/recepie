import { call, put, takeLatest, all } from 'redux-saga/effects';
// import toggleDropdown from './cartaction'
// import cartactiontype from './carttype';
import fetchData from '../fetchdata';
import {uservalid,userinvalid,fetchdataaction,adminvalid,admininvalid} from '../recepie/recepieaction';

/*Genereator funvtion */

function* userloggedIn(action) {
  try{
    let loggedIn = false;
    console.log("payloadsaga",action.payload);
    // const data = yield call(fetchData);
    const data = yield call(fetchData, { method: 'get', url: '/json/userpasswords.json' })
    //  yield put(logIn(data))
    let userdata = action.payload;
    data.data.map((item)=>{
      debugger;
      if(item.username ===userdata.email && item.password === userdata.password){
        loggedIn = true;
        localStorage.setItem('userloggedIn',loggedIn);
      }
    })
  if(!loggedIn){
    yield put(userinvalid('Please Enter Valid Credential for User'))
  }
  if(loggedIn){
    yield put(uservalid())
    try{
      const user = yield call(fetchData, { method: 'get', url: `/json/shopdata.json` })
       console.log("apidata",user);
        yield put(fetchdataaction(user.data));
        } catch(e){
            console.log(e);
        }
  }
  
  } catch(e){
    console.log(e);
  }
 
}


/* admin login */
function* adminloggedIn(action) {
  try{
    let loggedIn = false;
    console.log("payloadsaga",action.payload);
    // const data = yield call(fetchData);
    const data = yield call(fetchData, { method: 'get', url: '/json/adminpasswords.json' })
    //  yield put(logIn(data))
    let admindata = action.payload;
    data.data.map((item)=>{
      debugger;
      if(item.username ===admindata.email && item.password === admindata.password){
        loggedIn = true;
        localStorage.setItem('adminloggedIn',loggedIn);
      }
    })
  if(!loggedIn){
    yield put(admininvalid('Please Enter Valid Credential for admin'))
  }
  if(loggedIn){
    yield put(adminvalid())
  }
  
  } catch(e){
    console.log(e);
  }
 
}



function* actionWatcher(){
  yield takeLatest('USERLOGIN',userloggedIn)
  yield takeLatest('ADMINLOGIN',adminloggedIn)
}

export default function* rootSaga() {
  yield all([actionWatcher()])
}

