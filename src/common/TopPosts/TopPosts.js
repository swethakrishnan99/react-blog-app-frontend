import React from "react";
import ArticleBox2 from "../ArticleBox2/ArticleBox2"
// import { useContext } from "react";

export default function TopPosts(props) {

  const { blogs } = props;
  return (
    <div>
      {blogs
        .map((news, index) => {
          return (
            <ArticleBox2 news={news} key={index} index={index + 1} />
          )
        })
      }    </div>
  );
}
