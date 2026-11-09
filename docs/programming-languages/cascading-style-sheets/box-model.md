---
title: CSS 盒模型
order: 20
---

# CSS 盒模型

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

```css
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

```css
border-image-source: none | url(图像路径);
```

图片不能正常显示时会使用border-style

### 2. border-image-slice属性

控制对象的边框图像的切片方式，属性可以是1-4个数字或百分比，也可以增加一个fill关键字。

```css
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

```css
border-image-width：[ 长度值 | 百分比 | 浮点数 | auto ]{1,4}
```

语法说明：

值可以是1~4个长度值、百分比、浮点数或者关键字auto，这4个值用来指定边框图片区域相对于上、右、下、左4个侧边的厚度。

如果第4个值不存在，它会等同于第2个值；如果第3个值不存在，它会等同于第1个值；如果第2个值不存在，它会等同于第1个值。

auto表示边框图片的厚度为图片分割后切片的宽度或高度，即和border-image-slice的值相同。

### 4. border-image-repeat属性

该属性用于指定边框图像的填充方式。可定义0~2个参数值，即水平和垂直方向。如果2个值相同，可合并成1个，表示水平和垂直方向都用相同的方式填充边框背景图；如果2个值都为stretch，则可省略不写。

```css
border-image-repeat：[ stretch | repeat | round | space ]{1,2}
```

语法说明：

stretch：指定用拉伸方式来填充边框图像。

repeat：指定用平铺方式来填充边框图像。当图片遇到边界时，如果超出则被截断。

round：指定用平铺方式来填充边框图像。图片会根据边框的尺寸动态调整图片的大小直至正好可以铺满整个边框。

space：指定用平铺方式来填充边框图像。图片会根据边框的尺寸动态调整图片之间的间距直至正好可以铺满整个边框。目前主流浏览器几乎都不支持space关键字。

### 5. border-image-outset属性

 该属性用于指定边框图像向外扩展所定义的数值，即如果值为10px，则图像在原本的基础上往外延展10px再显示。

```css
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

```html
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

```css
box-shadow: none | 阴影1 [ , 阴影2，... ];
```

阴影 = [inset] 水平偏移量 垂直偏移量 [阴影模糊半径] [阴影扩展半径] [阴影颜色]

none：没有阴影。

inset：内部阴影，没有该值，则对象的阴影为外部阴影

```html
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
