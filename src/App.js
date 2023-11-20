/*import "./App.css"
import Header from "./components/common/header/Header"

import {BrowserRouter as  Switch,Router,Route} from "react-router-dom"
import Footer from "./components/common/footer/Footer"
import Homepages from "./components/home/Homepages"
import Culture from "./components/culture/Culture"
//import SinglePage from "./components/singlePage/SinglePage"
import HeaderTop from "./components/common/header/HeaderTop"
//import Login from "./components/Login"
function App(){
  return(
  <>
   
<Router>
<HeaderTop/>
   <Header/>

 <Switch>
   
    <Route exact path='/' component={Homepages} />
    <Route exact path='/culture' component={Culture} />
   
    </Switch>

</Router>

<Footer/>
</>
  )
  }
export default App
*/
/*import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"
import HeaderTop from "./components/common/header/HeaderTop"
import Login from "./components/Login"
import toast from 'react-hot-toast';
import Signup from "./components/SignUp"
import  { useState } from 'react'
import {useEffect} from "react"
import News from "./components/news/News"
const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
      // Check if the user is already logged in from local storage
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      //check user exist alredy if yes then setloggedin true
      if (storedEmail && storedPassword) {
          setIsLoggedIn(true);
      }
  }, []);

  //When user sign up this will run 
  const signupHandler = (name, email, password) => {
      // Storing user information in local storage
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
      // Set the user as logged in
      setIsLoggedIn(true);
      toast.success('Signup successful!');
  }

  //This function will run when user login
  const loginHandler = (email, password) => {
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      if (email === storedEmail && password === storedPassword) {
          setIsLoggedIn(true);
          toast.success('Login successful!');
      } else {
          toast.error('Invalid login credentials. Please try again.');
      }
  };

  //this function will run when user logout
  const logoutHandler = () => {
      setIsLoggedIn(false)
      // localStorage.removeItem('userName');
      // localStorage.removeItem('userEmail');
      // localStorage.removeItem('userPassword');
      toast.success('Logout successful!');
    
  } 
return(
  <>
  {isLoggedIn ? (
 <>
 
   <Header onLogout={logoutHandler} />
        <Routes>
          <Route exact path='/' element={<Homepages />}></Route>
          <Route path='/singlepage/:id' exact element={<SinglePage/>}></Route>
          <Route exact path='/culture/:id'  element={<Culture/>} ></Route>
       </Routes>
         <News/>
        <Footer />
      
    </>
  )
  : (
    <Routes>
              <Route path="/" element={<Login onLogin={loginHandler} />} />
             <Route path="/signup" element={<Signup onSignup={signupHandler} />} />
                </Routes>
  )}
</> 
)

}

export default App*/

import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/news/Navbar";
import News from "./components/news/News";
import {BrowserRouter , Routes,Route } from "react-router-dom";
//import LoadingBar from "react-top-loading-bar";
//import Login from "./components/Login"
//import Signup from "./components/Signup"
//import { useEffect } from "react";
//import toast, {Toaster} from 'react-hot-toast';
const App = () => {

  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  console.log(`Api key: ${process.env.REACT_APP_NEWS_API}` );
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("BLACK MODE");
  return (
     <>
        <Navbar mode={mode} setMode={setMode} text={text} setText={setText} />
      
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                mode={mode}
                setMode={setMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key=""
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/business"
            element={
              <News
                mode={mode}
                setMode={setMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                mode={mode}
                setMode={setMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/general"
            element={
              <News
                mode={mode}
                setMode={setMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/health"
            element={
              <News
                mode={mode}
                setMode={setMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/science"
            element={
              <News
                mode={mode}
                setMode={setMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                mode={mode}
                setMode={setMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                mode={mode}
                setMode={setMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          >
            {" "}
          </Route>
        </Routes>
        </>
  )
 
}

export default App;
