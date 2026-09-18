# CSS 定位与布局

## CSS定位属性

### 正常流向

又称标准流，文档流。默认**由上而下、由左至右**

在正常流向中，块级元素在其父对象盒子中自上而下排列，行内元素按照由左至右的顺序排列

块元素：独占一行

行内元素：共享一行, 放不下时换行

```css
div{
    width:200px;
    height:80px;
    margin:10px;
    padding:10px;
    border:2px dashed #000;
    text-align:center;
}
#div1{
    background:#ba9578;
    color:#FFF;
}
#div2{
    background:#cef091;
    color:#000;
}
#div3{
    background:#70c17f;
    color:#FFF;
}
```

### 定位偏移属性top、bottom、right、left

```css
top: auto | 长度 | 百分比;
bottom: auto | 长度 | 百分比;
right: auto | 长度 | 百分比;
left: auto | 长度 | 百分比;
```

### 定位属性position

须配合4个定位偏移属性left、right、top、bottom控制偏移量

```css
position : static | relative | absolute | fixed | center | page | sticky;
```

**静态定位static**

遵循正常文档流，是所有元素**默认的定位方式**，此时4个定位偏移属性不会被应用

**相对定位relative**

不脱标，相对自己原来的位置移动

遵循正常文档流，基准位置为其在**正常文档流中的位置**

需要top、bottom、right、left属性配合完成，设定元素相对于原来位置的偏移量

相对定位一开始会按照“正常流向”来定位, 所有的盒子会先定好位置。一旦一个盒子按照正常流向得到自己的位置，它还可以相对该位置而偏移，这就是相对定位

```css
position: relative;
top: 0;
left: 0;
right: 0;
bottom: 0;
```
```html
<style >
div{
    width:200px;
    height:80px;
    margin:10px;
    padding:10px;
    border:2px dashed #000;
    text-align:center;
}
#div1{
    position:static;   /*静态定位*/
    background:#ba9578;
    color:#FFF;
}
#div2{
    position:relative;   /*相对定位*/
    top:60px;
    left:30px;
    background:#cef091;
    color:#000;
}
#div3{
    position:static;   /*静态定位*/
    background:#70c17f;
    color:#FFF;
}
b{
    border:1px solid red;
}
.b2{
    position:relative;   /*相对定位*/
    left:80px;
    top:60px;
}
</style>
<body>            
<div id="div1"><p>div1</p></div>
<div id="div2">
    <p>div2</p>
    <b>b元素1</b>
    <b class="b2">b元素2</b>
    <b>b元素3</b>
</div>
<div id="div3"><p>div3</p></div>        
</body>
```

**绝对定位absolute**

①设置为绝对定位的元素从文档流中删除，元素原先在文档流中所占的位置会取消，不再占用原有的空间。

②绝对定位“相对于”该元素**最近的已经定位的祖先元素**，若不存在已定位的祖先元素，则一直回溯到body元素。

③绝对定位的盒子偏移位置不影响常规文档流中的任何元素

脱标，具备行内块特点，相对**最近**的**已经定位**的**祖先**元素改变位置

父相子绝，子绝父相

```html
<style >
div{
    width:200px;
    height:80px;
    margin:10px;
    padding:10px;
    border:2px dashed #000;
    text-align:center;
}
#div1{
    position:absolute;   /*绝对定位*/
    top:100px;
    right:30px;
    background:#ba9578;
    color:#FFF;
}
#div2{
    position:relative;   /*相对定位*/
    top:60px;
    left:30px;    
    background:#cef091;
    color:#000;
}
#div3{
    position:static;   /*静态定位*/
    background:#70c17f;
    color:#FFF;
}
b{
    border:1px solid red;
}
.b2{
    position:absolute;   /*绝对定位*/
    left:-20px;
    top:120px;
}
</style>
<body>            
<div id="div1"><p>div1</p></div>
<div id="div2">
    <p>div2</p>
    <b>b元素1</b>
    <b class="b2">b元素2</b>
    <b>b元素3</b>
</div>
<div id="div3"><p>div3</p></div>        
</body>
```

**固定定位fixed**

偏移量定位一般以窗口为参考，当出现滚动条时，对象不会随着滚动

元素原有位置空间不保留，对象脱离常规流

固定定位是绝对定位的一个子类，唯一的区别是对于连续介质，固定BOX并不随着文档的滚动而移动，类似于固定的背景图像

脱标，不占位，具备行内块特点，相对浏览器窗口定位

