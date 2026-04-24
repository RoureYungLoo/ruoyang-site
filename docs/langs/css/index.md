# CSS 快速入门

## 样式表

**Cascading Style Sheet**，层叠样式表，级联样式表，简称样式表

语法

```css
selector {
    attr1: value1;
    attr2: value2;
    ...
    attr3: value3
}
```

**样式表分类**

- 行内样式:  style属性
- 内部样式表:  style标签
- 外部样式表
    - 链入外部样式表，link标签
    - 导入外部样式表，import函数

### 行内样式， style属性

inline style，也叫内联样式，写在标签的style属性上

```
<标签名 style="属性1:值1; 属性2:值2; ..."/>
<h1 style="color:red">行内样式1</h1>
<p style="color:blue;">行内样式2</p>
```

### 内部样式表，style标签

写在title标签下面的style标签里面

```html
<head>
    <title>网页标题</title>
    <style >
        选择器1｛
            属性:值;
            ...
        ｝
        选择器2｛
            属性:值;
            ...
        ｝    
        ...
        选择器n｛
            属性:值;
            ...
        ｝
    </style>
</head>
```
```html
<html>
<head>
    <title>内部样式表</title>
    <style >
        body {
            color: #1c3b02; /* 设置前景色 */
        }

        h1 {
            text-align: center; /* 设置对齐方式居中 */
        }

        p {
            line-height: 1.5; /* 设置行高 */
            font-size: 14px; /* 设置字体大小 */
        }

        img {
            width: 300px; /* 设置宽度 */
            float: left; /* 设置浮动在左侧 */
        }
    </style>
</head>
</html>
```

### 外部样式表

**链入外部样式表，link标签**

放在`head`标签内

```html
<head>
    <link href="样式表路径" rel="stylesheet"  />
    <link href="style.css" rel="stylesheet"  />
</head>
```

**导入外部样式表**

放在`style`标签内，import函数

```html
<html>
    <head>
        <style >
        @import("样式表路径");
        @import url("style.css");
        </style>
    </head>
</html>
```

## 选择器

用于选择想要美化的标签。查找HTML标签，用于设置样式。

