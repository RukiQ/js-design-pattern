import React from 'react';
import { Icon } from 'antd';

// components
import Singleton from 'component/Singleton';
import Strategies from 'component/Strategies';
import State from 'component/State';
import ProxyPattern from 'component/Proxy';
import Decorator from 'component/Decorator';
import Adapter from 'component/Adapter';
import Listener from 'component/Listener';
import Template from 'component/Template';
import Chain from 'component/Chain';

const dashRoutes = [
    {
        path: '/home',
        name: 'MY 实验室',
        component: () => <h1>Home Page</h1>
    },
    {
        collapse: true,
        name: 'JS设计模式应用',
        key: 'sub1',
        icon: <Icon type="mail" />,
        children: [
            {
                path: '/singleton',
                name: '单例模式',
                key: 'singleton',
                icon: '',
                component: Singleton
            },
            {
                path: '/strategies',
                name: '策略模式',
                key: 'strategies',
                icon: '',
                component: Strategies
            },
            {
                path: '/state',
                name: '状态模式',
                key: 'state',
                icon: '',
                component: State
            },
            {
                path: '/proxy',
                name: '代理模式',
                key: 'proxy',
                icon: '',
                component: ProxyPattern
            },
            {
                path: '/decorator',
                name: '装饰者模式',
                key: 'decorator',
                icon: '',
                component: Decorator
            },
            {
                path: '/adapter',
                name: '适配器模式',
                key: 'adapter',
                icon: '',
                component: Adapter
            },
            {
                path: '/listener',
                name: '发布-订阅模式',
                key: 'listener',
                icon: '',
                component: Listener
            },
            {
                path: '/inherit',
                name: '模板方法模式',
                key: 'inherit',
                icon: '',
                component: Template
            },
            {
                path: '/chain',
                name: '职责链模式',
                key: 'chain',
                icon: '',
                component: Chain
            }/*, {
                path: '/state',
                name: '中介者模式',
                key: 'state',
                icon: '',
                component: () => <h1>中介者模式</h1>
            }, {
                path: '/state',
                name: '享元模式',
                key: 'state',
                icon: '',
                component: () => <h1>享元模式</h1>
            }, {
                path: '/state',
                name: '组合模式',
                key: 'state',
                icon: '',
                component: () => <h1>组合模式</h1>
            }, {
                path: '/state',
                name: '命令模式',
                key: 'state',
                icon: '',
                component: () => <h1>命令模式</h1>
            }, {
                path: '/state',
                name: '迭代器模式',
                key: 'state',
                icon: '',
                component: () => <h1>迭代器模式</h1>
            }*/
        ]
    },
    /* {
        collapse: true,
        name: 'Nav Two',
        key: 'sub2',
        icon: <Icon type="appstore" />,
        children: [
            {
                path: '/Option6',
                name: 'Option6',
                key: 100,
                icon: '',
                component: () => <h1>Option6</h1>
            },
            {
                collapse: true,
                name: 'Submenu',
                key: 'submenu',
                icon: '',
                children: [
                    {
                        path: '/option4',
                        name: 'Option4',
                        key: 98,
                        icon: '',
                        component: () => <h1>Option4</h1>
                    },
                    {
                        path: '/option5',
                        name: 'Option5',
                        key: 99,
                        icon: '',
                        component: () => <h1>Option5</h1>
                    }
                ]
            }
        ]
    }, */
    { redirect: true, path: '/', to: '/home', name: '' }
];

export default dashRoutes;