```html
定位模式    是否脱标    显示模式    定位基准
relative    不脱标        保持原有    标准流原有位置
absolute    脱标        行内块        最近的已定位的祖先元素
fixed        脱标        行内块        浏览器窗口
```
```
<style >
body{
    height:700px;
}
header{
    position:fixed;
    width:100%;
    height:100px;
    top:0px;
    right:0px;
    bottom:auto;
    left:0px;
    border:1px dashed black;
    color:#FFF;
    background-color:#5f6062;
    text-align:center;
    line-height:3;    
}
aside{
    position:fixed;
    width:200px;
    height:auto;
    top:100px;
    right:auto;
    bottom:100px;
    left:0px;
    border:1px dashed black;
    background-color:#f6edc6;
    text-align:center;
    line-height:3;        
}
section{
    position:fixed;
    width:auto;
    height:auto;
    top:100px;
    right:0px;
    bottom:100px;
    left:200px;
    border:1px dashed black;
    background-color:#fde8ed;
    text-align:center;
    line-height:3;        
}
footer{
    position:fixed;
    width:100%;
    height:100px;
    top:auto;
    right:0;
    bottom:0;
    left:0px;
    border:1px dashed black;
    background-color:#f0ede4;
    text-align:center;
    line-height:3;        
}
</style>
```

**吸附定位sticky**

当对象在屏幕中正常显示时按常规流排版，当卷动到屏幕外时则表现如fixed

sticky定位屏幕中正常显示时遵循文档流，

当随着滚动条移动可能卷到屏幕外边时，则会表现出fixed的吸附效果

```html
<head>
<style >
div{
    width:200px;
    height:80px;
    margin:10px;
    padding:10px;
    border:2px dashed #000;
    text-align:center;
}
#div1{
    position:static;   /*静态定位*/
    background:#ba9578;
    color:#FFF;
}
#div2{
    position:sticky;   /*吸附定位*/
    top:140px;
    left:100px;
    background:#cef091;
    color:#000;
}
#div3{
    position:static;   /*静态定位*/
    background:#70c17f;
    color:#FFF;
}
</style>
</head>
<body>            
<div id="div1"><p>div1</p></div>
<div id="div2"><p>div2</p></div>
<div id="div3"><p>div3</p></div>        
</body>
```

### 定位层级z-index

控制已经定位元素的显示层级，默认为0，数字越大，层级越高

```css
z-index: auto | 数字;
```
```html
<style >
div{
    position:staic;
    width:200px;
    height:80px;
    margin:10px;
    padding:10px;
    border:2px dashed #000;
    text-align:center;
}
#div1{
    position:absolute;   /*绝对定位*/
    z-index:2;          /*堆叠次序*/
    top:0px;
    left:0px;
    background:#ba9578;
    color:#FFF;
}
#div2{
    position:absolute;   /*绝对定位*/
    z-index:6;          /*堆叠次序*/
    top:70px;
    left:50px;
    background:#cef091;
    color:#000;
}
#div3{
    position:absolute;   /*绝对定位*/
    z-index:4;          /*堆叠次序*/
    top:140px;
    left:100px;
    background:#70c17f;
    color:#FFF;
}
</style>
```

### 居中定位

```css
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
```

## 裁切clip

```css
clip：auto | rect(上裁切偏移量 右裁切偏移量 下裁切偏移量 左裁切偏移量)
```

裁切偏移量可以为auto，表示不裁切

```html
<head>
<style>
div{
    position:absolute;     /*绝对定位*/
    width:180px;
    height:60px;
    font-size:24px;
    line-height:2;
    background:#cef091;
    border:2px dashed #000;
    text-align:center;
}
#div1{
    left:20px;
    top:20px;
}
#div2{
    left:220px;
    top:20px;
    clip:rect(0px auto 50px 40px);    /*裁切*/
}
</style>
</head>
<body>
<div id="div1">未被裁剪的效果</div>
<div id="div2">被裁切后的效果</div>
</body>
```

## CSS布局属性

隐藏元素、浮动效果、元素溢出

### 可见性visibility

```css
visibility: visible | hidden | collapse;
```

visible：元素可见

hidden：元素隐藏，但元素保留其占据的原有空间，影响页面的布局

collapse：主要用来隐藏表格的行或列。隐藏的行或列能够被其它内容使用。对于表格外的其它对象，其作用等同于hidden

```html
<style >
div{
    width:200px;
    height:80px;
    margin:10px;
    padding:10px;
    border:2px dashed #000;
    text-align:center;
}
#div1{
    visibility:visible;    /*可见*/
    background:#ba9578;
    color:#FFF;
}
#div2{
    visibility:hidden;    /*隐藏*/
    background:#cef091;
    color:#000;
}
#div3{
    background:#70c17f;
}
.vc{
    visibility:collapse;    /*隐藏表格行列*/
}
</style>
</head>
<body>            
<div id="div1"><p>显示</p></div>
<div id="div2"><p>隐藏</p></div>
<div id="div3">
<table border="1">
  <tr>
        <td>单元格1</td>
        <td>单元格2</td>
    <td>单元格3</td>
    </tr>
 <tr class="vc">
     <td>单元格4</td>    
         <td>单元格5</td>
    <td>单元格6</td>
    </tr>
    <tr>
        <td  class="vc">单元格7</td>
        <td>单元格8</td>
    <td>单元格9</td>
    </tr>
</table>
</div>        
</body>
```

