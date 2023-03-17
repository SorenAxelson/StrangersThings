import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import context from "./context";

console.log(context.token);
const TOKEN_STRING_HERE = context.token;
console.log(TOKEN_STRING_HERE);
const BASE_URL = `https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT`;

const NewPosts = () => {
  const navigate = useNavigate();
  const [title, enterTitle] = useState("");
  const [price, enterPrice] = useState("");
  const [description, enterDescription] = useState("");
  const [delivery, enterDelivery] = useState("");
  let deliveryBoolean = false;
  const makePost = async () => {
    console.log("i exist");
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
          Authorization: `Bearer ${TOKEN_STRING_HERE}`,
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
      console.log(result);
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
