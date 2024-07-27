import styled from "styled-components";
import { Button, Carousel } from "antd";

const Box = styled.div`
  position: relative; /* Position relative for layering */
  height: 480px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden; /* Hide overflow for the pseudo-element */

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
    filter: blur(8px); /* Blur effect */
    z-index: 1; /* Layer below the content */
    border-radius: 20px;
  }

  h2,
  h5,
  p {
    position: relative;
    z-index: 2; /* Layer above the blurred background */
    color: white; /* Ensure text is readable */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Text shadow for readability */
  }

  h2 {
    margin: 10px 0;
  }

  h5 {
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
  }
`;

const data = [
  {
    image: "../public/Arman.jpg",
    name: "Arman",
    title: "DevOps Engineer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem accusantium dolorum vel quos voluptatibus optio harum, omnis neque iste commodi aperiam sunt officia qui quibusdam provident quidem voluptatum, repudiandae quia.",
    link: "test",
  },
  {
    image: "../public/Arman.jpg",
    name: "Ali",
    title: "BackEnd Developer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem accusantium dolorum vel quos voluptatibus optio harum, omnis neque iste commodi aperiam sunt officia qui quibusdam provident quidem voluptatum, repudiandae quia.",
  },
  {
    image: "../public/Arian.jpg",
    name: "Arian",
    title: "Scrum Master",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem accusantium dolorum vel quos voluptatibus optio harum, omnis neque iste commodi aperiam sunt officia qui quibusdam provident quidem voluptatum, repudiandae quia.",
  },
  {
    image: "../public/Amir.jpg",
    name: "AmirMahdi",
    title: "FrontEnd Developer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem accusantium dolorum vel quos voluptatibus optio harum, omnis neque iste commodi aperiam sunt officia qui quibusdam provident quidem voluptatum, repudiandae quia.",
  },
];

const ContentSection = () => {
  return (
    <Carousel autoplay arrows>
      {data.map((item, index) => (
        <Box key={index} image={item.image}>
          <h2>{item.name}</h2>
          <h5>{item.title}</h5>
          <p>{item.description}</p>
          <Button>{item.link}</Button>
        </Box>
      ))}
    </Carousel>
  );
};

export default ContentSection;
