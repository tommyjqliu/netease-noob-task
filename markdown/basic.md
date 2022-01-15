# HTML,CSS and Javascript
## HTML
### 基本语法规范
#### 元素
HTML是一门标记语言，它的最小单位是HTML元素。一个HTML元素通常由开始标签，内容及结束标签组成，如  
```HTML
<p class="normal"> content </p>
```
在这个例子中
1. `<p class="normal">`是开始标签。它标识了`p`标签类型，以及描述了`class="normal"`标签属性。一个元素可以有多个标签属性。建议统一使用双引号括住属性值，从而确保属性值得到正确解析，且使代码更易阅读
2. `content` 是元素内容。元素的内容除了是一般字符串，还可以是另一个HTML元素。也就是说，HTML元素之间可以嵌套。
3. `</p>` 是结束标签。它标识着一个元素的结尾。但凡是双标签元素，必须以结束标签结尾，否则HTML解析不正确。对于单标签元素，无论有无结束标签都可以正确解析。

HTML对大小写不敏感，也就是说标签类型、属性名使用大写与否不会影响解析，大写属性名会统一转换至小写的属性名。一般我们都统一使用小写的标签类型、属性名。

#### HTML文档
典型的HTML文档应该如下
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>我的网页</title>
  </head>
  <body>
    <p class="normal"> content </p>
  </body>
</html>
```
在这个例子中
- `<!DOCTYPE html> `这是一个文档类型声明，不属于HTML标签。在旧HTML标准下，我们在此处声明引用文档类型声明(DTD)来声明我们具体的标准。在HTML5标准下，我们只需如上声明。该声明必须位于文档开始处，否则将导致预期外的渲染效果。
- `<html>`元素。该元素是文档的根元素。必须包含除DOCTYPE声明外的其他HTML内容。
- `<head>`元素。该元素对用户不可见，通常我们在此添加页面的元数据元素。
- `<meta>`元素。这是用于描述文档的元数据元素。元数据通常包括面向搜索引擎的关键字、页面描述、页面标题、页面缩略图、字符编码声明、样式表等。特别之处在于，此处也可以添加http等效属性，如content-type,expires,refresh,set-cookie。按照标准，服务端在发送文档前应当将这些属性添加至http头部以供浏览器使用。
- `<body>`元素。该元素包裹页面的所有可显示内容。我们在此处编写页面的主体。

### 常用元素
#### 基础文本元素
- `<h1><h2><h3>...` `<p>` `<br>`

用于描述最基本的文本内容，标题，段落，换行。
#### 无语义修饰元素
- `<span>` `<div>`

两个内容划分元素，语义上不标识任何特定内容。实践上，常用这两个元素分组其他元素，从而配合class或id定义内容的样式。
#### 超链接
- `<a>`

点击超链接元素，浏览器将产生跳转行为。在web早期这是页面导航的主要手段。
#### 多媒体元素
- `<img>` `<svg>`

图片元素。img显示通常的图片。svg通常用于显示矢量图。
- `<video>` `<audio>`

用于音频、视频的播放。
- `<canvas>`

图形绘制元素。可以通过javascript控制图形的显示。
#### 表单元素 
- `<form>`
- `<fieldset>` `<legend>`
- `<label>`
- `<input>`
- `<select>` `<option>`
- `<button>`

这些元素用于构成表单。
#### HTML5语义化元素
- `<header>` `<nav>` `<main>` `<aside>` `<footer>`

这些元素可以为页面的不同组成部分提供更清晰的语义。
#### 列表、表单元素
- `<ul>` `<ol>` `<li>`
- `<dd>` `<dt>`
- `<table>` `<tr>` `<td>`

这些元素用于描述列表及表格。
#### 文本修饰元素
- `<em>` `<strong>` `<i>` `<b>` `<u>`

这些元素用于语义化的修饰文本。
## CSS
### 基础语法
一个CSS规则集由选择器和声明块组成：
```css
  h1 {
    color: red;
    font-size: 5em;
  }
```
其中，大括号前的'h1'是一个选择器，大括号内的内容是声明块。选择器用于筛选该规则集作用的元素，声明块则用于说明该规则集的效果。声明块内是一个或多个键值对。
### 选择器
#### 基础选择器
元素选择器
```css
h1 { } /* 选择所有的h1元素 */
```
class选择器
```css
.box { } /* 选择所有含box类的元素 */
```
id选择器
```css
#unique { } /* 选择id=unique的元素*/
```
标签属性选择器
```css
[title] { } /* 选择带有title属性的元素*/
[href="https://example.com"] { } /* 选择title属性等于该字符串的元素*/
[class~="example"] { } /* 选择列表属性中包含该字符串的元素*/
```
伪类选择器
```css
:hover { } /* 选择正在hover态的元素*/
```
伪元素选择器
```css
::first-line { } /* 选择所有元素内的第一行伪元素*/
```
#### 选择器运算
或
```css
A, B { } /* 选择A选择器或B选择器*/

