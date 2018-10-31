/**
 * 策略模式
 * 示例2：表单验证
 */

import React, { Component } from 'react';
import { Input, Button } from 'antd';
import Validator from 'common/Validator';

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
        // 校验单个规则
        /* validator.add( username, 'required', '用户名不能为空' );
        validator.add( password, 'minLength:6', '密码长度不能少于 6 位' );
        validator.add( phone, 'isMobile', '手机号码格式不正确' ); */

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

    handleSubmit = () => {
        var errorMsg = this.validataFunc(); // 如果 errorMsg 有确切的返回值，说明未通过校验
        if (errorMsg) {
            alert(errorMsg);
            return false; // 阻止表单提交
        }
        alert('提交成功');
    }

    render() {
        const { username, password, phone } = this.state;

        return (
            <div>
                <div className="description">
                    把校验逻辑都封装成策略对象。
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