import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Divider, Avatar } from 'antd';
import { ClusterOutlined, ContactsOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Articles from './components/Articles';
import Projects from './components/Projects';
import Applications from './components/Applications';
import  {currentUser, fakeList} from './data.js';
import styles from './index.module.less';

const operationTabList = [{
    key: 'articles',
    tab: (
        <span>
      文章 <span>(8)</span>
    </span>
    )
}, {
    key: 'applications',
    tab: (
        <span>
      应用 <span>(10)</span>
    </span>
    )
}, {
    key: 'projects',
    tab: (
        <span>
      项目 <span>(18)</span>
    </span>
    )
}];

const renderUserInfo = (currentUser) => (
    <div className={styles.detail}>
        <p>
            <ContactsOutlined className={styles.userInfoIcon}/>
            {currentUser.title}
        </p>
        <p>
            <ClusterOutlined className={styles.userInfoIcon}/>
            {currentUser.group}
        </p>
        <p>
            <HomeOutlined className={styles.userInfoIcon}/>
            {currentUser.geographic || {province: {label: ''}}}.province.label
            {currentUser.geographic || {city: {label: ''}}}.city.label
        </p>
    </div>
)

const Home = () => {
    const [tabKey, setTabKey] = useState('articles');
    const onTabChange = (key) => {
        setTabKey(key);
    }
    return (
        <div className={styles.container}>
            <Row gutter={24}>
                <Col lg={7} md={24}>
                    <Card bordered={false} style={{ marginBottom: 24 }}>
                        <div className={styles.avatarHolder}>
                            <img alt="" src={currentUser.avatar}/>
                            <div className={styles.name}>{currentUser.name}</div>
                        </div>
                        {renderUserInfo(currentUser)}
                        <Divider dashed />
                    </Card>
                </Col>
                <Col lg={17} md={24}>
                    <Card
                        bordered={false}
                        tabList={operationTabList}
                        activeTabKey={tabKey}
                        onTabChange={onTabChange}
                    >
                        qwer
                    </Card>
                </Col>
            </Row>
        </div>
    )
};


export default Home;