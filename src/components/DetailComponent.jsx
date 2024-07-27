import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";
import axios from "axios";

const DetailComponent = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <Card title={post.title} style={{ margin: 24 }}>
      <p>{post.details}</p>
    </Card>
  );
};

export default DetailComponent;
