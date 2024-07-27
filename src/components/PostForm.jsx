/* eslint-disable react/prop-types */
import { Modal, Form, Input } from "antd";

const PostForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

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
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="title"
          label="Title"
          rules={[
            { required: true, message: "Please input the title of the post!" },
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
      </Form>
    </Modal>
  );
};

export default PostForm;

// import { Form, Input, Modal } from "antd";

// const PostForm = ({ visible, onCreate, onCancel }) => {
//   const [form] = Form.useForm();

//   return (
//     <Modal
//       visible={visible}
//       title="Create a new post"
//       okText="Create"
//       cancelText="Cancel"
//       onCancel={onCancel}
//       onOk={() => {
//         form
//           .validateFields()
//           .then((values) => {
//             form.resetFields();
//             onCreate(values);
//           })
//           .catch((info) => {
//             console.log("Validate Failed:", info);
//           });
//       }}
//     >
//       <Form
//         form={form}
//         layout="vertical"
//         name="form_in_modal"
//         initialValues={{ modifier: "public" }}
//       >
//         <Form.Item
//           name="title"
//           label="Title"
//           rules={[{ required: true, message: "Please input the title!" }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           name="details"
//           label="Details"
//           rules={[{ required: true, message: "Please input the details!" }]}
//         >
//           <Input.TextArea rows={4} />
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// export default PostForm;
