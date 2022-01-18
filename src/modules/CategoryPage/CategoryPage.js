import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    const categories = ["Hollywood", "Bollywood", "Food", "Technology", "Fitness"]
    categories.indexOf(category) === -1 && navigate('/not-found')
    const [ending, setEnding] = useState(5);
    const [latest, setLatest] = useState([]);
    const [topPosts, setTopPosts] = useState([]);
    useEffect(() => {
        axios.get(`https://react-blog-app-backend.herokuapp.com/api/v1/blogs/${category}/most-viewed`).then((res) => {
            setTopPosts(res.data)
        })
        axios.get(`https://react-blog-app-backend.herokuapp.com/api/v1/blogs/${category}/latest`).then((res) => {
            setLatest(res.data)

        })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
        setEnding(5)
    }, [category])

    const loadMore = () => {
        if (ending >= latest.length) return;
        setEnding((prevState) => prevState + 5);
    };
    if (latest.length === 0) return <span>loading...</span>;

    return (
        <div className="categoryPage">
            <div className="flex-column">
                <Title title={category} />
                {latest.slice(0, ending).map((news, index) => (
                    <ArticleBox1 news={news} key={index} />
                )
                )}
                {ending < latest.length ? (
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
                    {topPosts.map((news, index) => (
                        <ArticleBox2 news={news} key={index} index={index + 1} />
                    ))}
                </div>
                <AddBox />
            </div>
        </div>
    )
}
