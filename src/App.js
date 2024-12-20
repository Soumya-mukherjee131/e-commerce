import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import SignUp from "./Pages/SingUp/SignUp";
import LogIn from "./Pages/LogIn/LogIn";
import Contact from "./Pages/Contact/Contact";
// import About from "./Pages/About/About";
import { Login } from "@mui/icons-material";


const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      if (response.data && response.data.data) {
        setCountryList(response.data.data); 
        // console.log(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  const values = { countryList }; 

  return (
    <>
      <div>
        <BrowserRouter>
        <MyContext.Provider value={values}>
        <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
          <Route path="/blog" exact={true} element={<Blog/>}/>
          {/* <Route path="/shop" exact={true} element={<Shop/>}/>
          <Route path="/category" exact={true} element={<Category/>}/>
          <Route path="/wishlist" exact={true} element={<Wishlist/>}/> */}
          {/* <Route path="/about" exact={true} element={<About/>}/> */}
          <Route path="/contact" exact={true} element={<Contact/>}/> 
          <Route path="/signup" exact={true} element={<SignUp/>}/>
          <Route path="/login" exact={true} element={<LogIn/>}/>
        </Routes>
        </MyContext.Provider>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
export {MyContext};
