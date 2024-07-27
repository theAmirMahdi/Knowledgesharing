import { useState, useEffect } from "react";
import axios from "axios";
import { List, Card, Spin, Alert, Button } from "antd";
import { useNavigate } from "react-router-dom";

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
      itemLayout="horizontal"
      dataSource={posts}
      renderItem={(post) => (
        <List.Item>
          <Card title={post.title}>
            <p>{post.preview}...</p>
            <Button onClick={() => navigate(`/posts/${post.id}`)}>
              More Details
            </Button>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default PostsList;
