import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import asyncComponent from '../common/asyncComponent';
import Header from '../common/header';
const AsyncHome = asyncComponent({
    loader: () => import('../pages/home'),
    loading() {
        return <div>页面加载中...</div>
    }
});
const AsyncLogin = asyncComponent({
    loader: () => import('../pages/login'),
    loading() {
        return <div>页面加载中...</div>
    }
})
const AsyncWrite = asyncComponent({
    loader: () => import('../pages/write'),
    loading() {
        return <div>页面加载中...</div>
    }
})
const AsyncDetail = asyncComponent({
    loader: () => import('../pages/detail'),
    loading() {
        return <div>页面加载中...</div>
    }
})

export default () => {
    return(
        <Router>
            <div>
                <Header />
                <Route path='/' exact component={AsyncHome}></Route>
                <Route path='/login' exact component={AsyncLogin}></Route>
                <Route path='/write' exact component={AsyncWrite}></Route>
                <Route path='/detail/:id' exact component={AsyncDetail}></Route>
            </div>
        </Router>
    )
}