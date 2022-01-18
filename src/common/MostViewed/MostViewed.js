import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MostViewed(props) {
    const { featured } = props
    const navigate = useNavigate()
    const image1 = { backgroundImage: `url(${featured[0].image})` };
    const image2 = { backgroundImage: `url(${featured[1].image})` };
    const image3 = { backgroundImage: `url(${featured[2].image})` };
    const handleClick = (id) => {
        navigate(`/blogs/${id}`)
    }
    return (
        <div className="grid-container" >
            <div className="item-1" style={image1} onClick={() => handleClick(featured[0].id)}>
                <p>{featured[0].title}</p>
                <span>{`${featured[1].category}/${featured[0].createdOn}`}</span>
            </div>
            <div className="item-2" style={image2} onClick={() => handleClick(featured[0].id)}>
                <p>{featured[1].title}</p>
                <span>{`${featured[1].category}/${featured[1].createdOn}`}</span>
            </div>
            <div className="item-2" style={image3} onClick={() => handleClick(featured[0].id)}>
                <p>{featured[2].title}</p>
                <span>{`${featured[2].category}/${featured[2].createdOn}`}</span>
            </div>
        </div>
    )
}