### 溢出overflow

```css
overflow：visible | hidden | scroll | auto ;
overflow-x：visible | hidden | scroll | auto ;
overflow-y：visible | hidden | scroll | auto ;
```

visible：溢出内容不处理，内容可能会超出容器

hidden：隐藏溢出内容且无滚动条

scroll：始终显示滚动条

auto：body元素和textarea的默认值。是否显示滚动条取决于内容是否溢出

```html
<style >
div{
    width:200px;
    height:100px;
    margin:30px 5px ;
    padding:5px;
    border:1px solid #000;
    text-align:center;
    float:left;
    background:#daf6f7;
}
#div1{
    overflow:visible;    /*溢出内容可见，不做处理*/
}
#div2{
    overflow:hidden;    /*隐藏溢出容器的内容且不出现滚动条*/
}
#div3{
    overflow:scroll;    /*无论溢出与否都有滚动条*/
}
#div4{
    overflow:auto;    /*按需出现滚动条*/
}
</style>
```

### 显示模式display

#### block 以块级元素显示

宽：默认父级元素宽度的100% ，设置宽高属性有效

高：默认0，由内容撑开，设置宽高属性有效

#### line 以行内元素显示

宽高由内容撑开，设置宽高属性无效

#### **line-block 以行内块级元素显示**

一行可以显示多个

宽高：由内容撑开，设置宽高属性有效

```css
display：none | inline | block | list-item | inline-block | table | 
  inline-table | table-caption | table-cell | table-row | table-row-group | 
  table-column | table-column-group | table-footer-group | table-header-group | 
  run-in | box | inline-box| flexbox | inline-flexbox| flex| inline-flex;
```

none：隐藏对象。与visibility属性的hidden值不同，其不为被隐藏的对象保留其物理空间

inline：指定对象为内联元素

block：指定对象为块级元素

list-item：指定对象为列表项目

inline-block：指定对象为内联块元素

table：指定对象作为块元素级的表格。类同于html标签`<table>`

inline-table：指定对象作为内联元素级的表格。类同于html标签`<table>`

table-caption：指定对象作为表格标题。类同于html标签`<caption>`

table-cell：指定对象作为表格单元格。类同于html标签`<td>`

table-row：指定对象作为表格行。类同于html标签`<tr>`

table-row-group：指定对象作为表格行组。类同于html标签`<tbody>`

table-column：指定对象作为表格列。类同于html标签`<col>`

table-column-group：指定对象作为表格列组显示。类同于html标签`<colgroup>`

table-header-group：指定对象作为表格标题组。类同于html标签`<thead>`

table-footer-group：指定对象作为表格脚注组。类同于html标签`<tfoot>`

run-in：根据上下文决定对象是内联对象还是块级对象

box：将对象作为弹性伸缩盒显示（伸缩盒最老版本）

inline-box：将对象作为内联块级弹性伸缩盒显示（伸缩盒最老版本）

flexbox：将对象作为弹性伸缩盒显示（伸缩盒过渡版本）

inline-flexbox：将对象作为内联块级弹性伸缩盒显示（伸缩盒过渡版本）

flex：将对象作为弹性伸缩盒显示（伸缩盒最新版本）

inline-flex：将对象作为内联块级弹性伸缩盒显示（伸缩盒最新版本）

```html
<head>
<style >
body{
    font-size:13px;
    line-height:1.5;
    text-align:center;
}
.table{
    display:table;    /*显示为表格*/
    margin:0 auto;
    border-collapse:collapse;
    border:1px solid #ccc;
}
.table-caption{
    display:table-caption;    /*显示为表格标题*/
    font-size:16px;
    text-align:center;
}
.table-header-group{       /*显示为表格标题行*/
    display:table-header-group;
    background:#eee;
    font-weight:bold;
}
.table-row-group{                   /*显示为表格行组*/
    display:table-row-group;
}
.table-row{
    display:table-row;         /*显示为表格行*/
}
/*表格行组中的表格行鼠标经过时背景色为淡黄色#ffffcc*/
.table-row-group .table-row:hover{     
    background:#ffffcc; 
}
.table-cell{
    display:table-cell;    /*显示为表格单元格*/
    padding:0 5px;
    border:1px solid #ccc;
    width:100px;
}
</style>
</head>
<body>
<div class="table">
    <h2 class="table-caption">学生信息表</h2>
    <div class="table-header-group">
        <ul class="table-row">
            <li class="table-cell">学号</li>
            <li class="table-cell">姓名</li>
            <li class="table-cell">年龄</li>
        </ul>
    </div>
    <div class="table-row-group">
        <ul class="table-row">
            <li class="table-cell">201677001</li>
            <li class="table-cell">袁天一</li>
            <li class="table-cell">19</li>
        </ul>
        <ul class="table-row">
            <li class="table-cell">201677002</li>
            <li class="table-cell">马丽娜</li>
            <li class="table-cell">18</li>
        </ul>
        <ul class="table-row">
            <li class="table-cell">201677003</li>
            <li class="table-cell">侯雨欣</li>
            <li class="table-cell">20</li>
        </ul>
    </div>
</div>
</body>
```

