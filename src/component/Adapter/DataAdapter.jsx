/**
 * 适配器模式
 * 示例2：数据格式适配
 */

import React, { Component } from 'react';
import { Button } from 'antd';

var getGuangdongCity = function () {
    var guangdongCity = [
        {
            name: 'shenzhen',
            id: 11,
        }, {
            name: 'guangzhou',
            id: 12,
        }
    ];
    return guangdongCity;
};

// 新的广东省数据
var guangdongCity = {
    shenzhen: 11,
    guangzhou: 12,
    zhuhai: 13
};

var addressAdapter = function (oldAddressfn) {
    var address = {},
        oldAddress = oldAddressfn();
    for (var i = 0, c; c = oldAddress[i++];) {
        address[c.name] = c.id;
    }
    return function () {
        return address;
    }
};

class DataAdapter extends Component {
    state = {
        data: "地图数据"
    };

    renderData = (fn) => {
        this.setState({
            data: JSON.stringify(fn())
        });
    }

    render() {
        return (
            <div>
                <Button className="mr10" onClick={() => this.renderData(getGuangdongCity)}>渲染广东省数据</Button>
                <Button className="mr10" onClick={() => this.renderData(addressAdapter(getGuangdongCity))}>渲染新的广东省数据（采用适配器）</Button>
                <div className="mt10">
                    {this.state.data}
                </div>
            </div>
        );
    }
}

export default DataAdapter;