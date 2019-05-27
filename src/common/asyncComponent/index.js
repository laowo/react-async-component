import React, { Component } from 'react';

/**
 * 创建一个异步组件
 * author: 雷佳斌
 */
export default function asyncComponent({ loader, loading }) {
    class AsyncComponent extends Component{
        constructor(props) {
            super(props);

            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            const { default: component } = await loader()

            this.setState({
                component
            });
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.props}/> : loading && loading()
        }
    }

    return AsyncComponent;
}