### 浮动float

脱离标准流，具备行内块特点，顶部对齐，一行放满自动换行。

原始目的：实现图文混排效果

```css
float: none | left | right
```

none：设置本元素不浮动

left： 设置本元素浮在左边

right：设置本元素浮在右边

```html
<style >
section{
    width:500px;
    height:120px;
    border:1px solid #000;
    margin:10px;
    background:#f3de83;
}
h1,h2,h3{
    background:#daf6f7;
    margin:10px;
    padding:5px;
    border:1px solid #000;
    font-size:14px;
    text-align:center;
    height:auto;
}
h1{
    width:60px;
}
h2{
    width:100px;
}
h3{
    width:150px;
}
.float_none{
    float:none;          /*不浮动*/
}
.float_left{
    float:left;         /*浮动在左*/
}
.float_right{
    float:right;        /*浮动在右*/
}
</style>
<body>
<!--第一组的3个盒子浮动方式：不浮动-->            
<section>
<h1 class="float_none">H1</h1>
<h2 class="float_none">H2</h2>
<h3 class="float_none">H3</h3>
</section>
<!--第二组的3个盒子浮动方式：前两个浮动在左，第3个浮动在右-->     
<section>
<h1 class="float_left">H1</h1>
<h2 class="float_left">H2</h2>
<h3 class="float_right">H3</h3>
</section>
<!--第三组的3个盒子浮动方式：浮动在右-->     
<section>
<h1 class="float_right">H1</h1>
<h2 class="float_right">H2</h2>
<h3 class="float_right">H3</h3>
</section>
</body>
```

### 清除clear

场景：父元素没有设置高度时，子元素浮动时无法撑开父元素高度

```css
clear: none | left | right | both; 
```

none：允许两边都可以有浮动元素

both：不允许有浮动元素

left：不允许左边有浮动元素

right：不允许右边有浮动元素

**清除浮动方法:**

#### **父元素额外标签法**

在父元素内容的最后添加一个块级元素，设置 CSS 属性 clear: both

#### **单伪元素法**

```css
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}
```

#### **双伪元素法**

```css
.clearfix::before,
.clearfix::after {
    content: "";
    display: table;
}
.clearfix::after {
    clear: both;
}
```

#### **父元素overflow hidden**

```css
overflow: hidden
```
```html
<head>
<style >
section{
    width:500px;
    height:120px;
    border:1px solid #000;
    margin:10px;
    background:#f3de83;
}
h1,h2,h3{
    background:#daf6f7;
    margin:10px;
    padding:5px;
    border:1px solid #000;
    font-size:14px;
    text-align:center;
    height:auto;
}
h1{
    width:60px;
}
h2{
    width:100px;
}
h3{
    width:150px;
}
h4{
    width:200px;
    padding:10px;
    background:#f9aa9d;
    border:2px dashed #000;
    font-size:14px;
    text-align:center;        
}
p{
    font:13px/1.5 宋体;
}
.float_none{
    float:none;          /*不浮动*/
}
.float_left{
    float:left;         /*浮动在左*/
}
.float_right{
    float:right;        /*浮动在右*/
}
.clear_both{               /*清除两侧浮动*/
    clear:both;
}
</style>
</head>
<body>
<!--第一组的4个盒子浮动方式：前两个浮动在左，第3个浮动在右，第4个不浮动-->     
<section>
<h1 class="float_left">H1左浮动</h1>
<h2 class="float_left">H2左浮动</h2>
<h3 class="float_right">H3右浮动</h3>
<h4 class="float_none">H4不浮动</h4>
</section>
<!--第二组的3个盒子浮动方式：前两个浮动在左，第3个浮动在右，段落不浮动-->     
<section>
<h1 class="float_left">H1左浮动</h1>
<h2 class="float_left">H2左浮动</h2>
<h3 class="float_right">H3右浮动</h3>
<p>段落文字，不浮动，不清除浮动时效果。段落文字，不浮动，不清除浮动时效果。段落文字，不浮动，不清除浮动时效果。段落文字，不浮动，不清除浮动时效果。</p>
</section>
<!--第三组的4个盒子浮动方式：前两个浮动在左，第3个浮动在右，第4个不浮动且不允许两侧浮动-->     
<section>
<h1 class="float_left">H1左浮动</h1>
<h2 class="float_left">H2左浮动</h2>
<h3 class="float_right">H3右浮动</h3>
<h4 class="float_none clear_both">H4不浮动，清除两侧浮动</h4>
</section>
<!--第四组的3个盒子浮动方式：前两个浮动在左，第3个浮动在右，段落清除浮动--> 
<section>
<h1 class="float_left">H1左浮动</h1>
<h2 class="float_left">H2左浮动</h2>
<h3 class="float_right">H3右浮动</h3>
<p class="clear_both">段落文字，不浮动，除浮左右两侧动时效果。段落文字，不浮动，除浮左右两侧动时效果。段落文字，不浮动，除浮左右两侧动时效果。段落文字，不浮动，除浮左右两侧动时效果。</p>
</section>
</body>
```

