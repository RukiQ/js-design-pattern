/**
 * 模板方法模式
 */

import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import Inherit from './Inherit';
import UnInherit from './UnInherit';

const Template = () => (
    <div>
        <div className="description mb30">
            <h4>模板方法模式是一种只需使用继承就可以实现的非常简单的模式。</h4>
            <p>模板方法模式是为数不多的基于继承的设计模式，但 JavaScript 语言实际上没有提供真正的类式继承，继承是通过对象与对象之间的委托来实现的。
            在好莱坞原则的指导之下，不使用继承，也可以达到和继承一样的效果。</p>
        </div>
        <Tabs defaultActiveKey="1">
            <TabPane tab="继承方式" key="1"><Inherit /></TabPane>
            <TabPane tab="好莱坞原则-非继承" key="2"><UnInherit /></TabPane>
        </Tabs>
    </div>
);

export default Template;