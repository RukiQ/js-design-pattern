博文链接：[JavaScript常见设计模式实践梳理](https://www.jianshu.com/p/db5dd6d188a1)

![JS设计模式应用demo](https://upload-images.jianshu.io/upload_images/1632709-43ee71269ebc1a29.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 1. 单例模式

> 单例模式的核心：确保只有一个实例，并提供全局访问。

- **用代理实现单例模式**：缓存代理的应用之一。
- **惰性单例**：在需要的时候才创建对象实例。

![单例模式](https://upload-images.jianshu.io/upload_images/1632709-33741ce1961d12e0.gif?imageMogr2/auto-orient/strip)

### 2. 策略模式

> 策略模式的定义是：定义一系列算法，把它们一个个封装起来，并且使它们可以相互替换。
将不变的部分和变化的部分隔开是每个设计模式的主题，策略模式也不例外，策略模式的目的就是将算法的使用与算法的实现分离开来。

- **计算薪水**：定义一系列的算法，把它们各自封装成策略类，算法被封装在策略类内部的方法里。
- **表单校验**：把校验逻辑都封装成策略对象。
- **缓动动画**：把每一个动作抽象成一个策略。

![策略模式](https://upload-images.jianshu.io/upload_images/1632709-44fd21044e10353b.gif?imageMogr2/auto-orient/strip)

### 3. 状态模式

**状态模式和策略模式的关系**

状态模式和策略模式像一对双胞胎，它们都封装了一系列的算法或者行为，它们的类图看起来几乎一模一样，但在意图上有很大不同，因此它们是两种迥然不同的模式。

【**相同点**】：它们都有一个上下文、一些策略或者状态类，上下文把请求委托给这些类来执行。

【**区别**】：策略模式中的各个策略类之间是平等又平行的，它们之间没有任何联系，所以客户必须熟知这些策略类的作用，以便客户可以随时主动切换算法；而在状态模式中，状态和状态对应的行为是早已被封装好的，状态之间的切换也早被规定完成，“改变行为”这件事情发生在状态模式内部。对客户来说，并不需要了解这些细节。这正是状态模式的作用所在。

- **电灯换挡**：开、关、灯光强弱等状态。
- **文件上传**：扫描、正在上传、暂停、上传成功、上传失败等状态。
- **组件开发中的状态模式——导航**：显示、隐藏。
- **经典示例——红绿灯**

☛ 参考文章：[JavaScript状态模式及状态机模型](https://mp.weixin.qq.com/s/z3K44EBcEpleJuNFgpRNSA)

### 4. 代理模式

- **图片预加载**（虚拟代理）：用一张 loading 图片占位，然后用异步的方式加载图片，等图片加载好了再把它填充到 img 节点里。
- **合并HTTP请求**（虚拟代理）：通过一个代理函数来收集一段时间之内的请求，最后一次性发送给服务器，能大大减轻服务器的压力。
- **计算乘积**（缓存代理）：缓存代理可以为一些开销大的运算结果提供暂时的存储，在下次运算时，如果传递进来的参数跟之前一致，则可以直接返回前面存储的运算结果。

![代理模式](https://upload-images.jianshu.io/upload_images/1632709-fd5652d8f34f6650.gif?imageMogr2/auto-orient/strip)

### 5. 装饰者模式

> 装饰者模式可以动态地给某个对象添加一些额外的职责，而不会影响从这个类中派生的其他对象。
装饰者模式能够在不改变对象自身的基础上，在程序运行期间给对象动态地添加职责。
代理模式和装饰者模式最重要的区别在于它们的意图和设计目的。

- **数据上报**：分离业务代码和数据统计代码。
- **动态改变函数参数**：如ajax请求。
- **插件式的表单验证**：校验输入和提交表单的代码完全分离开来，它们不再有任何耦合关系。

![装饰者模式](https://upload-images.jianshu.io/upload_images/1632709-6742d35ac2cfaea1.gif?imageMogr2/auto-orient/strip)

### 6. 适配器模式

> 适配器模式是一对相对简单的模式。
有一些模式跟适配器模式的结构非常相似，比如装饰者模式、代理模式和外观模式，这几种模式都属于“包装模式”，都是由一个对象来包装另一个对象。区别它们的关键仍然是模式的意图。

- **函数方法适配**：对不同的方法进行适配。
- **数据格式适配**：通过对不同的数据进行转换达到适配。

![适配器模式](https://upload-images.jianshu.io/upload_images/1632709-a88895ee387ea886.gif?imageMogr2/auto-orient/strip)

### 7. 发布-订阅模式

简单实现：☛ 参考 [设计模式：观察者模式](https://www.cnblogs.com/Ruth92/p/5886088.html)

### 8. 模板方法模式

模板方法模式是一种只需使用继承就可以实现的非常简单的模式。

模板方法模式由两部分结构组成，第一部分是抽象父类，第二部分是具体的实现子类。子类实现中的相同部分被上移到父类中，而将不同的部分留待子类来实现，体现了“泛化”思想。

模板方法模式是基于继承的一种设计模式，父类封装了子类的算法框架和方法的执行顺序，子类继承父类之后，父类通知子类执行这些方法，好莱坞原则很好地诠释了这种设计技巧，即高层组件调用底层组件。

模板方法模式是为数不多的基于继承的设计模式，但 JavaScript 语言实际上没有提供真正的类式继承，继承是通过对象与对象之间的委托来实现的。在好莱坞原则的指导之下，不使用继承，也可以达到和继承一样的效果。

>  “好莱坞原则”
> 在这一原则的指导下，我们允许底层组件将自己挂钩到高层组件中，而高层组件会决定什么时候、以何种方式去使用这些底层组件。好莱坞原则还常常应用于其他模式和场景，例如发布-订阅模式和回调函数。

![模板方法模式](https://upload-images.jianshu.io/upload_images/1632709-1d82d1e9d989196b.gif?imageMogr2/auto-orient/strip)

### 9. 职责链模式

职责链模式的定义是：使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系，将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。

**优点：**

- 请求发送者只需要知道链中的第一个节点，从而弱化了发送者和一组接收者之间的强联系。它解耦了请求发送者和 N 个接收者之间的复杂关系，由于不知道链中的哪个节点可以处理你发出的请求，所以你只需把请求传递给第一个节点即可。
- 使用了职责链模式之后，链中的节点对象可以灵活地拆分重组。
- 职责链模式还有一个优点，那就是可以手动指定起始节点，请求并不是非得从链中的第一个节点开始传递。

**缺点：**

- 首先我们不能保证某个请求一定会被链中的节点处理。在这种情况下，我们可以在链尾增加一个保底的接受者节点来处理这种即将离开链尾的请求。
- 另外，职责链模式使得程序中多了一些节点对象，可能在某一次的请求传递过程中，大部分节点并没有起到实质性的作用，它们的作用仅仅是让请求传递下去，从性能方面考虑，我们要避免过长的职责链带来的性能损耗。

无论是作用域链、原型链，还是 DOM 节点中的事件冒泡，我们都能从中找到职责链模式的影子。职责链模式还可以和组合模式结合在一起，用来连接部件和父部件，或是提高组合对象的效率。

### 更多文章
[JavaScript 中常见设计模式整理](https://juejin.im/post/5afe6430518825428630bc4d)

[JavaScript设计模式](https://juejin.im/post/59df4f74f265da430f311909)
