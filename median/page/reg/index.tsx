
import axios from "axios"
import { Card, Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
const Reg = () => {
    const navigate = useNavigate();
    const onFinish = async (values: { username: string,email: string, password: string, confirm_password: string }) => {
        console.log("Success:", values);
        if (values.password !== values.confirm_password) {
            message.error("Passwords do not match");
            return;
        }
        try {
            await axios.post("http://localhost:3001/users", 
                {
                    name:values.username,
                    email: values.email,
                    password: values.password,
                }
            )
        }catch (error) {
            console.log(error);
            message.error("Registration failed");
            return;
        }
        message.success("Registration successful");
        navigate("/");
        return;
    };
    const onFinishFailed = (errorInfo: any) => {
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
                    label="username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input placeholder="Please input your username!" />
                </Form.Item>

                <Form.Item
                    label="email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                    ]}
                >
                    <Input placeholder="Please input your email!" />
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
                    <Input.Password placeholder="Please input your password!" />
                </Form.Item>
                <Form.Item
                    label="Confirm Your Password"
                    name="confirm_password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password placeholder="Please input your password!" />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                    <p />
                </Form.Item>
            </Form>
        </Card>

    );
};

export default Reg;