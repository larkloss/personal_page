import React, {useState} from "react";
import {Link} from "react-router-dom";
import InputItem from "../../components/InputItem";
import SubmitButton from "../../components/SubmitButton";
import styles from "./index.module.less";
import {Form, Popover, Progress, Select,Row,Col} from "antd";

const {Option} = Select;

const passwordStatusMap = {
    ok:(
        <div className={styles.success}>
            强度：强
            </div>
    ),
    pass:(
        <div className={styles.normal}>
            强度：中
        </div>
    ),
    poor:(
        <div className={styles.error}>
            强度：太短
        </div>
    ),
}
const passwordProgressMap = {
    ok:'success',
    pass: 'normal',
    poor:'exception',
}

const Register = () => {
    const [visible, setVisible] = useState(false);
    const [popover, setPopover] = useState(false);
    const [prefix, setPrefix] = useState('86');
    const [form] = Form.useForm();
    const handleFinish = (values) => {
        console.log(values);
    };
    const checkConfirm =(_, value) => {
        const promise = Promise;
        if (value && value !== form.getFieldValue('password')) {
            return promise.reject('not match');
        }
        return promise.resolve();
    }
    const getPasswordStatus = () => {
        const value = form.getFieldValue('password');
        if (value && value.length > 9) {
            return 'ok';
        }
        if (value && value.length > 5) {
            return 'pass';
        }
        return 'poor';
    }
    const checkPassword = (_,value) => {
        const promise = Promise;
        if (!value) {
            setVisible(!!value);
            return promise.reject('plz input passowrd')
        }
        if (!visible) {
            setVisible(!!value);
        }
        setPopover(!popover);
        if (value && form.getFieldsValue('confirm')) {
            form.validateFields(['confirm']);
        }
    }

    const renderPasswordProgress=()=> {
        const value = form.getFieldsValue('password')
        const passwordStatus = getPasswordStatus();
        return value && value.length && (
            <div className={styles['progress-${passwordStatus}']}>
                <Progress
                    status={passwordProgressMap[passwordStatus]}
                    storkeWidth={6}
                    percent={value.length * 10 > 100 ? 100 : value.length * 10}
                    showInfo={false}
                />
            </div>
        )
    }
    return (
        <div className={styles.RegisterContainer}>
            <div className={styles.Register}>
                <Form
                    form={form}
                    onFinish={handleFinish}
                >
            <InputItem
                name="mail"
                placeholder="mail"
                rules={[
                    {
                        required:true,
                        message:'请输入邮箱！'
                    },
                    {
                        type:'email',
                        message:'请填写正确的邮箱'
                    },
                ]}
                />
                <Popover
                    content={
                        visible && (
                        <div>
                            {renderPasswordProgress()}
                            <div>
                                请不要使用容易被猜到的密码.
                            </div>
                        </div>
                        )
                    }
                    overlayStyle={{width: 240}}
                    placement={"right"}
                    visivle={visible}
                    >
                <InputItem
                    name="password"
                    type="password"
                    placeholder="至少六位"
                    size="large"
                    rules={[
                        {
                            required:true,
                            message:'请输入密码'
                        }]
                    }/>
                </Popover>
                    <InputItem
                        name="confirm"
                        type="password"
                        placeholder="至少六位"
                        size="large"
                        rules={[
                            {
                                required:true,
                                message:'请输入密码'
                            },
                            {
                                validator:checkPassword
                            }
                        ]}
                    />
                    <Row>
                        <Col span={6}>
                            <Select
                            size="large"
                            value="prefix"
                            onChange={(value) => setPrefix(value)}
                            style={{width:100}}
                            >
                                <Option value="86">+86</Option>
                            </Select>
                            </Col>
                    <InputItem
                        name="mobile"
                        placeholder="手机号"
                        size="large"
                        rules={[
                            {
                                required:true,
                                message:'请输入手机号'
                            },
                            {
                                pattern: /^d{11}$/,
                                message: '手机号格式错误'
                            }
                        ]}
                    />
                    </Row>
                    <InputItem
                        name="captcha"
                    size="large"
                    rule={[
                        {
                            required:true,
                        message:'plz input'
                        }
                        ]}
                        placeholder="验证码"
                    />
                    <Row justify="space-between" align="middle">
                        <Col span={8}>
                            <SubmitButton>注册</SubmitButton>
                            </Col>
                        <Col span={16}>
                            <Link className={styles.login} to="/login">已有账户登录</Link>
                        </Col>
                        </Row>
                </Form>
                </div>
        </div>
    )
};

export default Register;