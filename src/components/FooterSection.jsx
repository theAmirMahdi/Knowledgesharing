import { Col, Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import "./FooterSection.css";
import { NavLink } from "react-router-dom";
import TelegramIcon from "../icons/telegram.svg";
import YoutubeIcon from "../icons/youtube.svg";
import LinkedinIcon from "../icons/linkedin.svg";
import InstagramIcon from "../icons/instagram.svg";

function FooterSection() {
  return (
    <Footer className="footerStyle">
      <Row gutter={16}>
        <Col span={8}>
          <div className="aboutUs">
            <h3>درباره ما</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد.
            </p>
          </div>
        </Col>
        <Col span={8}>
          <div className="quickAccess">
            <h3>دسترسی سریع</h3>
            <ul className="links">
              <li>
                <NavLink to="/">صفحه اصلی</NavLink>
              </li>

              <li>
                <NavLink to="/about">درباره ما</NavLink>
              </li>
              <li>
                <NavLink to="/contact">ارتباط با ما</NavLink>
              </li>
            </ul>
          </div>
        </Col>
        <Col span={8}>
          <div className="socialMedia">
            <h3>شبکه های اجتماعی</h3>
            <p>
              برای اینکه از آخرین اخبار مطلع باشید ، شبکه های اجتماعی مارو دنبال
              کنید.
            </p>
            <ul className="links list-style">
              <li>
                <NavLink to="">
                  <img src={TelegramIcon} alt="telegram" />
                  تلگرام
                </NavLink>
              </li>
              <li>
                <NavLink to="">
                  <img src={InstagramIcon} alt="instagram" />
                  اینستاگرام
                </NavLink>
              </li>
              <li>
                <NavLink to="">
                  <img src={LinkedinIcon} alt="linkedin" />
                  لینکدین
                </NavLink>
              </li>
              <li>
                <NavLink to="">
                  <img src={YoutubeIcon} alt="youtube" />
                  یوتوب
                </NavLink>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={24} style={{ textAlign: "center", marginTop: "20px" }}>
          <p>
            طراحی شده توسط امیرمهدی سلیمانی | تمامی حقوق وبسایت محفوظ است ©
            {new Date().getFullYear()}
          </p>
        </Col>
      </Row>
    </Footer>
  );
}

export default FooterSection;
