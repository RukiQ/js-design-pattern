/**
 * 单例模式
 */

import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import ProxySingleton from './ProxySingleton';
import LazySingleton from './LazySingleton';

const Singleton = () => (
    <div>
        <div className="description mb30">
            <h4>单例模式的核心：确保只有一个实例，并提供全局访问。</h4>
        </div>
        <Tabs defaultActiveKey="1">
            <TabPane tab="用代理实现单例模式" key="1"><ProxySingleton /></TabPane>
            <TabPane tab="惰性单例" key="2"><LazySingleton /></TabPane>
        </Tabs>
    </div>
);

export default Singleton;