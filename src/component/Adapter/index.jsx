/**
 * 适配器模式
 */

import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import AddressAdapter from './AddressAdapter';
import DataAdapter from './DataAdapter';

const Decorator = () => (
    <div>
        <div className="description mb30">
            <h4>适配器模式是一对相对简单的模式。</h4>
            <p>有一些模式跟适配器模式的结构非常相似，比如装饰者模式、代理模式和外观模式，这几种模式都属于“包装模式”，都是由一个对象来包装另一个对象。区别它们的关键仍然是模式的意图。</p>
        </div>
        <Tabs defaultActiveKey="1">
            <TabPane tab="函数方法适配" key="1"><AddressAdapter /></TabPane>
            <TabPane tab="数据格式适配" key="2"><DataAdapter /></TabPane>
        </Tabs>
    </div>
);

export default Decorator;