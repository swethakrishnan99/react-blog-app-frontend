import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import Profile from "../man.png"

export default function Footer(props) {
  const { tag, likes, userId, createdOn, views } = props.blog;
  return (
    <>
      <div className="tags">
        {tag.map((tag, index) => <span key={index}>{tag}</span>)}
      </div>
      <p className="subtitle float-left">
        <FontAwesomeIcon icon={faThumbsUp} /> {likes} Likes
      </p>
      <div className="flex-row1 border">
        <img src={Profile} alt="profile not found" className="profile" />
        <div>
          <p className="subtitle">Written by</p>
          <p className="profile-name margin">{userId}</p>
          <p className="subtitle">{createdOn} - {views} Views</p>
        </div>
      </div>
    </>
  );
}
