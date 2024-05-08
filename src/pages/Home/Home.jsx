import {useEffect, useState} from "react";
import Article from "../../Components/Article/Article";
import Navbar from "../../Components/Navbar/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";
import {Link} from "react-router-dom";
import Spinner from "../../Components/Spinner/Spiner";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/article")
      .then((result) => {
        setArticles(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styled.homeWrraper}>
      <Navbar title="MY BLOG" />
      
      <div className="container">
        <h2>All New Articles</h2>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styled.article}>
            {articles.map((article) => (
              <Link to={`/article/${article.id}`}>
                <Article key={article.id} dataArt={article} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
