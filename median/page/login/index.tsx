
import axios from "axios"
import { Card, Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values:{email:string,password:string}) => {
    console.log("Success:", values);
    const token= await axios.post("http://localhost:3001/auth",{
      email:values.email,
      password:values.password
    }).catch(error => {
      message.error(error.response.data.message);
    });
    if(token){
      localStorage.setItem("token",token.data.token);
      window.location.href="/layout";
    }
  };
  const onFinishFailed = (errorInfo:any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    
    <Card title="LOGIN" className="login-container">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
            {
              
              message: "Please enter a valid phone number",
            },
          ]}
        >
          <Input placeholder="请输入账号" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <p/>
          <a className="login-form-forgot" onClick={()=>navigate("/register")}><i>register now!</i></a>
        </Form.Item>
      </Form>
    </Card>
    
  );
};

export default Login;
