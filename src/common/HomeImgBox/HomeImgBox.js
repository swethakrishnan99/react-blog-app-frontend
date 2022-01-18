import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeImgBox.css";

export default function HomeImgBox(props) {
  const { blog } = props;
  const { title, category, image, id, createdOn } = blog;
  const background = { background: `url(${image})` };

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`blogs/${id}`);
  }
  return (
    <div
      className="HomeImgBox flex-column"
      style={background}
      onClick={() => handleClick(id)}
    >
      <span className="HomeImgBox-title">{title}</span>
      <span className="HomeImgBox-subtitle">{category} / {createdOn}</span>
    </div>
  );
}
