import React, {useState} from "react";
import InputItem from "../../components/InputItem";
import styles from "./index.module.less";
import {Form, Popover, Progress} from "antd";

const Register = () => {
    const [visible, setVisible] = useState(false);
    const [Popover, setPopover] = useState(false);
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

    const checkPassword = (_,value) => {
        const promise = Promise;
        if (!value) {
            setVisible(!!value);
            return promise.reject('plz input passowrd')
        }
        if (!visible) {
            setVisible(!!value);
        }
        setPopover(!Popover);
        if (value && form.getFieldsValue('confirm')) {
            form.validateFields(['confirm']);
        }
    }

    const renderPasswordProgress=()=> {
        const value = form.getFieldsValue('password')
        return value && value.length && (
            <div>
                <Progress
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
                        ]
                        }/>
                </Popover>
                </Form>
                </div>
        </div>
    )
};

export default Register;