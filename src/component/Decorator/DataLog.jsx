/**
 * 装饰者模式
 * 示例1：日志上报
 */

import React, { Component } from 'react';
import lib from 'common/lib';

class DataLog extends Component {
    state = {

    };

    handleLoginClick = () => {
        let showLogin = this.showLogin.after(this.log); // 打开登录浮层之后上报数据
        showLogin();
    }

    showLogin = () => {
        console.log('打开登录浮层');
    }

    log = () => {
        console.log('上报标签为: ' + this.login.getAttribute('tag'));
        // (new Image).src = 'http:// xxx.com/report?tag=' + tag; // 真正的上报代码略
    }

    render() {

        return (
            <div>
                <div className="description mb20">
                    <p>分离业务代码和数据统计代码，无论在什么语言中，都是 AOP 的经典应用之一。</p>
                    <p>在项目开发的结尾阶段难免要加上很多统计数据的代码，这些过程可能让我们被迫改动早已封装好的函数。</p>
                </div>
                <p>比如页面中有一个登录 button，点击这个 button 会弹出登录浮层，与此同时要进行数据上报，来统计有多少用户点击了这个登录 button：</p>
                <button tag="login" onClick={this.handleLoginClick} ref={node => this.login = node}>点击打开登录浮层</button>
            </div>
        );
    }
}

export default DataLog;