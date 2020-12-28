import React , {useState, useEffect} from "react";
import { Input, Form, Button, Row, Col, message } from "antd";
import styles from'./index.module.less'

const InputItem = (props) => {
    const { name, rules, ...rest } = props;
    const [timing, setTiming] = useState(false); //是否开始计时
    const handleClickCaptcha = () => {
        message.success('get message successful');
        setTiming(true);
    }
    const [count, setCount] = useState(props.countDown || 60);
    useEffect( () => {
            let interval = 0;
            if (timing) {
                interval = window.setInterval(() => {
                    setCount((preSecond) => {
                        if (preSecond <= 1) {
                            setTiming(false);
                            //clearImmediateInterval(interval)
                            return props.countDown || 60;
                        }
                        return preSecond - 1;
                    })
                }, 1000);
            }
            return () => clearInterval(interval)
        }
    ,[timing])

    if (name === 'captcha') {
        return (
            <Form.Item name={name} rules={rules}>
                <Row>
                    <Col span={12}>
                <Input {...rest} />;
                        </Col>
                    <Col span={6}>
                <Button
                    className={styles.getCaptcha}
                    size={"large"}
                    onClick={handleClickCaptcha}
                >{timing ? '${count}秒' : '获取验证码'}
                </Button>
                </Col>
                    </Row>
            </Form.Item>
        );
    }
    return (
        <Form.Item name={name} rules={rules}>
            <Input {...rest} />
        </Form.Item>
    )
};

export default InputItem;
