class Observer { // 观察者模式类
    constructor() {
        this.recordSubscribe = {} // 记录订阅信息
    }

    // 订阅方法
    subscribe(eventName, Fn) {
        if (!this.recordSubscribe[eventName]) {
            this.recordSubscribe[eventName] = [];
        }
        this.recordSubscribe[eventName].push(Fn)
    }

    // 发布方法
    public(eventName) {
        if (this.recordSubscribe[eventName]) {
            for (let i = 0; i < this.recordSubscribe[eventName].length; i++) {
                this.recordSubscribe[eventName][i]();
            }
        }
    }

    // 取消订阅方法
    cancel(eventName, FnName) {
        if (this.recordSubscribe[eventName]) {
            for (let i = 0; i < this.recordSubscribe[eventName].length; i++) {
                if (this.recordSubscribe[eventName][i].name === FnName) {
                    this.recordSubscribe[eventName].splice(i, 1);
                }
            }
        }
    }
}

class Drag extends Observer { // 拖拽类
    constructor(obj) {
        super(); // 继承父类构造函数的属性和方法，必须super
        this.obj = obj;
    }

    fn() {
        this.public('public-move'); // 发布一个public-move事件
    }
}

let b = new Drag(box);

b.subscribe('public-down', function downInfo() { // 订阅者订阅public-down事件
    console.log('down');
})