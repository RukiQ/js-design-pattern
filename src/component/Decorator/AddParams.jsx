/**
 * 装饰者模式
 * 示例2：动态添加参数
 */

import React, { Component } from 'react';
import { Button } from 'antd';
import lib from 'common/lib';
import axios from 'axios';

let ajax = function (type, url, param) {
    console.log('发送ajax请求', param);
}

class AddParams extends Component {
    state = {

    };

    handleBtnClick = (e, token) => {
        if(token) {
            ajax = ajax.before((type, url, param) => {
                param.Token = this.getToken();
            });
        }
        ajax( 'get', 'http:// xxx.com/userinfo', { name: 'sven' } );        
    }

    getToken = () => {
        return 'Token';
    }

    getPosts = (e, id) => {
        if(id) {
            axios.post = axios.post.before((url, param) => {
                param.title = 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
            });
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', { userId: 1 })
            .then(res => console.log(res.data))
    }

    render() {
        return (
            <div>
                <div className="mb10">
                    <Button className="mr10" onClick={(e) => this.handleBtnClick(e)}>点击发送Ajax</Button>
                    <Button onClick={(e) => this.handleBtnClick(e, 'token')}>点击发送带有Token的Ajax</Button>
                </div>
                <div>
                    <Button className="mr10" onClick={(e) => this.getPosts(e, '')}>点击获取posts</Button>
                    <Button onClick={(e) => this.getPosts(e, 1)}>点击获取指定title的post</Button>
                </div>
            </div>
        );
    }
}

export default AddParams;