import React, { Component } from 'react';
import { Button } from 'antd';

/********* 父类 *********/
var Beverage = function (param) {
    var boilWater = function () {
        console.log('把水煮沸');
    };
    var brew = param.brew || function () {
        throw new Error('必须传递 brew 方法');
    };
    var pourInCup = param.pourInCup || function () {
        throw new Error('必须传递 pourInCup 方法');
    };
    var addCondiments = param.addCondiments || function () {
        throw new Error('必须传递 addCondiments 方法');
    };
    var F = function () { };
    F.prototype.init = function () {
        boilWater();
        brew();
        pourInCup();
        addCondiments();
    };
    return F;
};

/********* Coffee *********/
var Coffee = Beverage({
    brew: function () {
        console.log('用沸水冲泡咖啡');
    },
    pourInCup: function () {
        console.log('把咖啡倒进杯子');
    },
    addCondiments: function () {
        console.log('加糖和牛奶');
    }
});

/********* 茶 *********/
var Tea = Beverage({
    brew: function () {
        console.log('用沸水浸泡茶叶');
    },
    pourInCup: function () {
        console.log('把茶倒进杯子');
    },
    addCondiments: function () {
        console.log('加柠檬');
    }
});


class UnInherit extends Component {
    handleBtnClick = (field) => {
        if (field === 'coffee') {
            var coffee = new Coffee();
            coffee.init();
        } else {
            var tea = new Tea();
            tea.init();
        }
    }

    render() {
        return (
            <div>
                <Button className="mr10" onClick={() => this.handleBtnClick('coffee')}>我要咖啡</Button>
                <Button onClick={() => this.handleBtnClick('tea')}>我要茶</Button>
                <pre>{`
                    /********* 父类 *********/
                    var Beverage = function (param) {
                        var boilWater = function () {
                            console.log('把水煮沸');
                        };
                        var brew = param.brew || function () {
                            throw new Error('必须传递 brew 方法');
                        };
                        var pourInCup = param.pourInCup || function () {
                            throw new Error('必须传递 pourInCup 方法');
                        };
                        var addCondiments = param.addCondiments || function () {
                            throw new Error('必须传递 addCondiments 方法');
                        };
                        var F = function () { };
                        F.prototype.init = function () {
                            boilWater();
                            brew();
                            pourInCup();
                            addCondiments();
                        };
                        return F;
                    };

                    /********* Coffee *********/
                    var Coffee = Beverage({
                        brew: function () {
                            console.log('用沸水冲泡咖啡');
                        },
                        pourInCup: function () {
                            console.log('把咖啡倒进杯子');
                        },
                        addCondiments: function () {
                            console.log('加糖和牛奶');
                        }
                    });

                    /********* 茶 *********/
                    var Tea = Beverage({
                        brew: function () {
                            console.log('用沸水浸泡茶叶');
                        },
                        pourInCup: function () {
                            console.log('把茶倒进杯子');
                        },
                        addCondiments: function () {
                            console.log('加柠檬');
                        }
                    });
                `}</pre>
            </div>
        );
    }
};

export default UnInherit;