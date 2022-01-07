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
### 选择器
### 盒子模型的高级用法
### 常用的布局模型
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

### 面向对象的基础概念
### 对象的属性和方法
### Ajax使用
### es6 es7 等esnext