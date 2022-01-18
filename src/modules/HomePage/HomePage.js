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
import MostViewed from "../../common/MostViewed/MostViewed";

export default function HomePage() {
    const [latest, setLatest] = useState([]);
    const [topPosts, setTopPosts] = useState([]);
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        axios
            .get("https://react-blog-app-backend.herokuapp.com/api/v1/blogs/latest")
            .then((res) => {
                setLatest(res.data)
            });
        axios
            .get("https://react-blog-app-backend.herokuapp.com/api/v1/blogs/most-viewed")
            .then((res) => {
                setTopPosts(res.data)
            });
        axios
            .get("https://react-blog-app-backend.herokuapp.com/api/v1/blogs/featured")
            .then((res) => {
                setFeatured(res.data)
            });
    }, []);

    if (featured.length === 0) return <span>loading...</span>;

    return (
        <div className="home-page">
            <MostViewed featured={featured} />
            <div>
                <Title title="The Latest" />
                <TheLatest blogs={latest} />
            </div>
            <div className="flex">
                <div><Title title="Latest Article" />
                    <LatestArticles blogs={latest} />
                    <HomeImgBox blog={featured[1]} /></div>
                <div>
                    <AddBox />
                    <Title title="Top Posts" />
                    <TopPosts blogs={topPosts} />
                </div>

            </div>
            <div>
                <Title title="Most Featured" />
                <LatestStories blogs={featured} />
            </div>
        </div>
    );
}
