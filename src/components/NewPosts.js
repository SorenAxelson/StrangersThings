import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL = `https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT`;

const NewPosts = ({ token }) => {
  const navigate = useNavigate();
  const [title, enterTitle] = useState("");
  const [price, enterPrice] = useState("");
  const [description, enterDescription] = useState("");
  const [delivery, enterDelivery] = useState("");
  let deliveryBoolean = false;
  const makePost = async () => {
    if (delivery === "y" || delivery === "Y") {
      deliveryBoolean = true;
    } else {
      deliveryBoolean = false;
    }
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: `$${price}`,
            willDeliver: deliveryBoolean,
          },
        }),
      });
      const result = await response.json();
      navigate("./#");
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div id="newPostsForm">
      <form onSubmit={makePost}>
        <label className="label">Enter Listing Title</label>
        <input
          value={title}
          type="text"
          onChange={(event) => enterTitle(event.target.value)}
        ></input>
        <label className="label">Enter Price in USD</label>
        <input
          value={price}
          type="text"
          onChange={(event) => enterPrice(event.target.value)}
        ></input>
        <label className="label">Enter Item Description</label>
        <input
          value={description}
          type="text"
          onChange={(event) => enterDescription(event.target.value)}
        ></input>
        <label className="label">Will You Deliver? Enter "y" or "n"</label>
        <input
          value={delivery}
          type="text"
          onChange={(event) => enterDelivery(event.target.value)}
        ></input>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};
export default NewPosts;