h1, .special {
  color: blue;
}
```
与
```css
AB { } /* 选择A选择器且B选择器*/

a[href="https://example.com"] { }
.class1.class2 { }
```
包含
```css
A B { } /* 选择A选择器内的B选择器*/
```
子代
```css
A > B { } /* 选择A选择器子元素的B选择器*/
```
兄弟
```css
A + B { } /* 选择A选择器的后一个兄弟B选择器*/
A ~ B { } /* 选择A选择器的所有兄弟B选择器*/
```
### 盒子模型的高级用法
#### box-sizing
```css
A { 
  box-sizing: border-box; 
} 
/* 将盒子模型的宽高计算设置为border-box*/

html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
/* 将所有元素都设置为border-box*/
```
#### 负margin
负的margin可以将元素“扯”出元素盒从而达到调整位置，调整元素宽高的效果
 ![负margin](https://s3.bmp.ovh/imgs/2022/01/1074da2d84f35353.png)
```css
  .box {
    margin-top: -30px;
    margin-right: 30px;
    margin-bottom: 40px;
    margin-left: 4em;
  }
```
```html
  <div class="container">
    <div class="box"></div>
  </div>
```
### 常用的布局模型
#### flexbox
在flex布局中，一个元素被设为flex容器，它的子元素都会成为flex item进行布局。flex item将会沿着容器的主轴排列，并可以设置为在空间不足时换行。通过以下这些属性来设置flex布局的具体表现。
```css
  /* 这些属性设置在容器上*/
  .container {
    flex-direction: row | row-reverse | column | column-reverse;
    /* flex-direction属性决定主轴的方向（即项目的排列方向）*/
    flex-wrap: nowrap | wrap | wrap-reverse;
    /* flex-wrap属性决定换行行为*/
    flex-flow: <flex-direction> || <flex-wrap>;
    /* flex-flow属性是flex-direction属性和flex-wrap属性的简写形式*/
    justify-content: flex-start | flex-end | center | space-between | space-around;
    /* justify-content属性定义了项目在主轴上的对齐方式*/
    align-items: flex-start | flex-end | center | baseline | stretch;
    /* align-items属性定义项目在cross-axis上如何对齐*/
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    /* align-content属性定义了多根轴线的对齐方式*/
  }
  /* 这些属性设置在flex item上*/
  .item {
    order: <integer>;
    /* order属性定义项目的排列顺序*/
    flex-grow: <number>; /* default 0 */
    /* flex-grow属性定义项目的放大比例*/
    flex-shrink: <number>; /* default 1 */
    /* flex-shrink属性定义了项目的缩小比例*/
    flex-basis: <length> | auto; /* default auto */
    /* flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）*/
    flex: auto | none | <'flex-grow'> || ?<'flex-shrink'> || ?<'flex-basis'>;
    /* flex属性是flex-grow, flex-shrink 和 flex-basis的简写*/
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
    /* align-self属性允许单个item有与其他item不一样的对齐方式，可覆盖align-items属性*/
  }
```
#### positioning
position相关的设置通常用于微调元素位置

例子：
```css
  .positioned {
    position: relative;
    top: 30px;
    left: 30px;
  }
```
- static：默认一般定位
- relative：不脱离文档流，相对于正常定位进行偏移
- absolute：脱离文档流，相对于最近的父级定位元素而定位（如果没有的话则根据html根元素进行定位）
- fixed：根据视窗进行定位
## Javascript
### 基础语法与变量
Javascript的基本单元是语句。以下是一行声明且赋值语句。
```javascript
  var a = 1;
```
通常而言，语句应该以分号结尾。实践上，由于在绝大部分时候，句末不加分号也可以正确无歧义的运行，因此也有项目采用不加分号的规范。具体加不加分号应该遵循项目规范指导。
#### 不使用分号结尾
如果采用这种风格，应注意在以+ - [ ( /为行首的语句前添加分号，避免与上一行产生歧义。
### 数据类型与转换
Javascript中共有七种数据类型
- null
- undefined
- boolean
- number
- string
- object
- symbol (ES6)
#### 基础类型判断
在Javascript中进行类型判断，我们常用typeof操作符。如
```javascript
  > typeof a
  < 'number'
