/**
 * 策略模式——虚拟代理
 * 示例1：图片预加载
 */

import React, { Component } from 'react';
import { Button } from 'antd';
import LoadingGif from 'asset/img/loading.gif';

class ProxyImg extends Component {
    state = {

    };

    componentDidMount() {
        var myImage = (function () {
            var imgNode = document.createElement('img');
            document.getElementById('imgDiv').appendChild(imgNode);
        
            return function (src) {
                imgNode.src = src;
            }
        })();
        
        /**************** 通过 proxyImage 间接地访问 MyImage，遵循单一职责原则 *****************/
        this.proxyImage = (function () {
            var img = new Image;
            img.onload = function () {
                myImage(this.src);
            }
            return function (src) {
                myImage(LoadingGif);
                img.src = src;
            }
        })();
    }

    handleBtnClick = () => {
        this.proxyImage('https://cdn.pixabay.com/photo/2018/08/19/15/28/anemone-3616880__340.jpg');
    }

    render() {
        return (
            <div>
                <div className="description">
                    在 Web 开发中，图片预加载是一种常用的技术，如果直接给某个 img 标签节点设置 src 属性，
                由于图片过大或者网络不佳，图片的位置往往有段时间会是一片空白。常见的做法是先用一张
                loading 图片占位，然后用异步的方式加载图片，等图片加载好了再把它填充到 img 节点里，这种
                场景就很适合使用虚拟代理。
                </div>
                <Button onClick={this.handleBtnClick} className="mt10 mb20" type="primary">点击加载图片</Button>
                <div id="imgDiv"></div>
            </div>
        );
    }
}

export default ProxyImg;