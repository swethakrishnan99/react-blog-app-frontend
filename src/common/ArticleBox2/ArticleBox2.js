import React from "react";
import { useNavigate } from "react-router-dom";
import "./ArticleBox2.css";

export default function ArticleBox2(props) {
  const {
    news: { title, image, category, id, createdOn },
    index,
  } = props;
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/blogs/${id}`, { replace: true });
  }
  return (
    <div
      className={
        id === 1
          ? "flex-column top1 articleBox2"
          : "flex-row1 flex-start articleBox2"
      }
      onClick={() => handleClick(id)}
    >
      <div className={id === 1 ? "top1-img" : "articleBox2-imgDiv"}>
        <img src={image} alt="not-found" className="article2-img" />
      </div>
      <div className="flex-row">
        <div className="flex-column">
          <p className={id === 1 ? "top1-title" : "articleBox2-title"}>
            {title}
          </p>
          <p className="articleBox2-subtitle">{category}/{createdOn}</p>
        </div>
        <p className="rating">{index}</p>
      </div>
    </div>
  );
}
