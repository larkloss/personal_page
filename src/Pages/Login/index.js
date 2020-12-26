import React from "react";
import { Tabs, Form } from "antd";
import { UserOutlined, LockTwoTone } from "@ant-design/icons";
import styles from "./index.module.less";
import InputItem from "../../components/InputItem";
import SubmitButton from "../../components/SubmitButton";

const { TabPane } = Tabs;

const Login = () => {
    const [form] = Form.useForm();
    const handleFinish = (values) => {
        console.log(values);
    };
    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="账户密码登录" key="1">
                        <InputItem
                            name="username"
                            prefix={<UserOutlined styles={{ color: "#1890ff" }} />}
                            placeholder="用户名"
                            size="large"
                            rules={[{
                                required: true,
                                message: "plz input"
                            }]}
                        />
                        <InputItem
                            name="password"
                            prefix={<LockTwoTone />}
                            placeholder="密码"
                            size="large"
                        />
                    </TabPane>
                    <TabPane tab="手机号登陆" key="2"></TabPane>
                </Tabs>
                <SubmitButton>Login</SubmitButton>
            </div>
        </div>
    );
};

export default Login;
