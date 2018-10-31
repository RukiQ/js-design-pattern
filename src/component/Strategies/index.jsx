/**
 * 策略模式
 */

import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import CalculateBonus from './CalculateBonus';
import FormValidate from './FormValidate';

const Strategies = () => (
    <div>
        <div className="description mb30">
            <h4>策略模式的定义是：定义一系列算法，把它们一个个封装起来，并且使它们可以相互替换。</h4>
            <p>将不变的部分和变化的部分隔开是每个设计模式的主题，策略模式也不例外，策略模式的目的就是将算法的使用与算法的实现分离开来。</p>
        </div>
        <Tabs defaultActiveKey="1">
            <TabPane tab="计算薪水" key="1"><CalculateBonus /></TabPane>
            <TabPane tab="表单校验" key="2"><FormValidate /></TabPane>
            <TabPane tab="缓动动画（略）" key="3">把每一个动作抽象成一个策略</TabPane>
        </Tabs>
    </div>
);

export default Strategies;