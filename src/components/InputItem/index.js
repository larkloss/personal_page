import React from "react";
import { Input, Form, Button } from "antd";

const InputItem = (props) => {
    const { name, rules, ...rest } = props;
    return (
        <Form.Item name={name} rules={rules}>
            <Input {...rest} />;

        </Form.Item>
    );
    return (
        <Form.Item name={name} rules={rules}>
            <Input {...rest}/>
        </Form.Item>
    )
};

export default InputItem;
