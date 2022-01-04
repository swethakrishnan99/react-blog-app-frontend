import React from "react";
import { useState } from "react";
import ArticleBox1 from "../ArticleBox1/ArticleBox1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function LatestArticles(props) {
  const [starting, setStarting] = useState(0);
  const [ending, setEnding] = useState(5);
  const { blogs } = props
  const loadMore = (e) => {
    if (ending >= blogs.length) {
      return;
    }
    setStarting((prevState) => prevState + 5);
    setEnding((prevState) => prevState + 5);
  };
  return (
    <>
      {blogs.slice(starting, ending).map((news, index) => (
        <ArticleBox1 news={news} key={index} />
      ))}
      <button className="btn-load-more" onClick={loadMore}>
        {ending < blogs.length ? (
          <FontAwesomeIcon icon={faArrowDown} className="load-more" />
        ) : (
          <p>The end</p>
        )}
      </button>
    </>
  );
}