案例设计

## CSS代码规范

按照以下顺序书写：

1.布局与定位（文档流或位置）

2.盒模型

3.视觉效果（颜色/背景/边框）

4.文字与样式

5.交互与动画

## 网页布局

### DIV+CSS布局

即BOX+CSS布局

HTML5新增：`<header>、<footer>、<nav>、<aside>、<section>`

### DIV+CSS分块方法

布局案例：

![img](http://www.kdocs.cn/api/v3/office/copy/UzZLMWN1eGNxd0huR2FYVVBqM05pMFd1bDhJMXpYdU5JbmlBbTd5SC81UkhkNElvcUpPZjEzaG1ReEk1N1M5R3k4elBpWnRJL3FmVzlTSjJyOWhsY3hlaEZBcnYyOVA3VnlKN29HWEZ3Sm45ZUh3akppS2FqWDRsZiszdXRmakZCcXRHS0FqRFFaUTBwSVlMSStwNUk1UGpKanBsUisrckFRZG0xbW5kNGNCNDRxbUFqL1d6VG5Bdlk3eEpiaTRtenhzZ2EzcmlnN0J5K2FZVitTNzVOSlEvWnExQjhZQStOQ04zcE44U0tPNklVUzVlcDdCcEtMSitRM2JqRWFMUzVOLzhPN1pMVmVNPQ==/attach/object/VFWORUI4AAABE?)

步骤１：将页面用div分块，确定布局类型，分为几个div块

步骤２：设计各分块位置

![img](http://www.kdocs.cn/api/v3/office/copy/UzZLMWN1eGNxd0huR2FYVVBqM05pMFd1bDhJMXpYdU5JbmlBbTd5SC81UkhkNElvcUpPZjEzaG1ReEk1N1M5R3k4elBpWnRJL3FmVzlTSjJyOWhsY3hlaEZBcnYyOVA3VnlKN29HWEZ3Sm45ZUh3akppS2FqWDRsZiszdXRmakZCcXRHS0FqRFFaUTBwSVlMSStwNUk1UGpKanBsUisrckFRZG0xbW5kNGNCNDRxbUFqL1d6VG5Bdlk3eEpiaTRtenhzZ2EzcmlnN0J5K2FZVitTNzVOSlEvWnExQjhZQStOQ04zcE44U0tPNklVUzVlcDdCcEtMSitRM2JqRWFMUzVOLzhPN1pMVmVNPQ==/attach/object/L736RUI4ACQEG?)

步骤3：分块代码实现

步骤4：设计各分块细节

## 弹性布局Flex

[Flex 布局教程：语法篇 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

弹性容器属性

主轴、横轴、水平轴：默认左端为start，右端为end

侧轴、竖轴、垂直轴：默认顶端为start，底端为end

```css
/* 弹性布局 */
display: flex; 
/* 水平对齐、主轴对齐 */
justify-content: flex-start | flex-end | center | space-between | space-around;
/* 垂直对齐、侧轴对齐 */
align-items: flex-start | flex-end | center | baseline | stretch; 
/* 主轴方向 */
flex-direction: row | row-reverse | column | column-reverse;
/* 是否换行 */
flex-wrap: nowrap | wrap | wrap-reverse;
/* 复合属性：主轴方向+是否换行 */
flex-flow: <flex-direction> <flex-wrap>;
/* 多根轴线(多行)的对齐方式 */
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
```

弹性盒子属性，弹性盒子默认宽度自适应，高度100%，可指定宽高

```css
/* 排列顺序 */
order: 0;
/* 放大比例 */
flex-grow: 0;
/* 缩小比例 */
flex-shrink: 1;
/* 子项大小 */
flex-basis: auto | 像素;
/* 复合属性 */
flex: none | (flex-grow  flex-shrink  flex-basis);
/* 子项对齐方式 */
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

## 设计超链接样式

超链接相关伪类

| :link    | 超链接样式             |
| -------- | ---------------------- |
| :visited | 已访问过的超链接样式   |
| :hover   | 鼠标悬停时的超链接样式 |
| :active  | 超链接激活状态时的样式 |

### 按钮式超链接

图片按钮不利于SEO优化

使用a标签制作菜单

![img](http://www.kdocs.cn/api/v3/office/copy/UzZLMWN1eGNxd0huR2FYVVBqM05pMFd1bDhJMXpYdU5JbmlBbTd5SC81UkhkNElvcUpPZjEzaG1ReEk1N1M5R3k4elBpWnRJL3FmVzlTSjJyOWhsY3hlaEZBcnYyOVA3VnlKN29HWEZ3Sm45ZUh3akppS2FqWDRsZiszdXRmakZCcXRHS0FqRFFaUTBwSVlMSStwNUk1UGpKanBsUisrckFRZG0xbW5kNGNCNDRxbUFqL1d6VG5Bdlk3eEpiaTRtenhzZ2EzcmlnN0J5K2FZVitTNzVOSlEvWnExQjhZQStOQ04zcE44U0tPNklVUzVlcDdCcEtMSitRM2JqRWFMUzVOLzhPN1pMVmVNPQ==/attach/object/LF4OVUI4ABAEY?)

### 使用列表制作菜单

通过设置list-style-type: none

**垂直菜单**

![img](http://www.kdocs.cn/api/v3/office/copy/UzZLMWN1eGNxd0huR2FYVVBqM05pMFd1bDhJMXpYdU5JbmlBbTd5SC81UkhkNElvcUpPZjEzaG1ReEk1N1M5R3k4elBpWnRJL3FmVzlTSjJyOWhsY3hlaEZBcnYyOVA3VnlKN29HWEZ3Sm45ZUh3akppS2FqWDRsZiszdXRmakZCcXRHS0FqRFFaUTBwSVlMSStwNUk1UGpKanBsUisrckFRZG0xbW5kNGNCNDRxbUFqL1d6VG5Bdlk3eEpiaTRtenhzZ2EzcmlnN0J5K2FZVitTNzVOSlEvWnExQjhZQStOQ04zcE44U0tPNklVUzVlcDdCcEtMSitRM2JqRWFMUzVOLzhPN1pMVmVNPQ==/attach/object/TMHOXUI4ABAGS?)

**水平菜单**

![img](http://www.kdocs.cn/api/v3/office/copy/UzZLMWN1eGNxd0huR2FYVVBqM05pMFd1bDhJMXpYdU5JbmlBbTd5SC81UkhkNElvcUpPZjEzaG1ReEk1N1M5R3k4elBpWnRJL3FmVzlTSjJyOWhsY3hlaEZBcnYyOVA3VnlKN29HWEZ3Sm45ZUh3akppS2FqWDRsZiszdXRmakZCcXRHS0FqRFFaUTBwSVlMSStwNUk1UGpKanBsUisrckFRZG0xbW5kNGNCNDRxbUFqL1d6VG5Bdlk3eEpiaTRtenhzZ2EzcmlnN0J5K2FZVitTNzVOSlEvWnExQjhZQStOQ04zcE44U0tPNklVUzVlcDdCcEtMSitRM2JqRWFMUzVOLzhPN1pMVmVNPQ==/attach/object/JI36XUI4ADABY?)

## 修饰属性

```css
/*垂直对齐 */
vertical-align: baseline|top|middle|bottom;

/* 过渡 */ 
transition：[哪个属性]  [需要几秒];

/* 透明度*/ 
opacity: 0-1;

/*光标类型*/ 
cursor: default | pointer | text |move
```

## 版式布局

基本布局：单列布局、两列布局、三列布局、通栏布局

### 版心和布局流程

“版心”是指网页中主体内容所在的区域，常见的宽度值为960px、980px和1000px等。

布局时通常要遵守一定的布局流程：

（1）确定页面的版心。

（2）分析页面中的行模块，分析每个行模块中的列模块。

（3）通过DIV+CSS布局来控制各个模块的样式。

### 单列布局

最原始最基础的布局

![img](http://www.kdocs.cn/api/v3/office/copy/UzZLMWN1eGNxd0huR2FYVVBqM05pMFd1bDhJMXpYdU5JbmlBbTd5SC81UkhkNElvcUpPZjEzaG1ReEk1N1M5R3k4elBpWnRJL3FmVzlTSjJyOWhsY3hlaEZBcnYyOVA3VnlKN29HWEZ3Sm45ZUh3akppS2FqWDRsZiszdXRmakZCcXRHS0FqRFFaUTBwSVlMSStwNUk1UGpKanBsUisrckFRZG0xbW5kNGNCNDRxbUFqL1d6VG5Bdlk3eEpiaTRtenhzZ2EzcmlnN0J5K2FZVitTNzVOSlEvWnExQjhZQStOQ04zcE44U0tPNklVUzVlcDdCcEtMSitRM2JqRWFMUzVOLzhPN1pMVmVNPQ==/attach/object/JSH6ZUI4ADQAU?)

```html

<html>
<head>
  <title>单列布局版式示意</title>
  <link href="css14-7.css"  rel="stylesheet"/>
</head>
<body>
<div id="container">                 <!--全局父div-->
  <div id="top">页眉#top</div>
  <div id="navi">导航#navi</div>
  <div id="focus">焦点#focus</div>
  <div id="main">主内容#main</div>
  <div id="foot">页脚#foot</div>
</div>
<style>
  /*设置body元素样式*/
  body {
    margin: 0px;
    text-align: center;
    font: 20px/2 微软雅黑, 黑体, 宋体;
  }

  div {
    border: 1px solid #000;
    margin: 5px;
  }

  #container { /*外层父div样式*/
    margin: 0 auto;
    width: 980px;
  }

  #top {
    height: 90px;
  }

  #navi {
    height: 40px;
  }

  #focus {
    height: 210px;
  }

  #main {
    height: 200px;
  }

  #foot {
    height: 80px;
  }