```
除了null，该操作符会返回变量类型的对应字符串。
```javascript
  > typeof null
  < 'object'
```
这是因为在Javascript早期设计中，用一个32bit单元储存变量值。且通过该单元的前三位识别类型，第三位为0的变量识别为对象。而typeof的早期实现中没有考虑输入null的情况。null的低三位同样是0，因而被typeof识别为object。而后期为了前向兼容性没有对此进行修正。对于需要精确判断类型为null的情况，可以采用
```javascript
  > var test = null
  > typeof test === 'object' && !test
  < true
```
#### 对象类型判断
当我们想要判断一个对象是什么类型的对象时，只用typeof操作符就不够了。这时我们可以使用instanceof来判断。
```javascript
obj instanceof Object
``` 
检测Object.prototype是否存在于参数obj的原型链上。
#### 显式类型转换
我们可以调用以下方法来进行显式的类型转换 
- Number(), parseInt(): 转换为数字
- String(): 转换为字符串
- Boolean(): 转换为布尔值
#### 隐式类型转换
在以下情况，Javascript会进行隐式的类型转换
1. 预期为布尔值的情况，隐式转换为布尔值，如
    ```javascript
    if ( !undefined
      && !null
      && !0
      && !NaN
      && !''
    ) {
      console.log('true');
    } // true
    ```
2. 涉及字符串的加法操作，隐式转换为字符串，如
    ```javascript
      '5' + 1 // '51'
      '5' + true // "5true"
      '5' + false // "5false"
      '5' + {} // "5[object Object]"
      '5' + [] // "5"
      '5' + function (){} // "5function (){}"
      '5' + undefined // "5undefined"
      '5' + null // "5null"
    ```
3. 预期为数字的-，/，*操作，隐式转换为数字，如
    ```javascript
      '5' - '2' // 3
      '5' * '2' // 10
      true - 1  // 0
      false - 1 // -1
      '1' - 1   // 0
      '5' * []    // 0
      false / '5' // 0
      'abc' - 1   // NaN
      null + 1 // 1
      undefined + 1 // NaN
    ```
4. == 操作两边类型不相等的情况
  
    这种情况下发生的转换较为复杂，简要的概括是，如果两侧比较的是不同类型的原始类型（包括数字，字符串，布尔值，null和undefined），则统一转换至数字类型进行比较；如果存在对象，则调用对象的ToPrimitive抽象操作转换至原始类型，再回到上一个情况进行比较。
### 分支与循环
#### 条件判断与分支
在Javascript中，通常我们使用if结构或者switch结构产生代码分支，三元运算符则提供了简短的逻辑判断表达式。
- if结构
    ```javascript
      if (m === 0) {
      // ...
      } else if (m === 1) {
        // ...
      } else if (m === 2) {
        // ...
      } else {
        // ...
      }
    ```
- switch结构
    ```javascript
      function eat(fruit) {
        switch (fruit) {
          case "banana":
            // ...
            break;
          case "apple":
            // ...
            break;
          default:
            // ...
        }
      }

      eat('apple')
    ```
    实践上，我们也可以用合适场景下用对象结构来代替switch结构。
    ```javascript
      var eat = {
        banana: () => {
          // ...
        },
        apple: () => {
          // ...
        }
      }

      eat['apple']()
    ```
- 三元运算符 ?:
    ```javascript
      (条件) ? 表达式1 : 表达式2
    ```
#### 循环
javascript中有for循环与while循环两种循环结构。
- while 循环
    ```javascript
      while (条件) {
        语句;
      }
    ```
- for 循环
    ```javascript
      for (初始化表达式; 条件; 递增表达式) {
        语句
      }
    ```
在循环中可以通过break，continue来执行跳转，再配合label来跳转出多层循环。
### 函数、数组
#### 函数的声明
  - function关键字
      ```javascript
        function print(s) {
          console.log(s);
        }
      ```
  - 函数表达式
      ```javascript
        var print = function(s) {
          console.log(s);
        };
      ```
  - ES6箭头函数
      ```javascript
        var print = () => {
          console.log(s);
        };
      ```
  前两种声明方式基本相同，不同之处在于函数表达式存在变量提升的情况，而关键字声明则不会。
  
  比较特别的是ES6新增的箭头函数。该函数的声明是自动绑定外层作用域的，需要留意作用域情况。
#### 函数的作用域
  Javascript产生之初，只有函数作用域，没有块级作用域。函数的作用域在声明之时就已经定下，函数外部无法直接访问定义在函数内部的变量。我们可以通过定义在函数内部的函数间接的访问内部变量。这种机制被称为闭包。
   - 典型闭包
      ```javascript
        function f1() {
          var n = 999;
          function f2() {
            console.log(n);
          }
          return f2;
        }

        var result = f1();
        result(); // 999
      ```
  由于Javascript引擎一般基于可达性进行内存清理，因而f1中的内部变量在运行结束后仍然得到保留。根据闭包机制，我们可以编写带状态的函数。

  闭包的另一个作用是避免变量污染，利用闭包包裹模块，可以避免内部变量污染到全局，仅对外提供我们想暴露的变量。

#### 数组的声明
  ```javascript
    var arr = ['a', 'b', 'c'];
  ```
  本质上数组属于特殊的对象，它的键名是按次序排列的一组整数（0，1，2...）。
#### 数组的遍历
for遍历
  ```javascript
  for(var i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
  ```
数组方法遍历
  ```javascript
  a.forEach(function (item, index, array) {
    console.log(item);
  });
  ```
ES6 迭代器遍历
  ```javascript
  for (let index of ['a', 'b'].keys()) {
    console.log(index);
  }
  // 0
  // 1

  for (let elem of ['a', 'b'].values()) {
    console.log(elem);
  }
  // 'a'
  // 'b'
  // 可省略为 let elem of ['a', 'b']
  for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
  }
  // 0 "a"
  // 1 "b"
  ```

### 对象的属性和方法
#### 属性的类型
在Javascript中对象的每个属性通常有四个内部描述以及getter，setter
- value 属性的值
- writable 属性是否可写
- enumerable 属性是否可枚举
- configurable 属性是否可配置（即修改这些内部描述）
- get 取值函数，取值时被调用
- set 存值函数，存值时被调用


这四个内部描述被储存在属性描述对象中，对于对象的属性a我们可以通过以下方法进行查看，修改
```javascript
Object.getOwnPropertyDescriptor(obj, 'a')
Object.defineProperty(obj, 'a', {
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false,
  get: function() { return 456; }
})
Object.defineProperties(obj, {
  a: {
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false,
  get: function() { return 456; }
  },
  b: {
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false,
  get: function() { return 456; }
  }
}); // 一次修改多个属性
```

#### 历遍对象属性
1. Object.keys()
2. Object.getOwnPropertyNames()
这两个方法都可以得到对象属性键名数组，区别在于getOwnPropertyNames还可以得到不可遍历的属性键。
#### 对象原型相关方法
- Object.getPrototypeOf(obj) 获取对象原型
- Object.setPrototypeOf(obj, protoObj) 设置对象原型
- Object.create(obj) 以obj为原型创建一个对象
- Object.prototype.hasOwnProperty('method') 判断方法是否定义在对象自身（非继承）
### 面向对象的基础概念
事实上，一开始Javascript就并未有意的设计成是一门适合面向对象编程的语言。但程序员们还是通过一些技巧，实现了在Javascript上进行面向对象风格编程。但要谨记，Javascript的底层并没有类的概念，只有原型链。
#### 构造函数
既然没有类，那也就实际上没有类的构造函数。不过Javascript中存在对函数的构造调用。我们可以从这里开始模拟一个类。

典型的构造函数
```javascript
  var Vehicle = function () {
  this.price = 1000;
  // 类的变量属性通常定义在构造函数内，不同的实例可以拥有各自的变量
  };

  Vehicle.prototype.dirve = function() {
    // ...drive
  }
  // 类的变量属性通常定义在构造函数原型上，不同实例可以共享上面的方法
  var v = new Vehicle();
  v.price // 1000
