# CSS 基础、选择器与文本

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
