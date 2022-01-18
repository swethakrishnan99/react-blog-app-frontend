import "./App.css";
import React, { useContext, useState } from "react";
import axios from "axios";
import NavBar from "./component/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./modules/HomePage/HomePage";
import CategoryPage from "./modules/CategoryPage/CategoryPage";
import GetStarted from "./modules/GetStarted/GetStarted";
import NotFound from "./modules/NotFound/NotFound";
import BlogPage from "./modules/BlogPage/BlogPage";
import NewsProvider from "./News";

function App() {
  const blogs = useContext(NewsProvider);
  const [loginPage, setLoginPage] = useState(false);
  const [login, setLogin] = useState(false);
  const isLoginPage = () => {
    setLoginPage((prevState) => !prevState);
  };
  const setLoginTrue = () => {
    setLogin(true);
  };
  const setLoginFalse = () => {
    setLogin(false);
  };

  axios
    .post("https://react-blog-app-backend.herokuapp.com/api/v1/blogs", blogs)
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    });

  // https://react-blog-app-backend.herokuapp.com/api/v1/blogs

  return (
    <div className="blog-apps">
      <>
        {!loginPage && <NavBar setLoginFalse={setLoginFalse} login={login} />}
        <Routes>
          <Route
            path="/sign-in"
            element={
              <GetStarted
                isLoginPage={isLoginPage}
                setLoginTrue={setLoginTrue}
              />
            }
          />
          <Route path="/not-found" element={<NotFound />} />
          <Route index element={<HomePage />} />
          <Route path=":category" element={<CategoryPage />} />
          <Route path="blogs/:id" element={<BlogPage login={login} />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
