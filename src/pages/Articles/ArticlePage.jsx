import styled from "./articlePage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import art from "../../assest/images/images.png";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../../Components/Spinner/Spiner";

function ArticlePage() {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/article/${params.id}`)
      .then((result) => {
        setArticle(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  console.log(params.id);
  return (
    <div className={styled.articleWrapper}>
      <Navbar title="MY BLOG" />
      {
        isLoading?<Spinner />:<>
          <div className="container">
        <h1>{article.title}</h1>
        <div className={styled.articleInfo}>
          <span>Date: {article.date}</span>
          <span>Writer: {article.athor}</span>
          <span>Time for reading: {article.readingTime}</span>
        </div>
        <img src={art} alt="" />
        <p>{article.content}</p>
      </div>
        </>
      }

      
      <Footer />
    </div>
  );
}
export default ArticlePage;