</style>
</body>
</html>
```

### 两列布局

![img](http://www.kdocs.cn/api/v3/office/copy/UzZLMWN1eGNxd0huR2FYVVBqM05pMFd1bDhJMXpYdU5JbmlBbTd5SC81UkhkNElvcUpPZjEzaG1ReEk1N1M5R3k4elBpWnRJL3FmVzlTSjJyOWhsY3hlaEZBcnYyOVA3VnlKN29HWEZ3Sm45ZUh3akppS2FqWDRsZiszdXRmakZCcXRHS0FqRFFaUTBwSVlMSStwNUk1UGpKanBsUisrckFRZG0xbW5kNGNCNDRxbUFqL1d6VG5Bdlk3eEpiaTRtenhzZ2EzcmlnN0J5K2FZVitTNzVOSlEvWnExQjhZQStOQ04zcE44U0tPNklVUzVlcDdCcEtMSitRM2JqRWFMUzVOLzhPN1pMVmVNPQ==/attach/object/OEHO3UI4ADQG4?)

```html

<html>
<head>
  <title>两列布局</title>
  <link href="css14-9.css" rel="stylesheet" >
</head>
<body>
<div id="container">
  <div id="top">页眉#top</div>
  <div id="navi">水平导航栏#navi</div>
  <div id="main">
    <div id="left">左侧导航栏#left</div>
    <div id="right">右侧内容#right</div>
  </div>
  <div id="foot">页脚#foot</div>
