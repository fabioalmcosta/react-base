import React from 'react';
import { Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { StyledForm } from '../login.styles';

const Component: React.FC = () => {
  const onFinish = (values: any): void => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any): void => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledForm
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <img
        src="https://picsum.photos/350/70"
        alt="Teste"
        width="100%"
        height="70px"
        style={{ marginBottom: '30px' }}
      />
      <Row>
        <Col span={24}>
          <StyledForm.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </StyledForm.Item>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <StyledForm.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </StyledForm.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <StyledForm.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </StyledForm.Item>
        </Col>
        <Col span={12}>
          <a className="login-form-forgot" href="localhost:3000/login">
            Forgot password
          </a>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <StyledForm.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
            Or
            <a href="localhost:3000/login"> register now!</a>
          </StyledForm.Item>
        </Col>
      </Row>
    </StyledForm>
  );
};

export default Component;
