import React, { Component } from 'react';

// orderType：表示订单类型（定金用户或者普通购买用户），code 的值为 1 的时候是 500 元定金用户，为 2 的时候是 200 元定金用户，为 3 的时候是普通购买用户。
// pay：表示用户是否已经支付定金，值为 true 或者 false, 虽然用户已经下过 500 元定金的订单，但如果他一直没有支付定金，现在只能降级进入普通购买模式。
// stock：表示当前用于普通购买的手机库存数量，已经支付过 500 元或者 200 元定金的用户不受此限制

var order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
        console.log('500 元定金预购，得到 100 优惠券');
    } else {
        return 'nextSuccessor'; // 我不知道下一个节点是谁，反正把请求往后面传递
    }
};
var order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
        console.log('200 元定金预购，得到 50 优惠券');
    } else {
        return 'nextSuccessor'; // 我不知道下一个节点是谁，反正把请求往后面传递
    }
};
var orderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
        console.log('普通购买，无优惠券');
    } else {
        console.log('手机库存不足');
    }
};

Function.prototype.after = function (fn) {
    var self = this;
    return function () {
        var ret = self.apply(this, arguments);
        if (ret === 'nextSuccessor') {
            return fn.apply(this, arguments);
        }
        return ret;
    }
};
var order = order500.after(order200).after(orderNormal);

class Order extends Component {

    componentDidMount() {
        order(1, true, 500); // 输出： 500 元定金预购，得到 100 优惠券
        order(2, true, 500); // 输出： 200 元定金预购，得到 50 优惠券
        order(1, false, 500); // 输出：普通购买，无优惠券
    }

    render() {
        return (
            <div>
                <div className="description">
                    <p>利用 JavaScript 的函数式特性，是一种创建职责链更加方便的方法。</p>
                    <p>用 AOP 来实现职责链既简单又巧妙，但这种把函数叠在一起的方式，同时也叠加了函数的作用域，如果链条太长的话，也会对性能有较大的影响。</p>
                </div>
                <pre>{`
                    // orderType：表示订单类型（定金用户或者普通购买用户），code 的值
                    // 为 1 的时候是 500 元定金用户，为 2 的时候是 200 元定金用户，为 3 的时候是普通购买用户。
                    // pay：表示用户是否已经支付定金，值为 true 或者 false, 虽然用户已经下过 500 元定金的订单，
                    // 但如果他一直没有支付定金，现在只能降级进入普通购买模式。
                    // stock：表示当前用于普通购买的手机库存数量，已经支付过 500 元或者 200 元定金的用户不受此限制

                    var order500 = function (orderType, pay, stock) {
                        if (orderType === 1 && pay === true) {
                                    console.log('500 元定金预购，得到 100 优惠券');
                                } else {
                            return 'nextSuccessor'; // 我不知道下一个节点是谁，反正把请求往后面传递
                        }
                    };
                    var order200 = function (orderType, pay, stock) {
                        if (orderType === 2 && pay === true) {
                                    console.log('200 元定金预购，得到 50 优惠券');
                                } else {
                            return 'nextSuccessor'; // 我不知道下一个节点是谁，反正把请求往后面传递
                        }
                    };
                    var orderNormal = function (orderType, pay, stock) {
                        if (stock > 0) {
                                    console.log('普通购买，无优惠券');
                                } else {
                                    console.log('手机库存不足');
                                }
                    };

                    Function.prototype.after = function (fn) {
                        var self = this;
                        return function () {
                            var ret = self.apply(this, arguments);
                            if (ret === 'nextSuccessor') {
                                return fn.apply(this, arguments);
                            }
                            return ret;
                        }
                    };
                    var order = order500.after(order200).after(orderNormal);
                    order(1, true, 500); // 输出： 500 元定金预购，得到 100 优惠券
                    order(2, true, 500); // 输出： 200 元定金预购，得到 50 优惠券
                    order(1, false, 500); // 输出：普通购买，无优惠券
                `}</pre>
            </div>
        );
    }
}

export default Order;