```
通过new关键字对函数进行构造调用，我们产生了一个新的自定义对象。这个对象的属性符合我们在构造函数里对类的定义。
#### 实现继承
寄生组合式继承就是当前最成熟的继承实现
```javaScript
  function SuperClass() {
    // ... 构造函数
  }

  function SubClass() {
    SuperClass.call(this) // 先调用父类构造函数，复制父类属性
  }

  SubClass.prototype = Object.create(SuperClass.prototype) // 用create方法继承父类的方法
  SubClass.prototype.constructor = SubClass // 修正constructor属性
  SubClass.prototype.method1 = function(){} // 开始编写子类方法
```
### Ajax
在web技术之初，网络传输只发生在页面刷新时，极大的限制了网页的表现。Ajax的出现，使得浏览器端获得了异步加载的能力，使得动态网页成为了可能。最初的Ajax是基于浏览器提供的XMLHttpRequest对象实现的。到了现代，浏览器已经普遍提供fetch接口，来代替过时的XMLHttpRequest。

通常，我们用一个XHR对象来象征我们的一次请求。
#### XMLHttpRequest对象同步发送请求
```javascript
  let xhr = new XMLHttpRequest(); 
  xhr.open("get", "example.php", false); 
  // 这个方法接收3个参数：请求类型、请求 URL，请求是否异步
  xhr.send(null); 
  // send参数应为请求体数据，若无需请求体则必须传null以确保兼容性
