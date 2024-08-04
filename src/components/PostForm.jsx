/* eslint-disable react/prop-types */
import { Modal, Form, Input, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

const PostForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const handleUploadChange = ({ fileList }) => setFileList(fileList);

  return (
    <Modal
      visible={visible}
      title="Create a new post"
      okText="Submit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            const formData = new FormData();
            formData.append("summary", values.summary); 
            formData.append("details", values.details);
            if (fileList.length > 0) {
              formData.append("image", fileList[0].originFileObj);
            }
            form.resetFields();
            onCreate(formData);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="summary"
          label="Summary"
          rules={[
            {
              required: true,
              message: "Please input the summary of the post!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="details"
          label="Details"
          rules={[
            {
              required: true,
              message: "Please input the details of the post!",
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Image">
          <Upload
            fileList={fileList}
            beforeUpload={() => false} 
            onChange={handleUploadChange}
          >
            <Button icon={<UploadOutlined />}>Select Image</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PostForm;
