import { ArrowUpOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  width: 64px;
  height: 64px;
  bottom: 20px;
  padding: 10px;
  background-color: #5ca7f0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 100;
  transition: opacity 0.3s;
  display: ${(props) => (props.visible ? "block" : "none")};
  &:hover {
    background-color: #0075e7;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button visible={visible} onClick={scrollToTop}>
      <ArrowUpOutlined />
    </Button>
  );
};

export default ScrollToTopButton;
