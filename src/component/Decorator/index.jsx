/**
 * 装饰者模式
 */

import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import DataLog from './DataLog';
import AddParams from './AddParams';
import FormValidate from './FormValidate';

const Decorator = () => (
    <div>
        <div className="description mb30">
            <h4>装饰者模式可以动态地给某个对象添加一些额外的职责，而不会影响从这个类中派生的其他对象。</h4>
            <p>装饰者模式能够在不改变对象自身的基础上，在程序运行期间给对象动态地添加职责。</p>
            <p>代理模式和装饰者模式最重要的区别在于它们的意图和设计目的。</p>
        </div>
        <Tabs defaultActiveKey="1">
            <TabPane tab="数据上报" key="1"><DataLog /></TabPane>
            <TabPane tab="动态改变函数参数" key="2"><AddParams /></TabPane>
            <TabPane tab="插件式的表单验证" key="3"><FormValidate /></TabPane>
        </Tabs>
    </div>
);

export default Decorator;