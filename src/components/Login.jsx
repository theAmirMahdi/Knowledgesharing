/* eslint-disable react/prop-types */
import { useState } from "react";
import { Form, Input, Button, message } from "antd";

const Login = ({ onClose, onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        message.success("!ورود موفقیت آمیز بود");
        onLoginSuccess(data.token);
        onClose();
      } else {
        const errorData = await response.json();
        message.error(errorData.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      message.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name="username"
        rules={[
          { required: true, message: "لطفا نام کاربری خود را وارد کنید!" },
        ]}
      >
        <Input placeholder="نام کاربری" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "لطفا رمز عبور خود را وارد کنید!" }]}
      >
        <Input.Password placeholder="رمز عبور" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          ورود
        </Button>
        <Button onClick={onClose} style={{ marginLeft: "10px" }}>
          انصراف
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
