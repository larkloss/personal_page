import { Spin } from 'antd';
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './index.module.less';
// import Home from '../pages/Home';
// import Login from '../pages/Login';
// import Register from '../pages/Register';

const Home = lazy(() => import('../Pages/Home'));
const Login = lazy(() => import('../Pages/Login'));
const Register = lazy(() => import('../Pages/Register'));

const Router = () => (
    <Suspense
        fallback={
            <div className={styles.spinWrap}>
                <Spin size="large" />
            </div>
        }
    >
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </Switch>
    </Suspense>
);

export default Router;