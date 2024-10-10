import React, { useEffect, useState } from "react";
import "./list.styles.css";
import Like from "../Like/like.component";

const dummyData = [
    {
      "id": 11,
      "pun": "My cat was just sick on the carpet, I don’t think it’s feline well."
    },
    {
      "id": 12,
      "pun": "Why did the octopus beat the shark in a fight? Because it was well armed."
    },
    {
      "id": 13,
      "pun": "How much does a hipster weigh? An instagram."
    },
    {
      "id": 14,
      "pun": "What did daddy spider say to baby spider? You spend too much time on the web."
    },
    {
      "id": 15,
      "pun": "Atheism is a non-prophet organisation."
    },
    {
      "id": 16,
      "pun": "There’s a new type of broom out, it’s sweeping the nation."
    },
    {
      "id": 17,
      "pun": "What cheese can never be yours? Nacho cheese."
    },
    {
      "id": 18,
      "pun": "What did the Buffalo say to his little boy when he dropped him off at school? Bison."
    },
    {
      "id": 19,
      "pun": "Have you ever heard of a music group called Cellophane? They mostly wrap."
    },
    {
      "id": 20,
      "pun": "Why does Superman gets invited to dinners? Because he is a Supperhero."
    }
  ];

interface Pun {
  id: number;
  pun: string;
  likes: number;
}

const PunList: React.FC = () => {
  const [items, setItems] = useState<Pun[]>([]);
  let [likedCount, setLikedCount] = React.useState(0);

  let handleLike = (index: number) => {
      setLikedCount(likedCount + 1);
      dummyData[index].likes = likedCount;
  }

  const sortPunList = (data: any) => {
    //sort list by number of likes
    // data.sort((a, b) => {
    //   return a.likes - b.likes;
    // });
    
  };

  useEffect(() => {
    //get data from "api"
    sortPunList(dummyData);
    let items = {};
    items = dummyData.map((item) => { 
      const newItem = { ...item, likes: 0 };
      return item; 
    });
    setItems(items);

  }, []);

  return (
    <div>
      <h1>A PUN-TASTIC LIST</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.pun}<Like clickFunc={handleLike} likedCount={item.likes}/></li>
        ))}
      </ul>
    </div>
  );
};

export default PunList;
