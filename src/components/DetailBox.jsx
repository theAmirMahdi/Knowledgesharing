/* eslint-disable react/prop-types */

import { Button } from "antd";
import "./DetailBox.css";
import { useNavigate } from "react-router-dom";

function DetailBox({ id, summary, imageUrl }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="wrapper">
      <img
        src={`http://localhost:5000/${imageUrl}`}
        alt="Background"
        className="background-image"
      ></img>
      <div className="details">
        <h4>تگ خبر</h4>
        <p>{summary}</p>
        <Button onClick={handleClick}>خواندن مطلب</Button>
      </div>
    </div>
  );
}

export default DetailBox;
