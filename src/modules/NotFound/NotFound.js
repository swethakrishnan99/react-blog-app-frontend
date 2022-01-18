import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";


export default function NotFound() {
  return (
    <div className="flex-column not-found">
      <h1 className="not-found-tittle">Page Not Found</h1>
      <Link to="">Go to Home Page</Link>
    </div>
  )
}

