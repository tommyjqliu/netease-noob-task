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
#### 无语义修饰元素
- `<span>` `<div>`
#### 超链接
- `<a>`
#### 多媒体元素
- `<img>` `<svg>`
- `<video>` `<audio>`
- `<canvas>`
#### 表单元素 
- `<form>`
- `<fieldset>`
- `<legend>`
- `<label>`
- `<input>`
- `<select>` `<option>`
- `<button>`
#### HTML5语义化元素
- `<header>` `<nav>` `<main>` `<aside>` `<footer>`
#### 列表、表单元素
- `<ul>` `<ol>` `<li>`
- `<dd>` `<dt>`
- `<table>` `<tr>` `<td>`
#### 文本修饰元素
- `<em>` `<strong>` `<i>` `<b>` `<u>`
## CSS
## Javascript