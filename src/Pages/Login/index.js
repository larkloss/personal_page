import React, {useState} from "react";
import {Link} from'react-router-dom';
import { Tabs, Form, Checkbox, Row } from "antd";
import { UserOutlined, LockTwoTone,MobileTwoTone, MailTwoTone } from "@ant-design/icons";
import styles from "./index.module.less";
import InputItem from "../../components/InputItem";
import SubmitButton from "../../components/SubmitButton";

const { TabPane } = Tabs;

const Login = () => {
    const [autoLogin, setAutoLogin] = useState(true);
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
                    <TabPane tab="手机号登陆" key="1">
                        <InputItem
                            name="mobile"
                            prefix={<MobileTwoTone styles={{ color: "#1890ff" }} />}
                            placeholder="手机号"
                            size="large"
                            rules={[{
                                required: true,
                                message: "plz input"
                            }]}
                        />
                        <InputItem
                            name="captcha"
                            prefix={<MailTwoTone />}
                            placeholder="验证码"
                            size="large"
                            rules={[{
                                required: true,
                                message: "plz input"
                            }]}
                        />
                    </TabPane>
                </Tabs>
                <Row justify={"space-between"}>
                    <Checkbox
                        checked={autoLogin}
                        onChange={(e)=>setAutoLogin(e.target.checked)}>
                        自动登录
                    </Checkbox>
                    <a href={"#!"}>忘记密码</a>
                    </Row>
                <SubmitButton>Login</SubmitButton>
                <div>
                    <Link className={styles.register} to={"/register"}>注册账户</Link>
                    </div>
            </div>
        </div>
    );
};

export default Login;
