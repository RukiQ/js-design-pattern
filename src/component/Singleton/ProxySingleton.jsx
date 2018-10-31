/**
 * 单例模式
 * 示例1：用代理实现单例模式
 */

import React, { Component } from 'react';
import { Button } from 'antd';

var CreateDiv = function (html) {
    this.html = html;
    this.init();
};

CreateDiv.prototype.init = function () {
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.getElementById('createDiv').appendChild(div);
};

// 引入代理类
var ProxySingletonCreateDiv = (function () {
    var instance;
    return function (html) {
        if (!instance) {
            instance = new CreateDiv(html);
        }
        return instance;
    }
})();

class ProxySingleton extends Component {
    state = {
        isEqual: ''
    };

    handleBtnClick = () => {
        var a = new ProxySingletonCreateDiv( 'sven1' );
        var b = new ProxySingletonCreateDiv( 'sven2' );
        console.log('a === b', a === b);
        this.setState({
            isEqual: a === b
        });
    }

    render() {
        return (
            <div>
                <div className="description">
                    <p>本例是缓存代理的应用之一。</p>
                    <p>通过引入代理类的方式，我们 把负责管理单例的逻辑移到了代理类 proxySingletonCreateDiv 中。这样一来， CreateDiv 就变成了一个普通的类，它跟 proxySingletonCreateDiv 组合起来可以达到单例模式的效果。</p>
                </div>
                <Button type="primay" onClick={this.handleBtnClick}>判断实例是否相等</Button>
                <div className="mt10">实例：<div id="createDiv"></div></div>
                <div className="mt10">new ProxySingletonCreateDiv( 'sven1' ) 和 new ProxySingletonCreateDiv( 'sven2' ) 实例是否相等: {this.state.isEqual ? 'true' : ''}</div>
            </div>
        );
    }
}

export default ProxySingleton;