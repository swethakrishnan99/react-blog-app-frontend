import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import {
    faFacebookSquare,
    faTwitterSquare,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./BlogPage.css";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import Profile from "../../common/man.png"

export default function BlogPage(props) {
    const { id } = useParams()
    const [blog, setBlog] = useState(null);
    const [like, setLike] = useState(false)
    const navigate = useNavigate()
    const likeArticle = () => {
        if (props.login === true)
            setLike(prevState => !prevState);
        else { navigate("/sign-in") }
    };
    useEffect(() => {
        axios.get(`https://react-blog-app-backend.herokuapp.com/api/v1/blogs/${id}`).then((res) => {
            setBlog(...res.data)
            console.log("RESPONSE RECEIVED: ", res.data);
        })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }, [id])
    useEffect(() => {
        if (like === true) {
            setBlog(({ ...blog, likes: blog.likes + 1 }))
            axios.post(`https://react-blog-app-backend.herokuapp.com/api/v1/blogs/${id}`, blog)
                .then((res) => {
                    console.log("RESPONSE RECEIVED: ", res);
                })
                .catch((err) => {
                    console.log("AXIOS ERROR: ", err);
                });
        }
    }, [like])

    if (blog === null) { return (<div>"loading"</div>) }
    return (
        <div>
            <Header login={props.login} like={like} likeArticle={likeArticle} />
            <div className="page1 flex-column">
                <p className="title">{blog.title}</p>
                <div className="flex-row2 space-between">
                    <div className="flex-row1">
                        <img src={Profile} alt="profile not found" className="profile" />
                        <div>
                            <p className="profile-name">{blog.userId}</p>
                            <p className="subtitle">{blog.createdOn}</p>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
                        <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
                        <FontAwesomeIcon icon={faInstagram} className="icon" />
                        <FontAwesomeIcon icon={faYoutube} className="icon" />
                    </div>
                </div>
                <img src={blog.image} alt="not found" className="image" />
                <p className="content">{blog.content}</p>
                <Footer blog={blog} login={props.login} like={like} likeArticle={likeArticle} />
            </div>
            {/* <MoreArticle currentNews={news} Profile={Profile} /> */}
        </div>
    )
}
