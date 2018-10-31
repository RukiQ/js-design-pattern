/**
 * 单例模式
 * 示例2：惰性单例
 */

import React, { Component } from 'react';
import { Button } from 'antd';

// 管理单例
var getSingle = function (fn) {
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments));
    }
};

// 创建对象
var createLoginLayer = function () {
    var div = document.createElement('div');
    div.innerHTML = '我是登录浮窗';
    div.style.display = 'none';
    document.getElementById('loginLayer').appendChild(div);
    return div;
};
var createSingleLoginLayer = getSingle(createLoginLayer);

// 创建唯一的 iframe 用于动态加载第三方页面
var createSingleIframe = function () {
    var iframe = document.createElement('iframe');
    document.getElementById('iframeLayer').appendChild(iframe);
    return iframe;
};
var createSingleIframeLayer = getSingle(createSingleIframe);


class LazySingleton extends Component {
    state = {

    };

    handleLoginClick = () => {
        var loginLayer = createSingleLoginLayer();
        loginLayer.style.display = 'block';
    }

    handleIframeClick = () => {
        var iframeLayer = createSingleIframeLayer();
        iframeLayer.src = 'http://baidu.com';
    }

    render() {
        return (
            <div>
                <div className="description">
                    <p>惰性单例指的是在需要的时候才创建对象实例。</p>
                    <p>惰性单例是单例模式的重点，这种技术在实际开发中非常有用，有用的程度可能超出了我们的想象。</p>
                    <p>创建对象和管理单例的职责被分布在两个不同的方法中，这两个方法组合起来才具有单例模式的威力。</p>
                </div>
                <Button className="mr10" type="primay" onClick={this.handleLoginClick}>点击打开登录浮层</Button>
                <Button className="mr10" type="primay" onClick={this.handleIframeClick}>创建唯一的 iframe 用于动态加载第三方页面</Button>
                <div className="mt10">实例：
                    <div id="loginLayer"></div>
                    <div id="iframeLayer"></div>
                </div>
            </div>
        );
    }
}

export default LazySingleton;