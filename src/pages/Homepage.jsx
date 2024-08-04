import { Divider, Layout } from "antd";
const { Content, Footer } = Layout;
import HeaderSection from "../components/HeaderSection";
import ContentSection from "../components/ContentSection";
import FooterSection from "../components/FooterSection";
import styled from "styled-components";

import PostsList from "../components/PostList";
import ScrollToTopButton from "../components/ScrollToTopButton";

const StyledDivider = styled(Divider)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

function Homepage() {
  return (
    <Layout>
      <Layout>
        <HeaderSection />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <StyledDivider orientation="center">برترین مطالب</StyledDivider>
          <div
            style={{
              padding: 24,
              textAlign: "center",
            }}
          >
            <ContentSection />
            <StyledDivider orientation="center">آخرین مطالب</StyledDivider>
            <PostsList />
          </div>
          <ScrollToTopButton />
        </Content>

        <Footer>
          <FooterSection />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Homepage;
