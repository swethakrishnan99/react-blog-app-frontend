import React from "react";
import "./ArticleBox4.css";
import { useNavigate } from "react-router-dom";

export default function ArticleBox4(props) {
  const { news } = props;
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/blogs/${id}`, { replace: true })
  }
  return (
    <div
      className="articleBox4 flex-column"
      onClick={() => handleClick(news.id)}
    >
      <img src={news.image} alt="not found" className="article4-img" />
      <div>
        <span className="article4-title">{news.title}</span>
        <p className="article4-para">{news.content}</p>
        <span className="article4-subtitle">
          <span className="black">{news.category}</span>/{news.createdOn}
        </span>
      </div>
    </div>
  );
}