</div>
<style>

  body {
    margin: 0px;
    text-align: center;
    font: 20px/2 微软雅黑, 黑体, 宋体;
  }

  div {
    border: 1px solid #000;
    margin: 9px;
  }

  #container {
    margin: 0 auto;
    width: 960px;
  }

  #top {
    height: 180px;
  }

  #navi {
    height: 30px;
  }

  #main {
    height: 540px;
  }

  #left {
    float: left;
    width: 200px;
    height: 360px;
  }

  #right {
    float: right;
    width: 700px;
    height: 520px;
  }

  #foot {
    padding: 20px;
  }
</style>
</body>
</html>
```

### **三列布局**

主体内容区分为左、中、右三列

![img](http://www.kdocs.cn/api/v3/office/copy/UzZLMWN1eGNxd0huR2FYVVBqM05pMFd1bDhJMXpYdU5JbmlBbTd5SC81UkhkNElvcUpPZjEzaG1ReEk1N1M5R3k4elBpWnRJL3FmVzlTSjJyOWhsY3hlaEZBcnYyOVA3VnlKN29HWEZ3Sm45ZUh3akppS2FqWDRsZiszdXRmakZCcXRHS0FqRFFaUTBwSVlMSStwNUk1UGpKanBsUisrckFRZG0xbW5kNGNCNDRxbUFqL1d6VG5Bdlk3eEpiaTRtenhzZ2EzcmlnN0J5K2FZVitTNzVOSlEvWnExQjhZQStOQ04zcE44U0tPNklVUzVlcDdCcEtMSitRM2JqRWFMUzVOLzhPN1pMVmVNPQ==/attach/object/XJ463UI4ABQCS?)

```html

<html>
<head>
  <title>三列布局</title>
  <link href="css14-11.css" rel="stylesheet" />
</head>
<body>
<div id="container">
  <div id="top">页眉#top</div>
  <div id="focus">焦点#focus</div>
  <div id="navi">导航#navi</div>
  <div id="main">
    <div id="left">主内容区左侧列#left</div>
    <div id="center">主内容区中间列#cener</div>
    <div id="right">主内容区右侧列#right</div>
  </div>
  <div id="foot">页脚#foot</div>
