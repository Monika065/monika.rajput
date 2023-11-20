import { Container } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import DehazeIcon from '@material-ui/icons/Dehaze';
import "./header.css"
const HeaderMenu = ({ stickMenu }) => {
    return (
        <div className={`headerMenu ${stickMenu ? 'headerMenuSticky' : ''}`}>
            <Container>
                <div className="headerMenu__container">
                    <div 
                        className="headerMenu__category"
                        style={{
                            transform: stickMenu ? 'translateX(0px)' : 'translateX(-40px)',
                            transition: 'all .5s'
                        }}
                    >
                        <h2 
                            style={{
                                opacity: stickMenu ? 1 : 0,
                                visibility: stickMenu ? "visible" : "hidden",
                                transition: 'all .5s'
                            }}
                        >
                            <a className="headerMenu__logo" href="https://timesofindia.indiatimes.com/">
                                TOI
                            </a>
                        </h2>
                        <ul>
                            <li>Briefs</li>
                            <li>Videos</li>
                            <li>City</li>
                            <li>India</li>
                            <li>World</li>
                            <li>Business</li>
                            <li>Tech</li>
                            <li>Cricket</li>
                            <li>Sports</li>
                            <li>Entertainment</li>
                            <li>TV</li>
                            <li>Web Series</li>
                            <li>Life &amp; Style</li>
                            <li>Education</li>
                            <li>Photos</li>
                            <li>Blog</li>                            
                        </ul>

                    </div>
                    <div className="headerMenu__right">
                        <div className="toi-plus">
                            <a className="toi-plus-link" href="https://timesofindia.indiatimes.com/toi-plus">
                                TOI+
                            </a>
                        </div>
                        <SearchIcon className="headerMenu__icon" />
                        <DehazeIcon className="headerMenu__icon"/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeaderMenu