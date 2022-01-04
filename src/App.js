import "./App.css";
import React, { useContext, useEffect } from "react";
import axios from "axios";
import NavBar from "./component/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./modules/HomePage/HomePage";
import CategoryPage from "./modules/CategoryPage/CategoryPage";
// import GetStarted from "./modules/GetStarted/GetStarted";
import NotFound from "./modules/NotFound/NotFound";
import BlogPage from "./modules/BlogPage/BlogPage";
import NewsProvider from "./News";

function App() {
  const blogs = useContext(NewsProvider);

  axios
    .post('http://localhost:8000/api/v1/blogs', blogs)
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
  const [signIn, setSignIn] = React.useState(false);
  const onClickSignIn = () => setSignIn((prevState) => !prevState);




  return (
    <div className="blog-apps">
      {signIn ? (
        <Routes>
          {/* <Route path="sign-in" element={<GetStarted />} /> */}
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      ) : (
        <>
          <NavBar onClickSignIn={onClickSignIn} />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path=":category" element={<CategoryPage />}>
              <Route path=":category/:id" element={<BlogPage />} />
            </Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
