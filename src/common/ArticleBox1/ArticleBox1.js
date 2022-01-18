import React from "react";
import "./ArticleBox.css";
import { useNavigate } from "react-router-dom";

export default function ArticleBox1(props) {
  const { news } = props;
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/blogs/${id}`, { replace: true });
  };
  return (
    <>
      <div className="article-box" onClick={() => handleClick(news.id)}>
        <div className="articleBox-imgDiv">
          <img src={news.image} alt="not found" className="articleBox-img" />
        </div>
        <div>
          <p className="articleBox-heading">{news.title}</p>
          <div className="articleBox-para">{news.content}</div>
          <span className="articleBox-subtitle">
            <span className="black">{news.category}&ensp;</span>/{news.createdOn}
          </span>
        </div>
      </div>
    </>
  );
}
