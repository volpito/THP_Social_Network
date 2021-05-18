import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.css';

const Formu = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);

    const data = {
      identifier: values.username,
      password: values.password
    };
    
    fetch('http://localhost:1337/auth/local', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then (response => console.log(response));
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default Formu;