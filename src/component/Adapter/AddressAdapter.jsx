/**
 * 适配器模式
 * 示例1：函数方法适配（地图）
 */

import React, { Component } from 'react';
import { Button } from 'antd';

const googleMap = {
    show: function () {
        return '开始渲染谷歌地图';
    }
};
const baiduMap = {
    show: function () {
        return '开始渲染百度地图';
    }
};

const tenxunMap = {
    display: function () {
        return '开始渲染腾讯地图';
    }
};
const tenxunMapAdapter = {
    show: function() {
        return tenxunMap.display();
    }
};

class AddressAdapter extends Component {
    state = {
        text: '地图渲染'
    };

    renderMap = (map) => {
        if (map.show instanceof Function) {
            const text = map.show();
            this.setState({
                text
            });
        }
    }

    render() {
        return (
            <div>
                <Button className="mr10" onClick={() => this.renderMap(googleMap)}>渲染谷歌地图</Button>
                <Button className="mr10" onClick={() => this.renderMap(baiduMap)}>渲染百度地图</Button>
                <Button onClick={() => this.renderMap(tenxunMapAdapter)}>渲染腾讯地图（采用适配器）</Button>
                <div className="mt10">{this.state.text}</div>
            </div>
        );
    }
}

export default AddressAdapter;