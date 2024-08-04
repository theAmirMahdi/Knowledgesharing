import { useState, useEffect } from "react";
import axios from "axios";
import { Spin, Alert } from "antd";
import { useParams } from "react-router-dom";
import "./PostDetails.css";
import HeaderSection from "./HeaderSection";
import FooterSection from "./FooterSection";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/posts/${id}`);
        console.log(response);
        setPost(response.data);
      } catch (err) {
        setError("Error fetching post details");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <Spin tip="Loading..." />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" />;
  }

  return (
    <>
      <HeaderSection />
      <div className="postWrapper">
        <h2>{post.summary}</h2>
        <img
          src={`http://localhost:5000/${post.imageUrl}`}
          alt={post.summary}
        />
        <p>{post.details}</p>
        {/* {post.videoUrl && (
          <video width="640" controls>
            <source
              src={`http://localhost:5000/${post.videoUrl}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )} */}
      </div>
      <FooterSection />
    </>
  );
};

export default PostDetails;
