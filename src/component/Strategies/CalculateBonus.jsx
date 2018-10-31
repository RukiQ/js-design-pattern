/**
 * 策略模式
 * 示例1：计算薪水
 */

import React, { Component } from 'react';
import { Radio, InputNumber } from 'antd';
const RadioGroup = Radio.Group;

// 策略模式：封装算法
const strategies = {
    S: salary => salary * 4,
    A: salary => salary * 3,
    B: salary => salary * 2
};

class CalculateBonus extends Component {
    state = {
        level: 'S',
        salary: 0,
        bonus: 0
    };

    calculateBonus = (level, salary) => {
        return strategies[level](salary);
    }

    handleLevelChange = (e) => {
        const level = e.target.value;
        this.setState({
            level,
            bonus: this.calculateBonus(level, this.state.salary)
        });
    }

    handleSalaryChange = (salary) => {
        this.setState({
            salary,
            bonus: this.calculateBonus(this.state.level, salary)
        });
    }

    render() {
        const { level, salary, bonus } = this.state;
        
        return (
            <div>
                <div className="description">
                    定义一系列的算法，把它们各自封装成策略类，算法被封装在策略类内部的方法里。
                </div>
                <div className="mb10">
                    薪水：
                    <InputNumber min={0} max={30000} defaultValue={salary} onChange={this.handleSalaryChange} />
                </div>
                <div className="mb10">
                    绩效：
                    <RadioGroup onChange={this.handleLevelChange} value={level}>
                        <Radio value="S">S</Radio>
                        <Radio value="A">A</Radio>
                        <Radio value="B">B</Radio>
                    </RadioGroup>
                </div>
                <div className="mb10">奖金：{bonus}</div>
            </div>
        );
    }
}

export default CalculateBonus;