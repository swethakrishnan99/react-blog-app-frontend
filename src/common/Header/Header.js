
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt, faThumbsUp } from "@fortawesome/free-solid-svg-icons";



function Header(props) {

  return (
    <div className="flex-column center-fix">
      <FontAwesomeIcon
        onClick={props.likeArticle}
        icon={faThumbsUp}
        className={props.like ? "icon clicked" : "icon"}
      />
      <FontAwesomeIcon icon={faShareAlt} className="icon" />
    </div>
  )
}

export default Header

