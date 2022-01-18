import React from "react";
import { useNavigate } from "react-router-dom";
import "./ArticleBox3.css";

export default function ArticleBox3(props) {
  const { title, content, category, id, createdOn } = props.news;
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/blogs/${id}`, { replace: true });
  }

  return (
    <div
      className="articleBox3 flex-column"

      onClick={() => handleClick(id)}
    >
      <p className="article3-title">{title}</p>
      <p className="article3-para">{content}</p>
      <p className="article3-subtitle">
        <span className="black">{category}</span>/{createdOn}
      </p>
    </div>
  );
}
