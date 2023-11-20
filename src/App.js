import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {LoginForm} from './components/LoginForm';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Updatepassword } from "./components/Updatepassword";
import {Home} from "./Home";
import { useState } from "react";
import { AddProperty } from "./components/AddProperty";
import { ListProperty } from "./components/ListProperty";
import { Dashboard } from "./components/Dashboard";
import NavBar from "./components/NavBar";
import { AboutUs } from "./components/AboutUs";
import { BuyerLogin } from "./components/BuyerLogin";


function App() {
  const [dash,setDash]=useState({});
  const [buyer,setBuyer]=useState({});
  const getdata=(data)=>{
    setDash(data);
  }
  const getBuyer=(data)=>{
    setBuyer(data);
  }
  console.log(dash);
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="/buyerlogin/*" element={<BuyerLogin set={getBuyer}/>}></Route>
          <Route path="/selllogin/*" element={<LoginForm setdata={getdata}/>}>
              <Route path="dashboard" element={<Dashboard obj={dash}/>}></Route>
              <Route path="add-property" element={<AddProperty userid={dash.id}/>}></Route>
              <Route path="list-property" element={<ListProperty userid={dash.id}/>}></Route>
          </Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/update" element={<Updatepassword />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
