/**
 * 发布-订阅模式（观察者模式）
 */
import React from 'react';

const Listener = function () {
    return (
        <div>
            <div>参考：<a href="https://www.cnblogs.com/Ruth92/p/5886088.html">设计模式：观察者模式</a></div>
            <pre>{`
                /**
                 * 观察者模式：
                 */
                var Event = {
                    // 通过 on 接口监听事件 EventName
                    // 如果事件 eventName 被触发，则执行 callback 回调函数
                    on: function(eventName, callback) {
                        if (!this.handles) {
                            // this.handles = {};   // 对象引用会引起共享
                            Object.defineProperty(this, 'handles', {
                                value: {},
                                enumerable: false,
                                configurable: true,
                                writable: true
                            })
                        }

                        if (!this.handles[eventName]) {
                            this.handles[eventName] = [];
                        }

                        this.handles[eventName].push(callback);
                    },

                    // 触发事件
                    emit: function() {
                        var eventName = arguments[0],
                            callbackArr = this.handles[eventName],
                            args = arguments[1];

                        if (callbackArr) {
                            for (var i = 0; i < callbackArr.length; i++) {
                                callbackArr[i](args);
                            }
                        }
                    }
                }
            `}</pre>
        </div>
    )
};

export default Listener;