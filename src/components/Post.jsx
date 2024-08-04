import { useState } from "react";
import { Button, notification } from "antd";
import PostForm from "./PostForm";

const Post = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleCreate = (formData) => {
    fetch("http://localhost:5000/posts", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Post created:", data);
        notification.success({
          message: "پست جدید ساخته شد",
          description: "پست شما با موفقیت ساخته شد",
        });
        setVisible(false);
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        notification.error({
          message: "Post Creation Failed",
          description: "There was an error creating your post.",
        });
      });
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        پست جدید
      </Button>
      <PostForm
        visible={visible}
        onCreate={handleCreate}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default Post;
