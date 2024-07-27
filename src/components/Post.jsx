// import {
//   CommentOutlined,
//   DislikeOutlined,
//   LikeOutlined,
// } from "@ant-design/icons";
// import { useState } from "react";
// import styled from "styled-components";

// const PostBox = styled.div`
//   border: 1px solid #070707;

//   h1 {
//     display: flex;
//   }
// `;

// // const ReactionBox = styled.div`
// //   display: flex;
// //   border-top: 2px solid #543d;
// //   padding: 5px;

// //   span {
// //     display: flex;
// //     padding: 0 10px;
// //   }
// // `;

// function Post() {
//   // const [like, setLike] = useState(0);
//   // const [dislike, setDislike] = useState(0);
//   // const [comment, setComment] = useState(0);

//   // function handleLike() {
//   //   setLike(like + 1);
//   // }

//   // function handleDislike() {
//   //   setDislike(dislike + 1);
//   // }

//   // function handleComment() {
//   //   setComment(comment + 1);
//   // }

//   const PostData = {
//     title: "Scrum",
//     details: "lorem",
//   };

//   return (
//     <PostBox>
//       <h1>{PostData.title}</h1>
//       <p>{PostData.details}</p>

//       {/* <ReactionBox>
//         <span>
//           <LikeOutlined style={{ colo: "#546" }} onClick={handleLike} />
//           <p>{like}</p>
//         </span>
//         <span>
//           <DislikeOutlined style={{ color: "red" }} onClick={handleDislike} />
//           <p>{dislike}</p>
//         </span>
//         <span>
//           <CommentOutlined onClick={handleComment} /> <p>{comment}</p>
//         </span>
//       </ReactionBox> */}
//     </PostBox>
//   );
// }

// export default Post;

import { useState } from "react";
import { Button, notification } from "antd";
import PostForm from "./PostForm";
import { v4 as uuidv4 } from "uuid"; // Import uuid to generate unique ids

const Post = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleCreate = (values) => {
    const postWithId = { ...values, id: uuidv4() };

    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postWithId),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Post created:", data);
        notification.success({
          message: "Post Created",
          description: "Your post has been successfully created!",
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
        Create Post
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