[CSS 选择器 - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

### 基本选择器

- 基本选择器
    - 标签选择器：`标签名`
    - 类选择器：`.样式类名`
    - ID选择器：`#标签ID属性`
    - 通用选择器：`*`
- 组合选择器
    - 选择器列表：`逗号`
    - 后代选择器：`空格`
    - 子选择器：`>`
    - 相邻选择器: `+`
    - 兄弟选择器: `~`
    - 交集选择器：没有连接符号
- 属性选择器
    - 存在属性匹配：[attr]
    - 精确属性匹配：[attr=]
    - 前缀属性匹配：[attr^=]
    - 后缀属性匹配：[attr$=]
    - 字串属性匹配：[attr*=]
- 伪类选择器
- 伪对象选择器

**标签选择器***

选择所有标签

```css
标签名 {
    属性1:值1;
    属性2:值2;
    ...
}
```

**类选择器(·)**

类选择器针对标签的全局属性class，引用方式为：<标签名 class="类名">

```css
标签名.类名 {
    属性1:值1;
    属性2:值2;
    ...
}

p.text1 { /* 只允许<p>标签引用该样式 */
    color:brown;font-size:14px;
}

*.text2 { /* 所有标签都可引用该样式 */
    color:brown;font-size:14px;
}

.text3{ /* 所有标签都可引用该样式 */
    color:brown;font-size:14px;
}
```

**ID选择器(#)**

ID选择器针对标签的全局属性id，引用方式为：<标签名 id="id名">

```css
标签名#id名{ 
    属性1: 值1;
    属性2: 值2;
...}

p#text1 { /* 只允许<p>标签引用该id */
    color:brown;font-size:14px;
}

*#text2 { /* 所有标签都可引用该id */
    color:brown;font-size:14px;
}

#text3{ /* 所有标签都可引用该id */
    color:brown;font-size:14px;
}
```

**通用选择器(\*)**

匹配网页中的所有元素

### 组合选择器

| 选择器            | 描述                             | 示例             |
| ----------------- | -------------------------------- | ---------------- |
| 多元素选择器`E,F` | 匹配所有`E`元素和`F`元素         | `h1,h2,p { }`    |
| 后代选择器`E F`   | 匹配所有`E`元素的后代元素`F`     | `table b { }`    |
| 子选择器`E>F`     | 匹配所有`E`元素的子元素`F`       | `.test>li>a { }` |
| 相邻选择器`E+F`   | 匹配所有紧邻`E`元素的同级元素`F` | `p+p { }`        |
| 兄弟选择器`E~F`   | 匹配所有`E`元素之后的兄弟元素`F` | `p~p { }`        |

**多元素选择器(, )**

又叫并集选择器

```css
E, F {
    属性1:值1;
    属性2:值2;
    ...
} 

h1, p{ /* h1标签和p标签 的颜色相同 */
    color:#dd0932;
}
```

**后代选择器(空格)**

```css
E F {
    属性1:值1;
    属性2:值2;
} 

table b { /* table标签中的所有b标签 的颜色相同 */
    color:red;
} 
```

**子选择器(>)**

直接后代

```css
E>F { /* 标签F是标签E的直接后代 */
    属性1:值1;
    属性2:值2;
}

div>a {
    color: red;
}
```

**相邻选择器(+)**

必须是紧挨着的标签

```css
E+F { /* 具有相同父级标签且二者紧邻*/
    属性1:值1;
    属性2:值2;
}
p+p{
    color:#fbf95e;
    background-color:#0763c2;
}
```

**兄弟选择器(~)**

```css
E~F { /* 具有相同父级标签即可，无须紧邻*/
    属性1:值1;
    属性2: 值2;
}
p~p{
    color:#fbf95e;
    background-color:#0763c2;
}
```

交集选择器,没有任何连接符

### 伪类选择器`(:)`

[伪类和伪元素 - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)

[伪类 - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

状态选择器，选择处于特定状态的元素

一种特殊的类选择器，是CSS已经定义好的

```css
E:伪类 {
    属性1:值1;
    属性2:值2;
    ...
} 

选择器:元素状态 { 
    属性：属性值;
}
```

常用伪类选择器

| 伪类选择器      | 说明                                 | 示例                |
| --------------- | ------------------------------------ | ------------------- |
| `E:link`        | 匹配未被点击的`E`元素                | `a:link { }`        |
| `E:visited`     | 匹配已被点击的`E`元素                | `a:visited { }`     |
| `E:hover`       | 匹配鼠标悬停其上的`E`元素            | `a:hover { }`       |
| `E:active`      | 匹配被用户激活时的`E`元素            | `a:active { }`      |
| `E:first-child` | 匹配父元素`E`的第一个子元素          | `p:first-child { }` |
| `E:focus`       | 匹配获得当前焦点的`E`元素            |                     |
| `E:enabled`     | 匹配表单中激活的元素                 |                     |
| `E:disabled`    | 匹配表单中禁用的元素                 |                     |
| `E:checked`     | 匹配表单中被选中的单选框和复选框元素 |                     |

超链接伪类选择器遵循 LVHA的顺序

结构伪类选择器，E标签的父标签的所有子标签，不一定是E标签，找不到子标签E则选不中

### 伪元素

行内显示

::before

::after

### 伪对象选择器`(::)`

针对CSS中已经定义好的伪对象使用的选择器.

E:first-child

E:last-child

E:nth-child

```css
E:伪对象 {
    属性1:属性值1;
    属性2:属性2;
} 
```

| 选择器                           | 说明                                          | 示例                                    |
| -------------------------------- | --------------------------------------------- | --------------------------------------- |
| `E:first-letter/E::first-letter` | 针对块元素，匹配对象内的第一个字符            | `p::first-letter{color:red;}`           |
| `E:first-line/E::first-line`     | 针对块元素，匹配对象内的第一行                | `p::first-line{color:red;}`             |
| `E:before/E::before`             | 与content属性一起使用，设置在对象前放置的内容 | `p::before{content:"段落前出现的文字"}` |
| `E:after/E::after`               | 与content属性一起使用，设置在对象后放置的内容 | `p::after{content:"段落后出现的文字"}`  |
| `E::selection`                   | 设置对象被选中时的样式                        | `p::selection{color:red;}`              |

注意，CSS3将伪对象选择器前面的单个冒号(:)修改为***\*双冒号(::)\****用以区别伪类选择器

### 属性选择器([ ])

根据属性匹配元素

**存在属性匹配([attr])**

```css
a[href] {color:brown;}
```

匹配所有带有href属性的a标签

**精确属性匹配([attr=])**

`a[href="``http://www.taobao.com``"] {color:brown;}`

匹配所有href属性值为"`http://www.taobao.com`"的a标签

**前缀匹配([attr^=])**

```css
[id^="user"]{color:brown;}
```
匹配所有id属性以"user"开头的标签

**后缀匹配([attr$=])**

```css
[id$="Name"]{color:brown;}
```

匹配所有id属性以"Name"结尾的标签

**子字符串匹配([attr\*=])**

```css
[id*="test"]{color:brown;}
```

匹配所有id属性中存在"test"的标签

## 颜色 color

color属性设置前景色，background-color属性设置背景色

```css
p {
    color : color_name | 
            HEX | RGB | RGBA | 
            HSL | HSLA | transparent ;
}

HEX：#RRGGBB
RGB：RGB(red, green, blue)
RGBA：RGBA(red, green, blue, alpha)
HSL：HSL(hue, saturation, lightness)
HSLA：HSL(hue, saturation, lightness, alpha)
transparent：该值代表透明色
```
```html
<head>
<style >
    body{
        color:orange;                    /* color_name */
        font-weight:bold;            /*字体加粗*/
        font-size:18px;                  /*字体大小*/ 
    }           
    .hex1{ color:#808000; }                             /* HEX #RRGGBB形式*/
    .hex2{ color:#F0F;}                                      /* HEX,#RGB形式 */
    .rgb1{color:RGB(0,145,153);}                    /* RGB */
    .rgba1{color:RGBA(0,145,153,0.5);}           /* RGBA */
    .rgb2{color:RGB(80%,50%,50%);}                        /* RGB */
    .rgba2{color:RGBA(80%,50%,50%,0.5);}                   /* RGBA */
    .hsl{color:HSL(159,100%,69%);}                       /* HSL */
    .hsla{color:HSLA(159,100%,69%,0.8);}          /* HSLA */
    .trans{color:transparent;}                               /* transparent */
</style>
</head>
```

## 字体 font

[基本文本和字体样式 - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Text_styling/Fundamentals)

| 属性名       | 说明         |
| ------------ | ------------ |
| font-family  | 字型/字体    |
| font-size    | 大小         |
| font-weight  | 粗细         |
| font-style   | 斜体         |
| font-variant | 小型大写字母 |
| font         | 复合属性     |

**font-family**

```css
font-family :字型1,字型2, …… ;
```

**font-size**

```css
font-size:长度 | 绝对尺寸 | 相对尺寸 | 百分比 ;
```

相对长度：px em ex

绝对长度: in cm mm pt pc

绝对尺寸：xx-small x-small small medium large x-large xx-large

相对尺寸：smaller larger，相对于父元素中字体的尺寸

百分比：百分比，相对于父元素中字体的尺寸

```html
<head>
    <title>设置字体尺寸</title>
    <style >
        .fs1{font-size:x-large;}
        .fs2{font-size:medium;}
        .fs3{font-size:14px;}
        .fs4{font-size:12pt;}
        .fs5{font-size:larger;}
        .fs6{font-size:150%;}
    </style>
</head>
```

**font-weight**

```css
font-weight: normal | bold | bolder | lighter | 
    100 | 200 | 300 | 400/normal | 500 | 600 | 700/bold | 800 | 900;
```
```html
<head>
<style >
.fw1{font-weight:100;}
.fw2{font-weight:200;}
.fw3{font-weight:300;}
.fw4{font-weight:400;}
.fw5{font-weight:500;}
.fw6{font-weight:600;}
.fw7{font-weight:700;}
.fw8{font-weight:800;}
.fw9{font-weight:900;}
.fw10{font-weight:normal;}
.fw11{font-weight:bold;}
.fw12{font-weight:bolder;}
.fw13{font-weight:lighter;}
</style>
</head>
```

font-style

```css
font-style: normal | italic | oblique ;
```

italic：字库中有斜体字

oblique：字库中没有斜体字

```html
<style >
.fs1{font-style:normal;}
.fs2{font-style:italic;}
.fs3{font-style:oblique;}
</style>
```

**font-variant**

小型大写字母

```css
font-variant: normal | small-caps ;
```
```html
<style >
    .fv1{font-variant:normal;}
    .fv2{font-variant:small-caps;}
</style>
```

font

```css
font：font-style  font-variant  font-weight  font-size  font-family ;
font: italic normal bold 13px/20px 宋体
```

注意：font-size和font-family必须有，且先后顺序不能调换

同时设置字体大小和行高：大小/行高，例：16px/32px

字体复合属性：`font: 斜体 加粗 字号/行高 字体`，省略的符合属性会使用默认值，注意层叠覆盖问题

```html
<style >
    .font1{ font:13px 宋体;}
    .font2{ font:13px/20px 宋体;}
    .font3{ font:bold 13px/20px 宋体;}
</style>
```

## 文本格式化

| 属性名                | 说明                                 |
| --------------------- | ------------------------------------ |
| line-height           | 控制行高                             |
| text-align            | 控制文本的水平对齐方式               |
| text-indent           | 从左侧边框起文本的缩进               |
| text-transform        | 控制英文单词的大小写转换             |
| letter-spacing        | 控制字符间距                         |
| word-spacing          | 控制单词间距                         |
| **vertical-align**    | 控制行内元素在行框内的垂直对齐方式   |
| text-decoration       | 以下四项的复合属性，控制文本修饰线条 |
| text-decoration-line  | 设置文本修饰线条的种类               |
| text-decoration-color | 设置文本修饰线条的颜色               |
| text-decoration-style | 设置文本装饰线条的形状               |
| text-shadow           | 控制文本阴影                         |
| directtion            | 控制文本流的方向                     |
| writing-mode          | 控制对象的内容块固有的书写方向       |

**行高line-height**

```css
line-height: normal | 长度 | 百分比 | 数值 ;
```
```html
<style >
    p{font-size:13px;}
    .lh1{ line-height:normal;}
    .lh2{ line-height:24px;}
    .lh3{ line-height:188%;}
    .lh4{ line-height:1.5;}
</style>
```

**水平对齐方式text-align**
```css
text-align: left | right | center | justify | 
    start | end | match-parent | justify-all;
```
```html
<style >
p{ font-size:14px; }
.ta1{ text-align:left;}
.ta2{ text-align:center;}
.ta3{ text-align:right;}
.ta4{ text-align:justify;}
</style>
```

**文本缩进text-indent**

```css
text-indent: 长度值 | 百分比
```
```html
<style >
body{
    color:#035ee5;
}
h1{
    font-size:24px;
    text-align:center;
}
p{
    font:14px/22px 宋体;
    text-indent:2em;
}
</style>
```

**大小写text-transform**

```css
text-transform : none | capitalize | uppercase | lowercase | full-width;
```
```html
<style >
.tt1{ text-transform:capitalize; }
.tt2{ text-transform:uppercase; }
.tt3{ text-transform:lowercase; }
.tt4{ text-transform:full-width; }
</style>
```

**字符间距letter-spacing**

```css
letter-spacing: normal | 长度 | 百分比;
```
```html
<style >
.ls1{letter-spacing: normal;}
.ls2{letter-spacing:0.25em;}
.ls3{letter-spacing:-1px;}
</style>
```

**单词间距word-spacing**

```css
word-spacing: normal | 长度 | 百分比;
```
```html
<style >
.ws1{word-spacing: normal;}
.ws2{word-spacing:10px;}
</style>
```

**垂直对齐方式vertical-align**

```css
vertical-align : baseline | sub | super | top | text-top 
                | middle | bottom | text-bottom | 百分比 | 长度;
```

baseline：默认值，与基线对齐

sub：垂直对齐文本的下标

super：垂直对齐文本的上标

top：顶端与行中最高元素的顶端对齐

text-top：顶端与行中最高文本的顶端对齐

**middle：垂直对齐元素的中部**

bottom：底端与行中最低元素的底端对齐

text-bottom：底端与行中最低文本的底端对齐

百分比：用百分比指定由基线算起的偏移量，基线为0%

长度：用长度值指定由基线算起的偏移量，基线为0

```html
<style >
p{ font-size:18px;font-weight:bold; }
span{ font-size:13px;}
.va1{ vertical-align:baseline; }
.va2{ vertical-align:sub; }
.va3{ vertical-align:super; }
.va4{ vertical-align:top; }
.va5{ vertical-align:text-top; }
.va6{ vertical-align:middle; }
.va7{ vertical-align:bottom; }
.va8{ vertical-align:text-bottom; }
.va9{ vertical-align:10px; }
.va10{ vertical-align:20%; }
</style>
```

**文本修饰text-decoration**

```css
text-decoration:<text-decoration-line>  < text-decoration-style>  <text-decoration-color>;
text-decoration-line：none | underline | overline | line-through | blink ;
text-decoration-style：solid | double | dotted | dashed | wavy;
text-decoration-color：颜色;
```
```html
<style >
.td1{ text-decoration:none; }
.td2{ text-decoration:underline; }
.td3{ text-decoration:line-through red; }
.td4{ text-decoration:overline blue double; }
.td5{ text-decoration:overline underline purple dotted; }
.td6{ text-decoration-line:overline underline; }
.td7{
    text-decoration-line:underline;
    text-decoration-style:dashed;
    text-decoration-color:#F09; 
}
</style>
```

**文本阴影text-shadow**

```css
text-shadow : 阴影1, 阴影2, ... ;
```

阴影 = 水平偏移 , 垂直偏移 , [ 模糊值 ], [ 颜色 ];

```html
<style >
p{
    font-size:24px;
    font-family:黑体,微软雅黑;
    font-weight:bold;
}
.ts1{
    color:black;
    text-shadow:6px 6px 3px #333;
}
.ts2{
    color:#F93;
    text-shadow:-6px -4px 3px #FA6;
}
.ts3{
    color:black;
    text-shadow:5px 3px 2px #119cd5,10px 6px 2px #fed904,15px 9px 3px #7d4697;
}
</style>
```

**书写模式writing-mode**

```css
writing-mode: horizontal-tb | vertical-rl | vertical-lr | lr-tb | tb-rl ;
```

**换行处理word-wrap/overflow-wrap**

这两个属性效果相同，让字符串在到达容器的宽度限制时换行

```css
word-wrap: normal | break-word;
overflow-wrap: normal | break-word;
```

normal：允许内容顶开或溢出指定的容器边界

break-word：内容将在边界内换行。如果需要，单词内部允许断行

**文本相关伪对象**

first-letter：首字符

first-line：首行

```html
<style >
h1{
    font-size:24px;
    text-align:center;
}
p{
    font-size:13px;
    text-indent:2em;
}
p::first-line{
    color:#035ee5;
    font-weight:bold;
}
.firstpara{
    text-indent:0;
}
.firstpara::first-letter{
    font-size:30px;
    float:left;
    color:#035ee5;
    font-weight:bold;
}
</style>
```
```css
/* 字体大小 */
font-size: 16px | 1em | 1rem;
/* 字体粗细 */
font-weight: 400 | 700 | normal | bold;
/* 字体倾斜 */
font-style: normal | oblique |italic;
/* 行高，多行文本可以通过行高调整行间距 */
line-height: 32px | 2;
/* 单行文本垂直居中 */
height: 32px;
line-height: 32px;
/* 字体种类 */
font-family: 楷体, 宋体, 圆体, sans-serif;
/* 字体缩进 */
text-indent: 32px | 2em;
/* 文本对齐方式 */
text-align: left | center | right;
/* 文本修饰线 */
text-decoration: overline | underline | line-through;
/* 文本颜色 */
color: 颜色名 | RGB | RGBA | 十六进制 | 色轮;
```

## CSS列表属性

**列表项标记list-style-type**

列表的符号和位置可以使用CSS进行设置

```css
list-style-type: disc | circle | square | decimal | lower-roman | 
    upper-roman | lower-alpha | upper-alpha | none ; 
```

disc：实心圆

circle：空心圆

square：实心方块

decimal：阿拉伯数字

lower-roman：小写罗马数字

upper-roman：大写罗马数字

lower-alpha：小写英文字母

upper-alpha：大写英文字母

none：不使用项目符号

**图片符号list-style-image**

```css
list-style-image:none | url(图像文件的URL);
```

语法说明：

none：不指定图像

url：指定列表项标签图像。

```html
<style type=text/css>
.limg{ 
    list-style-image:url(images/flower.png);
    font-size:16px;
}
</style>
```

**列表符号位置list-style-position**

```css
list-style-position: outside | inside;
```

outside：默认值，列表项目符号放置在文本以外，且环绕文本，不根据符号对齐

inside：列表项目符号放置在文本以内，且环绕文本和项目符号对齐

**列表复合属性list-style**

```css
list-style: list-style-image  list-style-position  list-style-type;
```

当list-style-image属性为none或图像不可用时，list-style-type属性将发生作用

## 综合实例——基本图文混排网页

## CSS盒子模型

在Linux系统中，一切皆文件，在Web界面中，一切皆盒子

### 盒子基本要素

边框：border

边距：内边距padding、外边距margin

内容：content

![img](http://www.kdocs.cn/api/v3/office/copy/UzZLMWN1eGNxd0huR2FYVVBqM05pMFd1bDhJMXpYdU5JbmlBbTd5SC81UkhkNElvcUpPZjEzaG1ReEk1N1M5R3k4elBpWnRJL3FmVzlTSjJyOWhsY3hlaEZBcnYyOVA3VnlKN29HWEZ3Sm45ZUh3akppS2FqWDRsZiszdXRmakZCcXRHS0FqRFFaUTBwSVlMSStwNUk1UGpKanBsUisrckFRZG0xbW5kNGNCNDRxbUFqL1d6VG5Bdlk3eEpiaTRtenhzZ2EzcmlnN0J5K2FZVitTNzVOSlEvWnExQjhZQStOQ04zcE44U0tPNklVUzVlcDdCcEtMSitRM2JqRWFMUzVOLzhPN1pMVmVNPQ==/attach/object/J5RUP2Q7ABAE6?)

### 盒子大小的计算

```css
width: auto | 长度 | 百分比 | fit-content;
height: auto | 长度 | 百分比 | fit-content;
```

盒子所占宽度= width（内容宽度）+ padding（左右）+ margin（左右）+ border（左右）

盒子所占高度= height（内容高度）+ padding（上下）+ margin（上下）+ border（上下）

![img](http://www.kdocs.cn/api/v3/office/copy/UzZLMWN1eGNxd0huR2FYVVBqM05pMFd1bDhJMXpYdU5JbmlBbTd5SC81UkhkNElvcUpPZjEzaG1ReEk1N1M5R3k4elBpWnRJL3FmVzlTSjJyOWhsY3hlaEZBcnYyOVA3VnlKN29HWEZ3Sm45ZUh3akppS2FqWDRsZiszdXRmakZCcXRHS0FqRFFaUTBwSVlMSStwNUk1UGpKanBsUisrckFRZG0xbW5kNGNCNDRxbUFqL1d6VG5Bdlk3eEpiaTRtenhzZ2EzcmlnN0J5K2FZVitTNzVOSlEvWnExQjhZQStOQ04zcE44U0tPNklVUzVlcDdCcEtMSitRM2JqRWFMUzVOLzhPN1pMVmVNPQ==/attach/object/QNFUT2Q7ABQAO?)

```html
<style >
div{
    width:300px;              /*宽300像素*/
    height:200px;             /*高200像素*/
    margin:15px;              /*外边距15像素*/
    padding:20px;             /*内边距20像素*/
    border:15px solid green;         /*边框15像素绿色实线*/
}
</style>
```

### 盒子类型box-sizing

```css
width: 值;
height: 值;
box-sizing: content-box | border-box;

box-sizing: border-box; /* 边框盒子模型 */
box-sizing: content-box; /* 内容盒子模型 */
```

语法说明：

content-box：标准盒子模型。width、height是内容的宽高

border-box：怪异盒子模型/边框盒子模型。width、height指“内容+border+margin”

```html
<style >
#cbox{
    width:200px;      /*宽200像素*/
    height:100px;     /*高100像素*/
    margin:15px;      /*外边距15像素*/
    padding:10px;     /*内边距10像素*/
    border:10px solid green;     /*边框10像素绿色实线*/
    box-sizing:content-box;     /*width、height仅指内容宽高*/
}
#bbox{
    width:200px;      /*宽200像素*/
    height:100px;     /*高100像素*/
    margin:15px;      /*外边距15像素*/
    padding:10px;     /*内边距10像素*/
    border:10px solid green;     /*边框10像素绿色实线*/
    box-sizing:border-box;     /*width、height指内容宽高+margin+border*/
}
</style>
```

### 清除盒子默认样式

```css
margin: 0;
padding: 0;
box-sizing: border-box;
```

## 边框属性

包括边框的样式、颜色、厚度

[border - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border)

### 边框样式 border-style

复合属性按照上右下左进行设置，没有设置的取对向的值

```css
border-style: 上 右 下 左; /* 没有值时取对向的值 */
border-top-style: 样式值;
border-bottom-style: 样式值;
border-left-style: 样式值;
border-right-style: 样式值;
```

样式值：none | hidden | dotted | dashed | solid | double | inset | outset | ridge

```html
<style >
div{
    width:80px;
    height:50px;
    margin:10px;     /*外边距*/  
    float:left;      /*左边浮动*/
    font-size:13px;
}
#bs1{ border-style:none; }
#bs2{ border-style:solid; }
#bs3{ border-style:solid dashed;}
#bs4{ border-style:solid dashed double; }
#bs5{ border-style:solid dashed double dotted; }
#bs6{ border-style:groove; }
#bs7{ border-style:ridge; }
#bs8{ border-style:inset; }
#bs9{ border-style:outset; }
#bs10{
    border-top-style:solid;    
    border-right-style:dashed;
    border-bottom-style:double;
    border-left-style:dotted;
}
</style>
```

### 边框厚度border-width

```css
border-width:上 右 下 左; /* 没有值时取对向的值 */
border-top-width: 厚度值;
border-bottom-width: 厚度值;
border-left-width: 厚度值;
border-right-width: 厚度值;
```

厚度值：medium、thin和thick，分别表示中等厚度的边框、细边框和粗边框。

```html
<style >
div{
    width:80px;
    height:50px;
    margin:10px;     /*外边距*/  
    float:left;      /*左边浮动*/
    font-size:13px;
    border-style:solid;     /*边框样式solid*/
}
#bw1{ border-width:thick; }
#bw2{ border-width:2px 4px;}
#bw3{ border-width:2px 4px 6px; }
#bw4{ border-width:2px 4px 6px 8px; }
#bw5{
    border-top-width:2px;
    border-right-width:4px;
    border-bottom-width:6px;
    border-left-width:8px;
}
</style>
```

### 边框颜色border-color

```css
border-color:上 右 下 左; /* 没有值时取对向的值 */
border-top-color: 颜色值;
border-right-color: 颜色值;
border-bottom-color: 颜色值;
border-left-color: 颜色值;
```
```html
<style >
div{
    width:80px;
    height:50px;
    margin:10px;     /*外边距*/  
    float:left;      /*左边浮动*/
    font-size:13px;
    border-style:solid;     /*边框样式solid*/
    border-width:10px;    /*边框宽度10像素*/ 
}
#bc1{ 
    border-style:groove;
    border-color:#81409A; 
}
#bc2{ border-color:#81409A #B7D5EF; }
#bc3{ border-color:#81409A #B7D5EF #B6CE44; }
#bc4{ border-color:#81409A #B7D5EF #B6CE44 #FDDA04; }
#bc5{
    border-top-color:#81409A;
    border-right-color:#B7D5EF;
    border-bottom-color:#B6CE44;
    border-left-color:#FDDA04;;
}
</style>
```

### 边框复合属性border

```css
border-left: [宽度]  [样式]  [颜色];
border-right: [宽度]  [样式]  [颜色];
border-top: [宽度]  [样式]  [颜色];
border-bottom: [宽度]  [样式]  [颜色];
border: [宽度]  [样式]  [颜色];
```
```html
<style >
div{
    width:100px;
    height:60px;
    margin:10px;     /*外边距*/  
    float:left;      /*左边浮动*/
    font-size:13px;
}
#b1{ 
    border:solid;
    color:#159DD7;       /*前景色*/
}
#b2{ border:double #81409A;}
#b3{ border:dashed #047C3F 6px;}
#b4{ 
    border-top:double;
    border-right:solid #B6CE44;
    border-bottom:dotted 2px;
    border-left:ridge #B7D5EF 8px;
}
</style>
```

## 边距属性

分为内边距、外边距

### 内边距padding

```css
padding : 值{1,4};
padding-top :值;
padding-bottom :值;
padding-left :值;
padding-right :值;
```

属性值：长度值 | 百分比

所有元素可以设置左右内边距，块级元素才能设置上下内边距。

若要设置内联元素的上下内边距，必须先设置对象为块级元素。

```html
<style >
/*父层样式*/
#parent{
    padding:20px 30px;        /*父层内边距*/
    background-color:#B0DFE9;        /*父层背景色*/
}
/*子层样式*/
#child{
    border:3px double #189FD7;         /* 子层边框 */
    padding:20px;                 /*子层内边距*/
}
/*h1样式*/
h1{
    font-size:20px;
    border-bottom:2px dashed #189FD7;
    padding-bottom:10px;               /*下边内边距*/
    text-align:center;
}
/*p元素样式*/
p{
    font-size:14px;
    line-height:1.5;
    text-indent:2em;
    padding-top:5px;        /*上边内边距*/
}
</style>
```

### 外边距margin

```css
margin : 值{1,4};
margin-top :值;
margin-bottom :值;
margin-left :值;
margin-right :值;
```

属性值：是长度值 |百分比

外边距始终透明。

若要设置内联元素的外边距，必须先使该元素表现为块级元素

```html
<style >
/*父层样式*/
#parent{
    padding:20px 30px;        /*父层内边距*/
    margin:10px;              /*父层外边距*/
    background-color:#B0DFE9;        /*父层背景色*/
}
/*子层样式*/
#child{
    border:3px double #189FD7;         /* 子层边框 */
    padding:20px;                 /*子层内边距*/
    margin:10px;
}
/*h1样式*/
h1{
    font-size:20px;
    border-bottom:2px dashed #189FD7;
    padding-bottom:10px;               /*下边内边距*/
    text-align:center;
}
/*p元素样式*/
p{
    font-size:14px;
    line-height:1.5;
    text-indent:2em;
    padding-top:5px;        /*上边内边距*/
}
</style>
```

块级元素自身水平居中:

```css
margin: 0 auto;
margin: 0 auto 0 auto;
```

#### margin合并

垂直排列的紧邻元素，上下 margin 会合并，取两个 margin 中的较大值生效

#### margin塌陷

父子级的标签，子级的添加 上外边距 会产生塌陷问题

解决方法：

- 方法1：取消子级margin，父级设置padding-top
- 方法2：父级设置 overflow: hidden
- 方法3：父级设置 border-top： 1px solid transparent;

### 行内元素内外边距问题

行内元素可以设置水平边距

行内元素无法改变元素的垂直位置，可以使用line-height

## 边框圆角border-radius

#### 分别设置4个角

![img](http://www.kdocs.cn/api/v3/office/copy/UzZLMWN1eGNxd0huR2FYVVBqM05pMFd1bDhJMXpYdU5JbmlBbTd5SC81UkhkNElvcUpPZjEzaG1ReEk1N1M5R3k4elBpWnRJL3FmVzlTSjJyOWhsY3hlaEZBcnYyOVA3VnlKN29HWEZ3Sm45ZUh3akppS2FqWDRsZiszdXRmakZCcXRHS0FqRFFaUTBwSVlMSStwNUk1UGpKanBsUisrckFRZG0xbW5kNGNCNDRxbUFqL1d6VG5Bdlk3eEpiaTRtenhzZ2EzcmlnN0J5K2FZVitTNzVOSlEvWnExQjhZQStOQ04zcE44U0tPNklVUzVlcDdCcEtMSitRM2JqRWFMUzVOLzhPN1pMVmVNPQ==/attach/object/ARA4DRY4ADAGC?)

```css
border-top-left-radius: [水平半径]  [垂直半径];
border-top-right-radius: [水平半径]  [垂直半径];
border-bottom-right-radius: [水平半径]  [垂直半径];
border-bottom-left-radius: [水平半径]  [垂直半径];
```

属性值可以是长度值或百分比，垂直半径默认等于水平半径

#### 同时设置4个角

```css
border-radius: 水平半径{1,4} / [ 垂直半径{1,4} ] ;
```

属性值可以是长度值或百分比，垂直半径默认等于水平半径

```html
<style >
div{
    width:130px;
    height:70px;
    margin:10px;     
    float:left;      /*左边浮动*/
    font-size:13px;
    border:2px solid #000;
    padding:5px;
}
#br1{ 
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    border-bottom-right-radius:20px;
    border-bottom-left-radius:20px;
}
#br2{
    border-top-left-radius:20px 10px;
    border-top-right-radius:20px 10px;
}
#br3{ border-radius:10px; }
#br4{ border-radius:10px 15px; }
#br5{ border-radius:10px 15px 20px; }
#br6{ border-radius:10px 15px 20px 25px; }
#br7{ border-radius:10px/20px;}
#br8{ border-radius:10px 15px/20px 25px;}
#br9{ border-radius:10px 15px 20px 25px/20px 25px 30px 35px;}
</style>
```

圆形: `border-radius: 50%;`

胶囊: `border-radius: 高度的一半;`

## 图像边框border-image

```
border-image：< border-image-source > || 
< border-image-slice > 
[ / < border-image-width > | / < border-image-width >? / < border-image-outset > ]? || 
< border-image-repeat >
```

这几个属性的意义如下：

border-image-source：控制对象的边框要使用的图像。

border-image-slice：控制对象的边框图像的切片方式。

border-image-width：控制对象的边框厚度。

border-image-outset：控制对象的边框图像的外延扩展。

border-image-repeat：控制对象的边框图像的平铺方式。

### 1. border-image-source属性

```
border-image-source: none | url(图像路径);
```

图片不能正常显示时会使用border-style

### 2. border-image-slice属性

控制对象的边框图像的切片方式，属性可以是1-4个数字或百分比，也可以增加一个fill关键字。

```
border-image-slice：[ 数字 | 百分比 ]{1,4} && fill?
```

语法说明：

值可以是1~4个数字或百分比，这4个值分别表示相对于图片的上、右、下、左边缘的偏移量，将图像分成4个角，4条边和中间区域的9个切片，中间区域始终是透明的（即没有图像填充），除非加上关键字
fill。

如果第4个值不存在，它会等同于第2个值；如果第3个值不存在，它会等同于第1个值；如果第2个值不存在，它会等同于第1个值。

当值为数字时，代表图像中的像素，注意不能加px表示单位，直接使用数字。

当使用百分比时，相对于图片的大小。

fill关键字存在的话，将会保留border-image中间的部分。

![img](http://www.kdocs.cn/api/v3/office/copy/UzZLMWN1eGNxd0huR2FYVVBqM05pMFd1bDhJMXpYdU5JbmlBbTd5SC81UkhkNElvcUpPZjEzaG1ReEk1N1M5R3k4elBpWnRJL3FmVzlTSjJyOWhsY3hlaEZBcnYyOVA3VnlKN29HWEZ3Sm45ZUh3akppS2FqWDRsZiszdXRmakZCcXRHS0FqRFFaUTBwSVlMSStwNUk1UGpKanBsUisrckFRZG0xbW5kNGNCNDRxbUFqL1d6VG5Bdlk3eEpiaTRtenhzZ2EzcmlnN0J5K2FZVitTNzVOSlEvWnExQjhZQStOQ04zcE44U0tPNklVUzVlcDdCcEtMSitRM2JqRWFMUzVOLzhPN1pMVmVNPQ==/attach/object/WAXMJRY4ADQFO?)

### 3. border-image-width属性

该属性用于指定使用多厚的边框来承载被裁剪后的图像。

```
border-image-width：[ 长度值 | 百分比 | 浮点数 | auto ]{1,4}
```

语法说明：

值可以是1~4个长度值、百分比、浮点数或者关键字auto，这4个值用来指定边框图片区域相对于上、右、下、左4个侧边的厚度。

如果第4个值不存在，它会等同于第2个值；如果第3个值不存在，它会等同于第1个值；如果第2个值不存在，它会等同于第1个值。

auto表示边框图片的厚度为图片分割后切片的宽度或高度，即和border-image-slice的值相同。

### 4. border-image-repeat属性

该属性用于指定边框图像的填充方式。可定义0~2个参数值，即水平和垂直方向。如果2个值相同，可合并成1个，表示水平和垂直方向都用相同的方式填充边框背景图；如果2个值都为stretch，则可省略不写。

```
border-image-repeat：[ stretch | repeat | round | space ]{1,2}
```

语法说明：

stretch：指定用拉伸方式来填充边框图像。

repeat：指定用平铺方式来填充边框图像。当图片遇到边界时，如果超出则被截断。

round：指定用平铺方式来填充边框图像。图片会根据边框的尺寸动态调整图片的大小直至正好可以铺满整个边框。

space：指定用平铺方式来填充边框图像。图片会根据边框的尺寸动态调整图片之间的间距直至正好可以铺满整个边框。目前主流浏览器几乎都不支持space关键字。

### 5. border-image-outset属性

 该属性用于指定边框图像向外扩展所定义的数值，即如果值为10px，则图像在原本的基础上往外延展10px再显示。

```
border-image-outset：[ 长度值 | 浮点数 ]{1,4}
```

语法说明：

值不允许为负值。

值可以是1~4个长度值或浮点数，这4个值用来指定边框图片区域相对于上、右、下、左4个侧边的外延。

如果第4个值不存在，它会等同于第2个值；如果第3个值不存在，它会等同于第1个值；如果第2个值不存在，它会等同于第1个值。

语法说明：

stretch：指定用拉伸方式来填充边框图像。

repeat：指定用平铺方式来填充边框图像。当图片遇到边界时，如果超出则被截断。

round：指定用平铺方式来填充边框图像。图片会根据边框的尺寸动态调整图片的大小直至正好可以铺满整个边框。

space：指定用平铺方式来填充边框图像。图片会根据边框的尺寸动态调整图片之间的间距直至正好可以铺满整个边框。目前主流浏览器几乎都不支持space关键字。

```
<style >
div{
    padding:30px;
    margin:20px;
    font-size:14px;
    background-color:#9FF;     /*设置div背景颜色*/
    float:left;
    width:160px;
    height:80px;
}
#bi1{
    border-image-source:url("images/test.png");
    border-image-slice:27;
    border-image-width:auto;
    border-image-repeat:repeat;
}
#bi2{
    border-image-source:url("images/test.png");
    border-image-slice:27 fill;
    border-image-width:auto;
    border-image-repeat:repeat;
}
#bi3{
    border-image-source:url("images/test.png");
    border-image-slice:27;
    border-image-width:auto;
    border-image-outset:10px;
    border-image-repeat:repeat;
}
#bi4{ border-image:url("images/test.png") 27/15px repeat; }
#bi5{ border-image:url("images/test.png") 35/40px repeat; }
#bi6{ border-image:url("images/test.png") 20/27px repeat; } 
#bi7{ border-image:url("images/test.png") 27/auto stretch; }
#bi8{ border-image:url("images/test.png") 27/auto round; }
#bi9{ border-image:url("images/test.png") 10 15 20 30/auto repeat; }
</style>
```

## 盒子阴影 box-shadow

```
box-shadow: none | 阴影1 [ , 阴影2，... ];
```

阴影 = [inset] 水平偏移量 垂直偏移量 [阴影模糊半径] [阴影扩展半径] [阴影颜色]

none：没有阴影。

inset：内部阴影，没有该值，则对象的阴影为外部阴影

```
<style >
div,img{
    width:150px;
    height:100px;
    margin:15px;
    padding:5px;
    float:left;
    font-size:13px;
}
#bs1{
    box-shadow:4px 4px 2px 2px #61f7eb; 
    background-color:#EC3B58;
}
#bs2{ 
    box-shadow:4px 4px; 
    background-color:#9CDFFC;
}
#bs3{ 
    box-shadow:-4px 4px 2px 2px #ef41d4; 
    background-color:#7afe84;
}
#bs4{ 
    box-shadow:0 0 6px 6px #9366f7;
}
#bs5{ 
    box-shadow:inset 0 0 6px 6px #9366f7;
}
#bs6{         /*多重阴影效果*/
    box-shadow: 0 0 2px 2px #56f79a, 0 0 2px 4px #fcf276,0 0 2px 7px #5fcff5,0 0 2px 11px #f34ddf; 
}
</style>
```

## 综合实例——盒子布局排版

## CSS背景属性

背景属性

| 属性                    | 说明                                        |
| ----------------------- | ------------------------------------------- |
| `background`            | 背景复合属性                                |
| `background-color`      | 控制背景颜色                                |
| `background-image`      | 控制背景图像                                |
| `background-repeat`     | 控制背景图像平铺方式                        |
| `background-attachment` | 控制背景图像固定到页面中的具体位置/留在原地 |
| `background-position`   | 控制背景图像位置                            |
| `background-origin`     | 控制背景图像的显示区域                      |
| `background-size`       | 控制背景图像的大小                          |
| `background-clip`       | 控制背景图像的剪裁区域                      |

### 背景颜色 background-color

```
/* 背景色 */ 
background-color: color_name | RGB | HSL;
```
```
<style >
body {
    background-color:#000;    /*网页背景颜色*/ 
    text-align:center;
}
p {
    background-color:#d9311c;      /*段落中p元素背景颜色*/ 
    color:#FFF;
}
.bc1{
    border:#d9311c 1px solid; 
    background-color:#ffe4cf;    
}
.bc2{
    border:#038b3c 1px solid; 
    background-color:#bdffda;    
}
</style>
```

### **背景图像 background-image**

```
background-image: none | url("path/to/img.png");
/* 背景图 */
background-image: url("image.png");
```
```
<style >
body {
    background-image:url(images/bg1.gif);      /*设置页面背景图像*/
}
</style>
```

### 背景图像重复background-repeat

```
/* 背景图平铺 */
background-repeat: repeat | no-repeat | repeat-x | repeat-y| space | round;
```

repeat：默认值，背景图像在横向和纵向平铺。

no-repeat：背景图像不重复。

repeat-x：背景图像仅在水平方向平铺。

repeat-y：背景图像仅在垂直方向平铺。

round：背景图像自动缩放直到适应且填充满整个容器。

space：背景图像以相同的间距平铺且填充满整个容器或某个方向。

```
<style >
div{
    width:240px;
    height:160px;
    float:left;
    margin:10px;
    font-size:30px;
    font-weight:900;
    text-align:center;
    border:1px solid black;
    background-image:url(images/bg3.jpg);    /*所有div设置同样的背景图像*/
}
#br1{
    background-repeat:repeat;        /*背景图像重复*/
}
#br2{
    background-repeat:no-repeat;        /*背景图像不重复*/
}
#br3{
    background-repeat:repeat-x;        /*背景图像横向重复*/
}
#br4{
    background-repeat:repeat-y;        /*背景图像纵向重复*/
}
#br5{
    background-repeat:space;        /*背景图像纵向重复*/
}
#br6{
    background-repeat:round;        /*背景图像纵向重复*/
}
</style>
```

### 背景图像滚动background-attachment

```
background-attachment : scroll | fixed | local;
/* 背景图固定 */
background-attachment: fixed | scroll;
```

fixed：背景图像相对于窗体固定。

scroll：背景图像相对于元素固定，当元素内容滚动时背景图像不会跟着滚动

local：背景图像相对于元素内容固定，当元素随元素滚动时背景图像也会跟着滚动

```
<style >
body{
    background-image:url(images/bg4.jpg);    /*网页的背景图像*/
    background-attachment:fixed;            /*背景图像相对于窗体固定*/
}
div{
    width:300px;
    height:300px;
    margin:10px;
    overflow:auto;                            /*盒子内容溢出时自动加上滚动条*/
    border:1px solid black;
    background-image:url(images/bg5.jpg);    /*三个div设置同样的背景图像*/    
    line-height:2;
}
#ba1{         /*背景图像相对于元素固定，背景图像跟着元素(div盒子)本身*/
    background-attachment:scroll;   
}
#ba2{       /*背景图像相对于元素内容固定，背景图像跟着内容(文本)滚动*/
    background-attachment:local;       
}
</style>
```

### 背景图像位置background-position

```
background-position: 
    水平位置 垂直位置;
    关键字 | 百分比 | 长度

/* 背景图位置 左上角为（0，0）*/
background-position: /* 水平偏移 、 垂直偏移 */  
    left | right |center  top | center | bottom;
    像素数 像素数;
    百分比 百分比;
```

位置值可以是：关键字、百分比、长度

关键字：

水平方向：center、left、right

垂直方向：center、top、bottom

```
<style >
body{
    background-image:url(images/bg4.jpg);    /*网页的背景图像*/
    background-attachment:fixed;           /* 背景图像相对于窗体固定*/
    background-repeat:no-repeat;           /* 背景图像不重复*/
    background-position:center bottom;      /* 背景图像水平居中，垂直底部*/
    text-align:center;
    line-height:1.5;
}
</style>
```

### 背景参考原点background-origin

```
background-origin : padding-box | border-box | content-box;
```

padding-box：从padding区域（含padding）开始显示背景图像

border-box：从border区域（含border）开始显示背景图像

content-box：从content区域开始显示背景图像

```
<style >
body{
    background-color:#fefab1;
}
p{
    width:300px;
    height:300px;
    padding:20px;
    border:10px dashed #000;
    background-color:#0dcff2;
    background-image:url(images/bg5.jpg);
    background-repeat:no-repeat;
    float:left;
    margin:10px;
    font-size:20px;
}
.bo1{ background-origin:padding-box; }
. bo2{ background-origin:border-box; }
. bo3{ background-origin:content-box; }
</style>
```

### 背景图像尺寸background-size

```
background-size:长度|百分比| auto | cover | contain;
/* 背景图大小 */
background-size: cover | contain | 百分比 | 像素数;
```

长度、百分比提供1个值时，表示宽度，等比缩放

长度、百分比提供2个值时，表示宽度、高度

auto：背景图像的真实大小。

cover：图片覆盖容器

contain：容器包裹完整图片

```
<style >
p{
    width:300px;
    height:300px;
    padding:20px;
    border:10px dashed #000;
    background-image:url(images/bg6.jpg);
    background-repeat:no-repeat;
    float:left;
    margin:10px;
    font-size:20px;
}
.bs1{ background-size:auto; }
.bs2{ background-size:cover; }
.bs3{ background-size:contain; }
.bs4{ background-size:400px; }
.bs5{ background-size:300px 200px; }
.bs6{ background-size:80% 90%; }      
</style>
```

### 背景图像裁剪区域background-clip

```
background-clip: border-box | padding-box | content-box | text;
```

border-box：默认值，不会发生裁剪。

padding-box：超出padding区域也就是border区域的背景将会被裁剪。

content-box：从content区域开始向外裁剪背景，即border和padding区域内的背景将会被裁剪掉。

text：从前景内容的形状（比如文字）作为裁剪区域向外裁剪，如此即可实现使用背景作为填充色之类的遮罩效果

```
<style >
p{
    width:300px;
    height:120px;
    padding:20px;
    border:10px dashed #000;
    background-image:url(images/bg7.jpg);
    background-repeat:no-repeat;
    float:left;
    margin:10px;
    font-size:36px;
    font-weight:900;
    font-family:黑体;
}
.bclip1{ background-clip:border-box;  }
.bclip2{ background-clip:padding-box;  }
.bclip3{ background-clip:content-box;  }
.bclip4{
    -webkit-background-clip:text; /*webkit，从前景内容的形状作为裁剪区域向外裁剪背景*/
    -webkit-text-fill-color:transparent; /*webkit，文本颜色设置为透明，透出背景图像*/
}
</style>
```

### 线性渐变背景图像

linear-gradient()创建线性渐变图像

radial-gradient()创建径向渐变图像

repeating-linear-gradient()创建重复的线性渐变图像

repeat-radial-gradient()创建径向渐变图像。

```
background: linear-gradient(方向/角度, 颜色1 [长度/百分比], 颜色2 [长度/百分比], ...)
```

方向：

to left：往左渐变

to right：往右渐变

to top：往上渐变

to bottom：往下渐变

长度/百分比：**指定起止色位置**

```
<style >
body{
    background-image:linear-gradient(yellow, red);     /*网页背景从黄色渐变至红色*/
    background-attachment:fixed;
}
p{
    width:200px;
    height:100px;
    padding:10px;
    float:left;
    border:1px solid #000;
    background-repeat:no-repeat;
    margin:10px;
    font-size:14px;
}
/*背景从蓝色到白色到红色渐变*/
.blinear1{          
    background:linear-gradient(blue,white,red);
}
/*背景从白色到红色渐变，从80%开始*/
.blinear2{          
    background:linear-gradient(white 80%,red);
}
/*背景从白色到红色渐变，45度*/
.blinear3{          
    background:linear-gradient(45deg,white,red);
}
/*背景从白色到红色渐变，90度*/
.blinear4{          
    background:linear-gradient(90deg,white,red);
}
</style>
```

背景复合属性background

```
/* 复合属性 */
background: 背景色 背景图 背景图平铺方式 背景图位置/背景图缩放  背景图固定 ;
```

### 多背景

```
background:
        url(images/1.jpg) no-repeat top left,
        url(images/2.jpg) no-repeat top right,
        url(images/3.jpg) no-repeat bottom left,
        url(images/4.jpg) no-repeat bottom right,    
        url(images/5.jpg) no-repeat center center;
```

### 背景透明度

```
opacity: 0.0-1.0;
```
```
<style >
.div1{
    width:200px;
    height:200px;
    text-align:center;
    background:url(images/bg3.jpg);
}
.div2{
    width:200px;
    height:200px;
    text-align:center;
    margin:-150px 0 0 120px;
    background:url(images/bg12.jpg);
    opacity:0.6;    /*不透明度60%*/
}
</style>
```

## CSS精灵

CSS Sprites 技术

```
width: 合适的值;
height: 合适的值;
background: url(URL) no-repeat 负X偏移量  负Y偏移量;
```

## CSS字体图标

iconfont

阿里妈妈字体库

## CSS美化表格

```

<html>
<head>
  <title>表格边框样式</title>
  <style>
    table { /* 表格整体样式 */
      margin: 50px; /* 外边距50px */
      border-collapse: collapse; /* 合并为单一的边框线 */
    }

    /* 设置tb1类的表格样式 */
    table.tb1 td {
      padding: 10px;
      border: 2px solid green;
      width: 150px;
      height: 120px;
      background-color: yellow;
    }

    /* 设置tb2类的表格样式 */
    table.tb2 td {
      padding: 20px;
      border: 12px inset green;
    }
  </style>
</head>
<body>
<table class="tb1">
  <tr>
    <td>活</td>
    <td>到</td>
    <td>老</td>
  </tr>
  <tr>
    <td>学</td>
    <td>到</td>
    <td>老</td>
  </tr>
</table>
<table class="tb2">
  <tr>
    <td>学</td>
    <td>然</td>
    <td>后</td>
  </tr>
  <tr>
    <td>知</td>
    <td>不</td>
    <td>足</td>
  </tr>
</table>
</body>
</html>
```
```

<html>
<head>
    <title>盒子阴影</title>
</head>
<style >
.table_style
    {
    margin: 10px auto;/*外补白*/
    padding:20px 20px 20px;        /*内补白*/
    border-style: inset;/*表格边框样式*/
    border-collapse: separate;/*边框是否被合并*/
    border-width:20px;
    border-spacing:10px 10px;/*单元格间距*/
    border-color: blue;
    color: #000;    /*前景色*/
    background: #bb8F20;  /*背景色*/  
    }
.table_style td
    {
    width:50px;    /*单元格宽度*/
    height: 50px;    /*单元格高度*/
    padding:0px 20px 20px;        /*内补白*/
    border-style:double;/*单元格边框样式*/
    border-width:20px; /*单元格边框宽度*/
    border-color: #F90; /*单元格边框颜色*/
    background: #FADD56;       /*单元格背景色*/
    text-align:center;       /*内容居中*/
    font-size:72px;
    font-family: "楷体gb2312";
    box-shadow: 30px 30px 20px  #333333;        
                              /*盒子阴影*/
    vertical-align: top;
    }
.title2 {
    color: #000;
    font-family: "方正舒体";
    font-size: 64px;
    font-weight:bold;
    }
</style>
<body>
<table class="table_style">
    <tr>
    <td>
    <span class="title2">甲</span>
    </td>
    <td><span class="title2">乙</span>
    </td>
    </tr>
    <tr>
    <td>
    <span class="title2">丙</span>
    </td>
    <td><span class="title2">丁</span>
    </td>
    </tr>
</table>
</body>
</html>
```
```
<html>
<head>
    <title>隔行变色</title>
</head>
<style >
#table-1 th, #table-1 tr 
    {
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: rgb(230, 189, 189);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(230, 189, 189);
    }
#table-1 td, #table-1 th 
    {
    padding: 5px 10px;
    font-size: 12px;
    font-family: Verdana;
    color: rgb(177, 106, 104);
    }
#table-1 tr:nth-child(even) 
    {
    background: rgb(238, 211, 210)
    }
#table-1 tr:nth-child(odd) 
    {
    background: #FFF
    }
</style>
<body>
    <table id="table-1">
    <thead>
    <tr>
        <th>星期一</th>
        <th>星期二</th>
        <th>星期三</th>
        <th>星期四</th>
        <th>星期五</th>
        <th>星期六</th>
    </tr>
    </thead>
<tr>
        <td>语文</td>
        <td>数学</td>
        <td>英语</td>
        <td>英语</td>
        <td>物理</td>
        <td>计算机</td>
    </tr>
    <tr>
        <td>数学</td>
        <td>数学</td>
        <td>地理</td>
        <td>历史</td>
        <td>化学</td>
        <td>计算机</td>
    </tr>
    <tr>
        <td>化学</td>
        <td>语文</td>
        <td>体育</td>
        <td>计算机</td>
        <td>英语</td>
        <td>计算机</td>
    </tr>
<tr>
        <td>政治</td>
        <td>英语</td>
        <td>体育</td>
        <td>地理</td>
        <td>历史</td>
        <td>计算机</td>
    </tr>
    <tr>
        <td>语文</td>
        <td>数学</td>
        <td>英语</td>
        <td>英语</td>
        <td>物理</td>
        <td>计算机</td>
    </tr>
    <tr>
        <td>数学</td>
        <td>数学</td>
        <td>地理</td>
        <td>历史</td>
        <td>化学</td>
        <td>计算机</td>
    </tr>
    </table>
</body>
</html>
```
```
<html>  
<head>  
    <title>悬停增亮</title>
</head> 
<style> 
    table 
    {    
         border-collapse: collapse;   
         font-family: Futura, Arial, sans-serif;    
        width:300px;
        height:200px;
    } 
    th,td 
    {    
         padding: .65em;    
    } 
    th 
    {    
         background: #555 nonerepeat scroll 0 0;    
      border: 1px solid #777;  
       color: #cfb423;   
    }     
td 
    {    
          border: 1px solid #777;   
    } 
    tbody tr:hover 
    {    
         background: red;     
    }  
</style>
<body>  
       <table>
    <thead>
        <tr>
        <th>主键</th>
        <th>属性名</th>
        <th>数据类型</th>
        </tr>
    </thead>
<tbody>
    <tr>
        <td>1</td>
        <td>name</td>                <td>varchar(20)</td>
    </tr>
    <tr>
        <td>2</td>
        <td>性别</td>
        <td>bit(1)</td>
    </tr>
    <tr>
        <td>3</td>
        <td>年龄</td>
        <td>int(4)</td>
    </tr>
    <tr>
        <td>4</td>
        <td>出生年月</td>
        <td>date</td>
    </tr>
    </tbody>
    </table>
</body>  
</html>
```

## CSS美化表单

```
<html>
<head>
    <title>表单项边框样式</title>
</head>
<style>
.text
    { 
    border: #fff 4px solid; 
    margin: 0px 0px 15px 10px; 
    padding-left: 10px; 
    float: left; 
    font-size: 2em; 
    line-height: 1.5em; 
    height: 40px; 
    text-align: left; 
    }
</style>
<body>
    <form>
    <input type="text" class="text" size="20" autofocus="autofocus"/>
    </form>
</body>
</html>
```
```
<html>  
<head>  
    <title>表单元素的背景颜色</title>
</head> 
<style>
.blue{
    background-color:#7598FB;
    color: #000000;
}
.red{
    background-color:#E20A0A;
    color: #ffffff;
}
.green{
    background-color:#3CB371;
    color: #ffffff;
}
.yellow{
    background-color:#FFFF6F;
    color: #000000;
}
.cyan{
    background-color:#00FFFF;
    color:#000000;
}
.purple{
    background-color:#800080;
    color:#000000;
}
#btnSubmit
{
   width:100px;
  height:30px;
  box-shadow:0px 0px 7px 5px red;
  border-radius:20px;
background-color:orange;
}
 
</style>
<body>
    <form method="post">
    请选择一种颜色
    <select name="color" id="color">
    <option value=""> 选择 </option>
    <option value="blue" class="blue">蓝色</option>
    <option value="red" class="red">红色</option>
    <option value="green" class="green">绿色</option>
    <option value="yellow" class="yellow">黄色</option>
    <option value="cyan" class="cyan">青色</option>
    <option value="purple" class="purple">紫色</option>
    </select>
    <p><input type="submit" name="btnSubmit"id="btnSubmit" value="提交"/></p>
    </form>
</body>
</html>
```
```

<html>
<head>
  <title>表单综合实例</title>
</head>
<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #666666;
    background: #fff;
    text-align: center;
  }

  * {
    margin: 0;
    padding: 0;
  }

  a {
    color: #1E7ACE;
    text-decoration: none;
  }

  a:hover {
    color: #000;
    text-decoration: underline;
  }

  h3 {
    font-size: 14px;
    font-weight: bold;
  }

  p {
    color: red;
    margin: 4px;
  }

  input {
    padding: 1px;
    margin: 2px;
    font-size: 11px;
  }

  .buttom {
    border: 5px outset #00F;
    border-radius: 15px;
    width: 100px;
    height: 30px;
    font: bold 8px Tahoma;
    color: #00f;
    box-shadow: 10px 10px 10px #06C;
  }

  #formwrapper {
    width: 450px;
    margin: 15px auto;
    padding: 20px;
    text-align: left;
    border: 1px solid #A4CDF2;
  }

  fieldset {
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #A4CDF2;
    background: #fff;
  }

  fieldset legend {
    color: #1E7ACE;
    font-weight: bold;
    padding: 3px 20px 3px 20px;
    border: 1px solid #A4CDF2;
    background: #fff;
  }

  fieldset label {
    float: left;
    width: 120px;
    text-align: right;
    padding: 4px;
    margin: 1px;
  }

  fieldset div {
    clear: left;
    margin-bottom: 2px;
  }

  .input {
    width: 120px;
  }

  .enter {
    text-align: center;
  }

  
</style>
<body>
<div id="formwrapper">

  <form method="post" name="apForm" id="apForm">
    <fieldset>
      <legend>用户注册</legend>
      <p><strong>*的地方必须填写。</strong></p>
      <div>
        <label for="Name">用户名</label>
        <input type="text" name="Name" class="input" id="Name" size="20" maxlength="30"/>*(最少6个字符)<br/>
      </div>

      <div>
        <label for="password">密码</label>
        <input type="password" name="password" class="input" id="password" size="18" maxlength="15"/>*(最6个字符要有数字和字母)<br/>
      </div>
      <div>
        <label for="confirm_password">重复密码</label>
        <input type="password" name="confirm_password" class="input" id="confirm_password" size="18"
               maxlength="15"/>*<br/>
      </div>
      <div>
        <label for="sex">性别</label>
        <input type="radio" name="sex" id="sex"/>男
        <input type="radio" name="sex" id="sex"/>女<br/>
      </div>
      <div>
        <label for="Email">电子邮箱</label>
        <input type="text" name="Email" class="input" id="Email" size="20" maxlength="150"/>*<br/>
      </div>
      <div>
        <label for="age">年龄</label>
        <input type="number" name="number" class="input" size="4" maxlength="3" value="18"/><br/>
      </div>
      <div>
        <label for="AgreeToTerms">同意服务条款</label>
        <input type="checkbox" name="AgreeToTerms" id="AgreeToTerms" value="1"/>
        <a href="#" title="您是否同意服务条款">先看看条款？</a> *
      </div>
      <div class="enter">
        <input name="submit" type="submit" class="buttom" value="提交"/>
        <input name="reset" type="reset" class="buttom" value="重置"/></div>
    </fieldset>
  </form>
</div>
</body>
</html>
```

## CSS定位属性

### 正常流向

又称标准流，文档流。默认**由上而下、由左至右**

在正常流向中，块级元素在其父对象盒子中自上而下排列，行内元素按照由左至右的顺序排列

块元素：独占一行

行内元素：共享一行, 放不下时换行

```
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

```
top: auto | 长度 | 百分比;
bottom: auto | 长度 | 百分比;
right: auto | 长度 | 百分比;
left: auto | 长度 | 百分比;
```

### 定位属性position

须配合4个定位偏移属性left、right、top、bottom控制偏移量

```
position : static | relative | absolute | fixed | center | page | sticky;
```

**静态定位static**

遵循正常文档流，是所有元素**默认的定位方式**，此时4个定位偏移属性不会被应用

**相对定位relative**

不脱标，相对自己原来的位置移动

遵循正常文档流，基准位置为其在**正常文档流中的位置**

需要top、bottom、right、left属性配合完成，设定元素相对于原来位置的偏移量

相对定位一开始会按照“正常流向”来定位, 所有的盒子会先定好位置。一旦一个盒子按照正常流向得到自己的位置，它还可以相对该位置而偏移，这就是相对定位

```
position: relative;
top: 0;
left: 0;
right: 0;
bottom: 0;
```
```
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

```
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

```
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

```
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

```
z-index: auto | 数字;
```
```
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

```
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
```

## 裁切clip

```
clip：auto | rect(上裁切偏移量 右裁切偏移量 下裁切偏移量 左裁切偏移量)
```

裁切偏移量可以为auto，表示不裁切

```
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

```
visibility: visible | hidden | collapse;
```

visible：元素可见

hidden：元素隐藏，但元素保留其占据的原有空间，影响页面的布局

collapse：主要用来隐藏表格的行或列。隐藏的行或列能够被其它内容使用。对于表格外的其它对象，其作用等同于hidden

```
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

```
overflow：visible | hidden | scroll | auto ;
overflow-x：visible | hidden | scroll | auto ;
overflow-y：visible | hidden | scroll | auto ;
```

visible：溢出内容不处理，内容可能会超出容器

hidden：隐藏溢出内容且无滚动条

scroll：始终显示滚动条

auto：body元素和textarea的默认值。是否显示滚动条取决于内容是否溢出

```
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

```
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

```
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

```
float: none | left | right
```

none：设置本元素不浮动

left： 设置本元素浮在左边

right：设置本元素浮在右边

```
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

```
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

```
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}
```

#### **双伪元素法**

```
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

```
overflow: hidden
```
```
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

```
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

```
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

```
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

```

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

```

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

```

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

```
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

```
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

## CSS特性

### 优先级

通配符选择器 < 标签选择器 < 类选择器 < id选择器 < 行内样式 < !important

优先级计算规则：对于选中的某个元素：

- 从左向右依次比较选择器个数，同一级个数多的优先级高，如果个数相同，则向后比较
- `!important` 权重最高

### 层叠性

相同属性覆盖，不同属性叠加

### 继承性

如果父标签有文字样式，子标签将会继承父标签的文字样式

标签默认的文字样式会覆盖继承而来的文字样式，例如a标签

## **Emmet简写**

[Emmet Documentation](https://docs.emmet.io/)

## **CSS样式先后规范**

①布局与定位（文档流或位置）

②盒模型

③视觉效果（颜色/背景/边框）

④文字与样式

⑤交互与动画

## CSS扩展

### 颜色渐变

liner-gradient

radial-gradient

### 颜色透明

transparent

### 动画与变换

transform

# CSS过渡

# CSS动画
