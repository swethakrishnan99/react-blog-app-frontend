import React from "react";
import ArticleBox4 from "./ArticleBox4/ArticleBox4";

export default function TheLatest(props) {
  const { blogs } = props;
  return (
    <div className="theLatest-box flex-row">
      <ArticleBox4 news={blogs[1]} />
      <ArticleBox4 news={blogs[24]} />
      <ArticleBox4 news={blogs[34]} />
    </div>
  );
}
