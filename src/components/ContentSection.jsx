import styled from "styled-components";
import { Button, Carousel } from "antd";
import "./ContentSection.css";

const Box = styled.div`
  position: relative;
  height: 480px;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Align children to the bottom */
  align-items: center; /* Center align items horizontally */
  text-align: center;
  overflow: hidden;
  float: right;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    filter: blur(8px);
    z-index: 1;
    border-radius: 20px;
  }

  h2,
  h5,
  p {
    position: relative;
    z-index: 2;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    float: right;
    display: inline-block;
  }

  h2 {
    margin: 10px 0;
    font-size: 24px;
  }

  h5 {
    margin-bottom: 10px;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    margin: 0 0 10px; /* Adjusted for spacing */
  }

  .button-container {
    position: relative;
    z-index: 2;
    display: inline-block;
    /* Removed margin-top: auto; */
  }
`;
const data = [
  {
    image: "../public/Arman.jpg",
    name: "آرمان",
    title: "DevOps Engineer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem accusantium dolorum vel quos voluptatibus optio harum, omnis neque iste commodi aperiam sunt officia qui quibusdam provident quidem voluptatum, repudiandae quia.",
    link: "ادامه مطلب",
  },
  // {
  //   image: "../public/Arman.jpg",
  //   name: "Ali",
  //   title: "BackEnd Developer",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem accusantium dolorum vel quos voluptatibus optio harum, omnis neque iste commodi aperiam sunt officia qui quibusdam provident quidem voluptatum, repudiandae quia.",
  // },
  // {
  //   image: "../public/Arian.jpg",
  //   name: "Arian",
  //   title: "Scrum Master",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem accusantium dolorum vel quos voluptatibus optio harum, omnis neque iste commodi aperiam sunt officia qui quibusdam provident quidem voluptatum, repudiandae quia.",
  // },
  // {
  //   image: "../public/Amir.jpg",
  //   name: "AmirMahdi",
  //   title: "FrontEnd Developer",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem accusantium dolorum vel quos voluptatibus optio harum, omnis neque iste commodi aperiam sunt officia qui quibusdam provident quidem voluptatum, repudiandae quia.",
  // },
];

const ContentSection = () => {
  return (
    <Carousel autoplay arrows>
      {data.map((item, index) => (
        <Box key={index} image={item.image}>
          <h2>{item.name}</h2>
          <h5>{item.title}</h5>
          <p>{item.description}</p>
          <div className="button-container">
            <Button>{item.link}</Button>
          </div>
        </Box>
      ))}
    </Carousel>
  );
};

export default ContentSection;
