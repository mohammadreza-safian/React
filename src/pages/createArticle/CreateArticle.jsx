// import { useState } from "react"
import {useState} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styled from "./createArticle.module.css";
import Input from "../../Components/Input/Input";
import TextArea from "../../Components/TextArea/TextArea";
import axios from "axios";

function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    athor: "",
    readingTime: "",
    message: "",
    imageUrl: "",
  });
  const handelChangeArticle = (e) => {
    setArticle((prevStat) => ({
      ...prevStat,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeMessage = (e) => {
    setArticle((prevStat) => ({
      ...prevStat,
      message: e.target.value,
    }));
  };
  const handelCreateNew = () => {
    axios.post("http://localhost:8000/article", {
      id: 9,
      imageUrl: article.imageUrl,
      title:article.title ,
      readingTime:article.readingTime,
      date:article.date,
      athor: article.athor,
      content: article.message,
    });
  };
  return (
    <>
      <Navbar title="MY BLOG" />
      <div className={styled.createArticlePage}>
        <div className="container">
          <h1>Create New Article</h1>
          <Input
            name="title"
            label="title"
            handleChange={handelChangeArticle}
          />
          <Input name="date" label="Date" handleChange={handelChangeArticle} />
          <Input
            name="athor"
            label="athor"
            handleChange={handelChangeArticle}
          />
          <Input
            name="readingTime"
            label="Time Reading"
            handleChange={handelChangeArticle}
          />
          <Input
            name="imageUrl"
            label="Image URL"
            handleChange={handelChangeArticle}
          />
          <TextArea label="Text" handleChange={handleChangeMessage} />
          <div className={styled.buttonWrapper}>
            <button onClick={handelCreateNew}>Send Article</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateArticle;
