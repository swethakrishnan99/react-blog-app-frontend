import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HomePage.scss";
import TheLatest from "../../common/TheLatest";
import Title from "../../common/Title/Title"
import LatestArticles from "../../common/LatestArticles/LatestArticles";
import AddBox from "../../common/AddBox/AddBox";
import HomeImgBox from "../../common/HomeImgBox/HomeImgBox";
import TopPosts from "../../common/TopPosts/TopPosts";
import LatestStories from "../../common/LatestStories/LatestStories"

export default function () {
    const [blogs, setBlogs] = useState([]);
    axios
        .get("http://localhost:8000/api/v1/blogs")
        .then((res) =>
            setBlogs(res.data)
        );
    if (blogs.length === 0) return <span>loading...</span>;
    const image1 = { backgroundImage: `url(${blogs[0].image})` };
    const image2 = { backgroundImage: `url(${blogs[9].image})` };
    const image3 = { backgroundImage: `url(${blogs[20].image})` };

    return (
        <div className="home-page">
            <div className="grid-container">
                <div className="item-1" style={image1}>
                    <p>{blogs[0].title}</p>
                    <span>{`${blogs[0].category}/${blogs[0].createdOn}`}</span>
                </div>
                <div className="item-2" style={image2}>
                    <p>{blogs[9].title}</p>
                    <span>{`${blogs[9].category}/${blogs[9].createdOn}`}</span>
                </div>
                <div className="item-2" style={image3}>
                    <p>{blogs[20].title}</p>
                    <span>{`${blogs[20].category}/${blogs[20].createdOn}`}</span>
                </div>
            </div>
            <div>
                <Title title="The Latest" />
                <TheLatest blogs={blogs} />
            </div>
            <div className="flex">
                <div><Title title="Latest Article" />
                    <LatestArticles blogs={blogs} />
                    <HomeImgBox blog={blogs[24]} /></div>
                <div>
                    <AddBox />
                    <Title title="Top Posts" />
                    <TopPosts blogs={blogs} />
                </div>

            </div>
            <div>
                <Title title="Latest Stories" />
                <LatestStories blogs={blogs} />
            </div>
        </div>
    );
}
