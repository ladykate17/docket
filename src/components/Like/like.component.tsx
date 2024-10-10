import React from 'react';
import './like.styles.css';
import styled from 'styled-components';

const LikeButton = styled.button`
    background-color: "#fff";
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #333;
    cursor: pointer;
    padding: 4px 8px;
    margin-left: 6px;
`;

interface LikeProps {
    //liked: boolean; // Use later for persisted state
}

const Like: React.FC<LikeProps> = ({}) => {
    let [likedCount, setLikedCount] = React.useState(0);

    let handleLike = () => {
        setLikedCount(likedCount + 1);
    }

    return (
        <div className="likesContainer">
            <LikeButton onClick={() => handleLike()}>
                Add Like
            </LikeButton>
            <div className='likes'>{likedCount} Likes</div>
        </div>
    );
};

export default Like;