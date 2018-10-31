import React, { Component } from 'react';
import { Button } from 'antd';

/********* 父类 *********/
var Beverage = function () { };
Beverage.prototype.boilWater = function () {
    console.log('把水煮沸');
};
Beverage.prototype.brew = function () {
    throw new Error('子类必须重写 brew 方法');
};
Beverage.prototype.pourInCup = function () {
    throw new Error('子类必须重写 pourInCup 方法');
};
Beverage.prototype.addCondiments = function () {
    throw new Error('子类必须重写 addCondiments 方法');
};
Beverage.prototype.customerWantsCondiments = function () {
    return true; // 默认需要调料
};
Beverage.prototype.init = function () {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) { // 如果挂钩返回 true，则需要调料
        this.addCondiments();
    }
};

/********* Coffee *********/
var Coffee = function () { };
Coffee.prototype = new Beverage();

Coffee.prototype.brew = function () {
    console.log('用沸水冲泡咖啡');
};
Coffee.prototype.pourInCup = function () {
    console.log('把咖啡倒进杯子');
};
Coffee.prototype.addCondiments = function () {
    console.log('加糖和牛奶');
};

// 钩子函数
Coffee.prototype.customerWantsCondiments = function () {
    return window.confirm('请问需要调料吗？ ');
};

/********* 茶 *********/
var Tea = function () { };
Tea.prototype = new Beverage();
Tea.prototype.brew = function () {
    console.log('用沸水浸泡茶叶');
};
Tea.prototype.pourInCup = function () {
    console.log('把茶倒进杯子');
};
Tea.prototype.addCondiments = function () {
    console.log('加柠檬');
};


class Inherit extends Component {
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
                    var Beverage = function () { };
                    Beverage.prototype.boilWater = function () {
                        console.log('把水煮沸');
                    };
                    Beverage.prototype.brew = function () {
                        throw new Error('子类必须重写 brew 方法');
                    };
                    Beverage.prototype.pourInCup = function () {
                        throw new Error('子类必须重写 pourInCup 方法');
                    };
                    Beverage.prototype.addCondiments = function () {
                        throw new Error('子类必须重写 addCondiments 方法');
                    };
                    Beverage.prototype.customerWantsCondiments = function () {
                        return true; // 默认需要调料
                    };
                    Beverage.prototype.init = function () {
                        this.boilWater();
                        this.brew();
                        this.pourInCup();
                        if (this.customerWantsCondiments()) { // 如果挂钩返回 true，则需要调料
                            this.addCondiments();
                        }
                    };

                    /********* Coffee *********/
                    var Coffee = function () { };
                    Coffee.prototype = new Beverage();

                    Coffee.prototype.brew = function () {
                        console.log('用沸水冲泡咖啡');
                    };
                    Coffee.prototype.pourInCup = function () {
                        console.log('把咖啡倒进杯子');
                    };
                    Coffee.prototype.addCondiments = function () {
                        console.log('加糖和牛奶');
                    };

                    // 钩子函数
                    Coffee.prototype.customerWantsCondiments = function () {
                        return window.confirm('请问需要调料吗？ ');
                    };

                    /********* 茶 *********/
                    var Tea = function () { };
                    Tea.prototype = new Beverage();
                    Tea.prototype.brew = function () {
                        console.log('用沸水浸泡茶叶');
                    };
                    Tea.prototype.pourInCup = function () {
                        console.log('把茶倒进杯子');
                    };
                    Tea.prototype.addCondiments = function () {
                        console.log('加柠檬');
                    };    
                `}</pre>
            </div>
        );
    }
};

export default Inherit;