</div>
<style>

  /*body的样式*/
  body {
    margin: 0px;
    text-align: center;
    font: 28px/2 微软雅黑, 黑体, 宋体;
  }

  div {
    border: 1px solid #000;
    margin: 5px;
  }

  /*父容器#container的样式*/
  #container {
    margin: 0 auto;
    width: 960px;
    height: 1100px;
  }

  #top {
    height: 100px;
  }

  #focus {
    height: 200px;
  }

  #navi {
    height: 50px;
  }

  #main {
    height: 540px;
  }

  #left, #center, #right { /*主内容区三个子div的样式*/
    float: left;
    width: 290px;
    height: 500px;
    margin: 10px;
  }

  #foot {
    height: 150px;
  }
</style>

</body>
</html>
```

### 通栏布局

将一些水平模块，如页眉、导航、焦点图或页脚等用通栏显示

#### 单列通栏布局

![img](http://www.kdocs.cn/api/v3/office/copy/UzZLMWN1eGNxd0huR2FYVVBqM05pMFd1bDhJMXpYdU5JbmlBbTd5SC81UkhkNElvcUpPZjEzaG1ReEk1N1M5R3k4elBpWnRJL3FmVzlTSjJyOWhsY3hlaEZBcnYyOVA3VnlKN29HWEZ3Sm45ZUh3akppS2FqWDRsZiszdXRmakZCcXRHS0FqRFFaUTBwSVlMSStwNUk1UGpKanBsUisrckFRZG0xbW5kNGNCNDRxbUFqL1d6VG5Bdlk3eEpiaTRtenhzZ2EzcmlnN0J5K2FZVitTNzVOSlEvWnExQjhZQStOQ04zcE44U0tPNklVUzVlcDdCcEtMSitRM2JqRWFMUzVOLzhPN1pMVmVNPQ==/attach/object/GHV63UI4ACQDG?)

```html
<html>
<head>
<title>单列通栏布局版式示意</title>
<link href="css14-13.css"  rel="stylesheet" />
</head>
<body>
<div id="top">页眉#top</div>               
<div id="navi">导航#navi</div>
<div id="focus">焦点#focus</div>
<div id="main">主内容#main</div>
<div id="foot">页脚#foot</div>

<style>

/*设置body元素样式*/
body{
    margin:0px;
    text-align:center;
    font:20px/2 微软雅黑,黑体,宋体;
}
#top{
    width:100%;
    height:90px;
    background:#FF9; 
}
#navi{
    margin:0 auto;
    width:980px; 
    height:40px; 
    background:#F66;
}
#focus{
    margin:0 auto;
    width:980px; 
    height:210px;
    background:#FC9;
}
#main{ 
    margin:0 auto;
    width:980px; 
    height:200px;
    background:#FF3; 
}
#foot{
    width:100%; 
    height:80px; 
    background:#F96;    
}
  
</style>
</body>
</html>
```

#### 三列通栏布局

![img](http://www.kdocs.cn/api/v3/office/copy/UzZLMWN1eGNxd0huR2FYVVBqM05pMFd1bDhJMXpYdU5JbmlBbTd5SC81UkhkNElvcUpPZjEzaG1ReEk1N1M5R3k4elBpWnRJL3FmVzlTSjJyOWhsY3hlaEZBcnYyOVA3VnlKN29HWEZ3Sm45ZUh3akppS2FqWDRsZiszdXRmakZCcXRHS0FqRFFaUTBwSVlMSStwNUk1UGpKanBsUisrckFRZG0xbW5kNGNCNDRxbUFqL1d6VG5Bdlk3eEpiaTRtenhzZ2EzcmlnN0J5K2FZVitTNzVOSlEvWnExQjhZQStOQ04zcE44U0tPNklVUzVlcDdCcEtMSitRM2JqRWFMUzVOLzhPN1pMVmVNPQ==/attach/object/ADJ65UI4AAAC4?)

```css
/*body的样式*/
body{
    margin:0px;
    text-align:center;
    font:28px/2 微软雅黑,黑体,宋体;
}
/*父容器#container的样式*/
#container{
    margin:0;
    width:100%;
    height:1100px;
}
 #top{ 
    height:100px;
    background:#cef091;
}
#focus{
    height:200px;
    background:#70c17f;
}
#navi{
    height:50px;
    background:#cef091; 
}
#main{
    margin:0 auto;
    width:960px; 
    height:540px; 
    background:#7c5e46;
}
#left,#center,#right{     /*主内容区三个子div的样式*/
      float:left;
          width:290px;
          height:500px;
      margin:15px;
      background:#f3de47;
}
#foot{ 
    height:150px;
    background:#cef091;
}
```
