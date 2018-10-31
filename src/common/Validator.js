
/***********************策略对象：封装业务逻辑**************************/

const strategies = {
    required: (value, errorMsg) => { // 不为空
        if (value === '') return errorMsg;
    },
    minLength: (value, length, errorMsg) => { // 限制最小长度
        if (value.length < length) return errorMsg;
    },
    isMobile: (value, errorMsg) => { // 手机号码格式
        if (value && !/(^1[3|5|8][0-9]{9}$)/.test(value)) return errorMsg;
    }
};

/***********************Validator 类**************************/

const Validator = function () {
    this.cache = []; // 保存校验规则
};

// 校验单个规则
/*Validator.prototype.add = function(value, rule, errorMsg) {
    const arr = rule.split(':');    // 把 strategy 和参数分开
    this.cache.push(function() {    // 把验证的步骤用空函数包装起来，并且放入 cache
        let strategy = arr.shift(); // 用户挑选的 strategy
        arr.unshift(value); // 把 input 的 value 添加进参数列表
        arr.push(errorMsg); // 把 errorMsg 添加进参数列表
        return strategies[strategy](...arr);
    });
}; */

// 校验多个规则
Validator.prototype.add = function (value, rules) {
    for (var i = 0, rule; rule = rules[i++];) {
        ((rule) => {
            const strategyArr = rule.strategy.split(':');
            let errorMsg = rule.errorMsg;
            this.cache.push(function () {
                let strategy = strategyArr.shift();
                strategyArr.unshift(value);
                strategyArr.push(errorMsg);
                return strategies[strategy](...strategyArr);
            });
        })(rule)
    }
};

Validator.prototype.start = function () {
    for (let i = 0, validateFunc; validateFunc = this.cache[i++];) {
        let msg = validateFunc();
        if (msg) return msg;
    }
};


export default Validator;