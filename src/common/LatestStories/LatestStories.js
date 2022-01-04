import React from "react";
import Article3 from "../ArticleBox3/ArticleBox3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./LatestStories.css";

export default function LatestStories(props) {
  const { blogs } = props;
  const [starting, setStarting] = useState(0);
  const [ending, setEnding] = useState(3);
  const showMore = () => {
    if (ending >= blogs.length) return;
    setStarting((prevState) => prevState + 3);
    setEnding((prevState) => prevState + 3);
  };
  return (
    <div className="latest-stories">
      <div className="flex top-bottom-border">
        {blogs.slice(starting, ending).map((news, index) => (
          <Article3 news={news} key={index} />
        ))}
      </div>
      {ending < blogs.length ? (
        <p onClick={showMore}>
          VIEW MORE
          <FontAwesomeIcon icon={faArrowRight} />
        </p>
      ) : (
        <p>END</p>
      )}
    </div>
  );
}
