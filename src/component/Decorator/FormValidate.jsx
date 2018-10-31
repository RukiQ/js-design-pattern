/**
 * 装饰者模式
 * 示例3：插件式的表单验证
 */

import React, { Component } from 'react';
import { Input, Button } from 'antd';
import Validator from 'common/Validator';

Function.prototype.before = function (beforefn) {
    var __self = this;
    return function () {
        if (beforefn.apply(this, arguments) === false) {
            // beforefn 返回 false 的情况直接 return，不再执行后面的原函数
            return;
        }
        return __self.apply(this, arguments);
    }
}

class FormValidate extends Component {
    state = {
        username: '',
        password: '',
        phone: ''
    };

    handleInputChange = (e, field) => {
        this.setState({
            [field]: e.target.value
        });
    }

    validataFunc = () => {
        const { username, password, phone } = this.state;
        var validator = new Validator(); // 创建一个 validator 对象
        /***************添加一些校验规则****************/
        // 添加多个规则校验
        validator.add(username, [{
            strategy: 'required',
            errorMsg: '用户名不能为空'
        }]);
        validator.add(password, [{
            strategy: 'required',
            errorMsg: '密码不能为空'
        }, {
            strategy: 'minLength:6',
            errorMsg: '密码长度不能小于 6 位'
        }]);

        validator.add(phone, [{
            strategy: 'isMobile',
            errorMsg: '手机号码格式不正确'
        }]);

        var errorMsg = validator.start(); // 获得校验结果
        return errorMsg; // 返回校验结果
    }

    validata = () => {
        var errorMsg = this.validataFunc(); // 如果 errorMsg 有确切的返回值，说明未通过校验
        if (errorMsg) {
            alert(errorMsg);
            return false; // 阻止表单提交
        }
        
        return true;
    }

    // 校验输入和提交表单的代码完全分离开来，它们不再有任何耦合关系
    handleSubmit = () => {
        let formSubmit = this.formSubmit.before(this.validata); // 提交前添加验证
        formSubmit();
    }

    formSubmit = () => {
        const params = this.state;
        alert('提交成功');
    }

    render() {
        const { username, password, phone } = this.state;

        return (
            <div>
                <div className="description mb20">
                    校验输入和提交表单的代码完全分离开来，它们不再有任何耦合关系
                </div>
                <form action="" id="registerForm" method="post">
                    <div className="mb10">
                        请输入用户名：<Input placeholder="username" style={{ width: '120px' }} value={username} onChange={(e) => this.handleInputChange(e, 'username')} />
                    </div>
                    <div className="mb10">
                        请输入密码：<Input placeholder="password" style={{ width: '120px' }} value={password} onChange={(e) => this.handleInputChange(e, 'password')} />
                    </div>
                    <div className="mb10">
                        请输入手机号码：<Input placeholder="phone" style={{ width: '120px' }} value={phone} onChange={(e) => this.handleInputChange(e, 'phone')} />
                    </div>
                </form>
                <Button type="primary" onClick={this.handleSubmit}>提交</Button>
            </div>
        );
    }
}

export default FormValidate;