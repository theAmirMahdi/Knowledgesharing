import { useState, useEffect } from "react";
import axios from "axios";
import { List, Card, Spin, Alert, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./PostList.css";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/posts");
        setPosts(response.data);
      } catch (err) {
        console.error(err);
        setError("Error fetching posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Spin tip="Loading..." />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" />;
  }

  return (
    <List
      itemLayout="vertical"
      dataSource={posts}
      renderItem={(post) => (
        <List.Item key={post.id}>
          <Card className="ant-card">
            {post.imageUrl && (
              <img
                src={`http://localhost:5000/${post.imageUrl}`}
                alt={post.summary}
                className="post-image"
              />
            )}
            <div className="post-content">
              <h3 className="ant-list-item-meta-title">{post.summary}</h3>
              <Button
                className="button"
                onClick={() => navigate(`/posts/${post.id}`)}
              >
                ادامه مطلب
              </Button>
            </div>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default PostsList;