```
收到响应后，XHR对象的以下属性会被填充上数据。
- responseText：作为响应体返回的文本。 
- responseXML：如果响应的内容类型是"text/xml"或"application/xml"，那就是包含响应数据的 XML DOM 文档。 
- status：响应的 HTTP 状态。 
- statusText：响应的 HTTP 状态描述。

通过以下代码检查对象的响应
```javascript
  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) { 
  alert(xhr.responseText); 
  } else { 
  alert("Request was unsuccessful: " + xhr.status); 
  } 
```

#### XMLHttpRequest对象异步发送请求
在异步请求中，除了修改open参数，请求发送过程与上文基本一致。为了应对异步的情况，XHR对象存在一个readyState 属性，表示当前处在请求/响应过程的哪个阶段。

0. 未初始化（Uninitialized）。尚未调用 open()方法。
1. 已打开（Open）。已调用 open()方法，尚未调用 send()方法。
2. 已发送（Sent）。已调用 send()方法，尚未收到响应。
3. 接收中（Receiving）。已经收到部分响应。
4. 完成（Complete）。已经收到所有响应，可以使用了。

基本上，我们只关心状态4。XHR对象的状态改变会触发readystatechange事件，通过在open之前设定该属性，便能监听到事件。
```javascript
  let xhr = new XMLHttpRequest(); 
  xhr.onreadystatechange = function() { 
    if (xhr.readyState == 4) { 
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) { 
        alert(xhr.responseText); 
      } else { 
        alert("Request was unsuccessful: " + xhr.status); 
      } 
    } 
  }; 
  xhr.open("get", "example.txt", true); 
  xhr.send(null); 
```
#### Fetch接口的使用
fetch接口返回一个Promise对象，通过Promise对象的then操作即可以接受到请求的响应。
```javascript
  fetch('/bar').then((response) => { 
  console.log(response.status); // 200 
  console.log(response.ok); // true 
  }); 
```
### esnext
#### Class
在ES6中，标准终于提供了官方的面向对象编程关键字，尽管底层实现和以前一样还是基于原型链，但使用新关键字编写类更方便更易理解了。
```javascript
class Animal {
  // 构造函数，实例化的时候将会被调用，如果不指定，那么会有一个不带参数的默认构造函数.
  constructor(name,color) {
    this.name = name;
    this.color = color;
  }
  // toString 是原型对象上的属性
  toString() {
    console.log('name:' + this.name + ',color:' + this.color);

  }
}

 var animal = new Animal('dog','white');//实例化Animal
 animal.toString();

 console.log(animal.hasOwnProperty('name')); //true
 console.log(animal.hasOwnProperty('toString')); // false
 console.log(animal.__proto__.hasOwnProperty('toString')); // true

 class Cat extends Animal {
  constructor(action) {
    // 子类必须要在constructor中指定super 函数，否则在新建实例的时候会报错.
    // 如果没有置顶consructor,默认带super函数的constructor将会被添加、
    super('cat','white');
    this.action = action;
  }
  toString() {
    console.log(super.toString());
  }
 }

 var cat = new Cat('catch')
 cat.toString();

 // 实例cat 是 Cat 和 Animal 的实例，和Es5完全一致。
 console.log(cat instanceof Cat); // true
 console.log(cat instanceof Animal); // true
```
#### Module
在ES6中，模块化也被正式的引入了，通过import, export关键字我们可以实现无需其他库帮助的模块化，模块拥有自己的作用域。

通过一行script标签我们就可以开始我们的模块化之旅。
```html
  <script type="module" src="./module.js"></script>
```
这个标签会异步的加载module.js，通过标签的type属性标识，我们可以在这个文件中启用ES6的模块化功能，从而import其他模块。
#### async/await
在以前，我们使用Promise进行连续异步编程时，往往要使用连续的then。
```javascript
  fetch('/api').then(methodA).then(methodB)...
```
这种编写方式不方面理解，阅读性差。async/await的出现改变了这种局面。
```javascript
  async function fetchAPI() {
    let res = await fetch('/api')
    res = await methodA(res)
    res = methodB(res)
    return res
  }
```