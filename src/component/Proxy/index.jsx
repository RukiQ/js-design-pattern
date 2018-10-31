/**
 * 代理模式
 */

import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import ProxyImg from './ProxyImg';
import ProxyMult from './ProxyMult';
import ProxyHttp from './ProxyHttp';

const Strategies = () => (
    <Tabs defaultActiveKey="1">
        <TabPane tab="图片预加载（虚拟代理）" key="1"><ProxyImg /></TabPane>
        <TabPane tab="合并HTTP请求（虚拟代理）" key="2"><ProxyHttp /></TabPane>
        <TabPane tab="计算乘积（缓存代理）" key="3"><ProxyMult /></TabPane>
    </Tabs>
);

export default Strategies;