/**
 * 观察者模式：
 */
var Event = {
    // 通过 on 接口监听事件 EventName
    // 如果事件 eventName 被触发，则执行 callback 回调函数
    on: function (eventName, callback) {
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
    emit: function () {
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

/* // 测试1
Event.on('test', function (result) {
    console.log(result);    // 输出 'hello world'
});

Event.on('test', function () {
    console.log('test');    // 输出 'test'
});

Event.emit('test', 'hello world');


// 测试2
var person1 = {};
var person2 = {};

Object.assign(person1, Event);
Object.assign(person2, Event);

person1.on('call1', function () {
    console.log('person1');
});

person2.on('call2', function () {
    console.log('person2');
});

person1.emit('call1');  // 输出 'person1'
person1.emit('call2');  // 没有输出
person2.emit('call1');  // 没有输出
person2.emit('call2');  // 输出 'person2' */