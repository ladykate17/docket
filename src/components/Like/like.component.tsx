import React from 'react';
import './like.styles.css';
import styled from 'styled-components';

const LikeButton = styled.button<{ $liked?: boolean; }>`
    background-color: ${props => props.$liked ? "#f9c22a" : "#fff"};
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
    let [liked, setLiked] = React.useState(false);

    let handleLike = () => {
        setLiked(!liked);
    }

    return (
        <>
            <LikeButton $liked={liked} onClick={() => handleLike()}>
                {liked ? "Liked" : "Like"}
            </LikeButton>
        </>
    );
};

export default Like;