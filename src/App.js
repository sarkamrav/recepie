import React,{lazy,Suspense} from 'react';
import './App.css';
// import Home from './pages/Home';
import {BrowserRouter as Router, Route,Link,Switch, withRouter,Redirect} from 'react-router-dom';
// import Header from './component/Header';
import UserLogin from './pages/login/userLogin';
import AdminLogin from './pages/login/adminLogin';
import ProtecteRoute from './protectedRoute';
import UserDashboard from './pages/user/userdashboard';
import AdminDashboard from './pages/admin/admindashboard'
const App =() =>{
  return (
    <Router>
{/* <Header/> */}
      <Switch>
      <Route path ='/userdashboard' component ={UserDashboard} exact/> 
      <Route path ='/admindashboard' component ={AdminDashboard} exact/> 
      <Route path ='/' component ={UserLogin} exact/>
      <Route path ='/admin' component ={AdminLogin} exact/>
      <Route render={() => <Redirect to="/" />} />
     </Switch>
  </Router>
  );
}


export default withRouter(App);
