/*import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"

import { BrowserRouter as   Route, Routes } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"

const App = () => {
  return (
    <>
      <Routes>
        <Header />
      
          <Route exact path='/' element={<Homepages/>} />
          <Route path='/singlepage/:id' exact element={<SinglePage/>} />
          <Route exact path='/culture' element={<Culture/>} />
         
          </Routes>
        <Footer />
    
    </>
  )
}

export default App
*/

import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"
//import Router from "json-server/lib/server/router"

const App = () => {
  return (
    <>
     
   
      <Header />
      <Routes>
        
   
          <Route exact path='/' component={Homepages} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route exact path='/culture' component={Culture} />
      
       
          </Routes>
          <Footer />
      
    
    </>
  )
}

export default App





 
    
    //  const [isLoggedIn, setIsLoggedIn] = useState(false);

//const loginHandler = (email, password)=>{
   // setIsLoggedIn(true)
//}

//const logoutHandler= ()=>{
   // setIsLoggedIn(false)
//}
//{!isLoggedIn && <Login onLogin={loginHandler} />}
//const App = () => {
 
//return(
  //  <>
    
     // <Router>
       // <Header />
      
       
        //  <Route exact path='/' component={Homepages} />
        //  <Route path='/singlepage/:id' exact component={SinglePage} />
        //  <Route exact path='/culture' component={Culture} />
     
       //   <Footer />
    //  </Router>
   // </>
 // )
//}

//export default App*/

