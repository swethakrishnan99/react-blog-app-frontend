import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import Title from "../../common/Title/Title";
import ArticleBox1 from "../../common/ArticleBox1/ArticleBox1";
import ArticleBox2 from "../../common/ArticleBox2/ArticleBox2";
import AddBox from "../../common/AddBox/AddBox";
import "./CategoryPage.scss"



export default function CategoryPage() {
    const { category } = useParams()
    const [ending, setEnding] = useState(5);
    const [blogs, setBlogs] = useState([]);
    axios.get(`http://localhost:8000/api/v1/blogs/${category}`).then((res) => {
        setBlogs(res.data)
        // console.log("RESPONSE RECEIVED: ", blogs);
    })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
    const loadMore = () => {
        if (ending >= blogs.length) return;
        setEnding((prevState) => prevState + 5);
    };

    return (
        <div className="categoryPage">
            <div className="flex-column">
                <Title title={category} />
                {blogs.slice(0, ending).map((news, index) => (
                    <ArticleBox1 news={news} key={index} />
                )
                )}
                {ending < blogs.length ? (
                    <FontAwesomeIcon
                        icon={faArrowDown}
                        onClick={loadMore}
                        className="btn-load-more load-more"
                    />
                ) : (
                    <span className="subtitle">End</span>
                )}
            </div>
            <div className="flex-column">
                <div>
                    <Title title={"Top Posts"} />
                    {blogs.slice(0, 3).map((news, index) => (
                        <ArticleBox2 news={news} key={index} index={index + 1} />
                    ))}
                </div>
                <AddBox />
            </div>
        </div>
    )
}
