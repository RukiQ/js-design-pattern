/**
 * 职责链模式
 */

import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import Order from './Order';

const Chain = () => (
    <div>
        <div className="description mb30">
            <h4>职责链模式的定义是：</h4>
            <p>使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系，将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。</p>
        </div>
        <Tabs defaultActiveKey="1">
            <TabPane tab="用 AOP 实现职责链" key="1"><Order /></TabPane>
        </Tabs>
    </div>
);

export default Chain;