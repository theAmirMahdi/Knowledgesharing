import { useEffect, useState } from "react";
import "./ContentSection.css";
import DetailBox from "./DetailBox";

const ContentSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="boxWrapper">
      {posts.map((post) => (
        <DetailBox
          key={post.id}
          id={post.id}
          summary={post.summary}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
};

export default ContentSection;
