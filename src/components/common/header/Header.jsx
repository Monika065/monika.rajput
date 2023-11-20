/*import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import SearchIcon from '@material-ui/icons/Search';
//import DehazeIcon from '@material-ui/icons/Dehaze';
import { NavLink,Link } from "react-router-dom"

//import { useNavigate } from 'react-router-dom'
//import { NavLink } from 'react-router-dom'

import{ Button } from '@mui/material'

const Header = (props) => {
  const [navbar, setNavbar] = useState(false)
  //const navigate=useNavigate();

  return (
    <>
      <Head />
      <header>
       
        <div className='container paddingSmall'>
          <div>
            <div className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
              
                <Link to='/'>Home</Link>
              </li>
              <li>
                <ul>
                <NavLink to='/culture'>HeadLines</NavLink>
              </li>
              <li>
                <Link to='/politics'>Politics</Link>
              </li>
              <li>
                <Link to='/memes'>Memes</Link>
              </li>
              <li>
                <Link to='/sports'>Sports</Link>
              </li>
              <li>
                <Link to='/entertainment'>Entertainment</Link>
              </li>
              <li>
                <Link to='/cricket'>Cricket</Link>
              </li>
              <li>
                <Link to='/web series'>Web Series</Link>
              </li>
              <li>
                <Link to='/blogs'>Blogs</Link>
              </li>
                   
                    
                    
                   
                    <button className={Button} onClick={props.onLogout}>
          Logout
        </button>
       </ul>

                   
                   
       
        
     
                    
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
         </button>
         </div>
         </div>
         
        
         
        
         </header>
       
         </>
    
    
  
  )
}

export default Header*/
import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"
import{ Button } from '@mui/material'

const Header = (props) => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/culture'>Culture</Link>
              </li>
              <li>
                <Link to='/politics'>Politics</Link>
              </li>
              <li>
                <Link to='/memes'>Entertainment</Link>
              </li>
              <li>
                <Link to='/sports'>Sports</Link>
              </li>
              <li>
                <Link to='/boxed'>Boxed</Link>
              </li>
              <li>
                <Link to='/reviews'>technology</Link>
              </li>
              <li>
                <Link to='/reviews'>Blogs</Link>
              </li>
              <li>
                <Link to='/reviews'>Reviews</Link>
              </li>
             
     
  
    <div className="container">
      <div className="Right-section">
        <button className="logoutButton" onClick={props.onLogout}>
          Logout
        </button>
      </div>
      {/* Other content of your component */}
    </div>
 
</ul>
           
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header



