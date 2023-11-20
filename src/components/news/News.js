/*import React, { useEffect, useState } from "react";
import "./news.css"

const News = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let resonse = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=745dbf353b2145e4a6c46cb7402acab2")
      
    let data = await resonse.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <h1 className="text-center my-3"> Headlines</h1>
          <div className="mainDiv">
      {mynews.map((ele) => {
        console.log(ele)
        return (
          <>
        <div class="card" style={{  marginTop:"2rem" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
              <img src={ele.urlToImage == null ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*" : ele.urlToImage} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{ele.author ==="" ? "Janelle Ash" : ele.author}</h5>
                <p class="card-text">
                 {ele.title}
                </p>
                <a href={ele.url} target="_blank" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </>
        );
    })}
    </div>
    </>
  );
};

export default News;
*/
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
//import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function News({ mode, setMode, ...props }) {
  const [articles, setArticles] = useState([]);
  //const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  
  const updateNews = async () => {
    try {
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      let parsedData = await data.json();
      console.log(parsedData.articles);
      props.setProgress(30);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      props.setProgress(100);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state or display a message to the user
    }
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`;
    updateNews();
    // eslint-disable-next-line
    // console.log(props.apiKey)
    console.log(articles)
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px"  , alignContent:'end' }}
      >
          Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {/*loading && <Spinner />*/}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
       // loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    mode={mode}
                    setMode={setMode}
                  />
                </div>
              );
            })}
            ;
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

