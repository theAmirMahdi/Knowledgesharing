import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  padding: 10px 0;
  background-color: #001529;
  color: #fff;
`;

function FooterSection() {
  return (
    <StyledFooter>
      Dashboard Mini Project ©{new Date().getFullYear()} Created by AmirMahdi
    </StyledFooter>
  );
}

export default FooterSection;
