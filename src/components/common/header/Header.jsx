import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import SearchIcon from '@material-ui/icons/Search';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Link } from "react-router-dom"

const Header = () => {
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

            </ul>
            <div className="header__right">
                        <div className="toi-plus">
                            <a className="toi-plus-link" href="https://timesofindia.indiatimes.com/toi-plus">
                                TOI+
                            </a>
                        </div>
                        <SearchIcon className="header__icon" />
                        <DehazeIcon className="header__icon"/>
                    </div>
                    </nav>
                </div>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
         </button>
         </header>
         </>
    
    
  
  )
}

export default Header

