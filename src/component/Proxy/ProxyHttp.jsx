/**
 * 策略模式——虚拟代理
 * 示例2：合并http请求
 */

import React, { Component } from 'react';
import { Button } from 'antd';

var synchronousFile = function (id) {
    var div = document.createElement('div');
    div.innerText = '开始同步文件， id 为: ' + id;
    document.getElementById('syncFileContent').appendChild(div);
};
var proxySynchronousFile = (function () {
    var cache = [], // 保存一段时间内需要同步的 ID
        timer; // 定时器
    return function (id) {
        cache.push(id);
        if (timer) { // 保证不会覆盖已经启动的定时器
            return;
        }
        timer = setTimeout(function () {
            synchronousFile(cache.join(',')); // 2 秒后向本体发送需要同步的 ID 集合
            clearTimeout(timer); // 清空定时器
            timer = null;
            cache.length = 0; // 清空 ID 集合
        }, 2000);
    }
})();
var checkbox = document.getElementsByTagName('input');

class ProxyHttp extends Component {
    state = {

    };

    handleFileSync = () => {
        for (var i = 0, c; c = checkbox[i++];) {
            c.onclick = function () {
                if (this.checked === true) {
                    proxySynchronousFile(this.id);
                }
            }
        };
    }

    render() {
        return (
            <div>
                <div className="description">
                    通过一个代理函数 proxySynchronousFile 来收集一段时间之内的请求，最后一次性发送给服务器，能大大减轻服务器的压力。
                </div>
                <div className="mb10">
                    勾选开始同步文件：
                </div>
                <div className="mb10" onClick={this.handleFileSync}>
                    <input type="checkbox" id="1"></input>1
                    <input type="checkbox" id="2"></input>2
                    <input type="checkbox" id="3"></input>3
                    <input type="checkbox" id="4"></input>4
                    <input type="checkbox" id="5"></input>5
                    <input type="checkbox" id="6"></input>6
                    <input type="checkbox" id="7"></input>7
                    <input type="checkbox" id="8"></input>8
                    <input type="checkbox" id="9"></input>9
                </div>
                <div id="syncFileContent">同步文件内容：</div>
            </div>
        );
    }
}

export default ProxyHttp;