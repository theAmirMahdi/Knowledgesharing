import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  padding: 10px;
  background-color: #54359d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: ${(props) => (props.visible ? "block" : "none")};
  transition: opacity 0.3s;

  &:hover {
    background-color: #443089;
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
      به بالا
    </Button>
  );
};

export default ScrollToTopButton;
