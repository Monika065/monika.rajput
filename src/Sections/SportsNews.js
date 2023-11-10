import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SportsNewsBottom from '../components/SportsNews/SportsNewsBottom'
import SportsNewsMain from '../components/SportsNews/SportsNewsMain'
import SportsNewsRight from '../components/SportsNews/SportsNewsRight'
import SportsNewsShorts from '../components/SportsNews/SportsNewsShorts'

const baseURL = 'https://content.guardianapis.com'
const apiKey = `api-key=${process.env.REACT_APP_API_KEY}`

const SportsNews = () => {
    const [sportsNews, setSportsNews] = useState()

    const fetchSportsNews = async() => {
        const dataSportsNews = await axios.get(`${baseURL}/search?q=ipl%2Ccricket&page-size=40&show-fields=thumbnail&${apiKey}`)

        // console.log(dataSportsNews.data.response.results);
        
        setSportsNews(dataSportsNews.data.response.results)
    }

    useEffect(() => {
        fetchSportsNews()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="sportsNews">
            <span className="double-dot-line"></span>
            <h1 className="sportsNews__heading">
                Sports 
                <ArrowForwardIosIcon className="heading-arrow" />
            </h1>

            <div className="sportsNews__wrapper">
                <div className="sportsNews__left">
                    <div className="sportsNews__leftTop">
                        <SportsNewsMain sportsNews={sportsNews} />
                        <SportsNewsShorts sportsNews={sportsNews}  />
                    </div>
                    <SportsNewsBottom sportsNews={sportsNews}  />
                </div>
                <SportsNewsRight sportsNews={sportsNews}  />
            </div>
        </div>
    )
}

export default SportsNews