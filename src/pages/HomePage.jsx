import axios from "axios";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [posts, setPost] = useState([]);
  async function getBlogs() {
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    setPost(data);
  }

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        // alignContent: "center",
        margin: "20px 40px",
      }}
    >
      {posts.map((item) => (
        <div class="card" style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "20px" }} key={item.id}>
            {item.title}
          </h2>
          <p style={{ fontSize: "15px" }}>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
