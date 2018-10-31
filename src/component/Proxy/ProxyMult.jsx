/**
 * 策略模式——缓存代理
 * 示例3：计算乘积
 */

import React, { Component } from 'react';
import { InputNumber, Button } from 'antd';

/**************** 计算乘积 *****************/
const mult = function () {
    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
        a = a * arguments[i];
    }
    console.log('新的计算:', a);
    return a;
};

/**************** 创建缓存代理的工厂 *****************/
const createProxyFactory = function (fn) {
    var cache = {};
    return function () {
        var args = Array.prototype.join.call(arguments, ',');
        console.log('cache:', cache);
        if (args in cache) {
            console.log('从缓存中获取：', cache[args]);
            return cache[args];
        }
        return cache[args] = fn.apply(this, arguments);
    }
};

const proxyMult = createProxyFactory( mult );

class ProxyMult extends Component {
    state = {
        num1: 0,
        num2: 0,
        mult: 0
    };

    handleNumberChange = (value, field) => {
        this.setState({
            [`${field}`]: value
        });
    }

    calculateMult = () => {
        const { num1, num2 } = this.state;
        this.setState({
            mult: proxyMult(num1, num2)
        });
    }

    render() {
        const { num1, num2, mult, cache } = this.state;
        return (
            <div>
                <div className="description">
                    缓存代理可以为一些开销大的运算结果提供暂时的存储，在下次运算时，如果传递进来的参数跟之前一致，则可以直接返回前面存储的运算结果。
                </div>
                <div className="mb10">
                    输入数字1：<InputNumber min={0} max={100} defaultValue={num1} onChange={(e) => this.handleNumberChange(e, 'num1')} />
                </div>
                <div className="mb10">
                    输入数字2：<InputNumber min={0} max={100} defaultValue={num2} onChange={(e) => this.handleNumberChange(e, 'num2')} />
                </div>
                <div className="mb10">
                    <Button onClick={this.calculateMult} className="mr10" type="primary">计算乘积</Button>{mult}
                </div>
                <div className="mb10">
                    ☛ 打开控制台，看输出的 cache 结果。
                </div>
                <div className="mb10">
                    🤔 思考：reselect 的原理是不是也利用了这个呢？
                </div>
            </div>
        );
    }
}

export default ProxyMult;