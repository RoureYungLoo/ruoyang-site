# CSS 背景、表格与表单

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

```css
/* 背景色 */ 
background-color: color_name | RGB | HSL;
```
```html
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

```css
background-image: none | url("path/to/img.png");
/* 背景图 */
background-image: url("image.png");
```
```html
<style >
body {
    background-image:url(images/bg1.gif);      /*设置页面背景图像*/
}
</style>
```

### 背景图像重复background-repeat

```css
/* 背景图平铺 */
background-repeat: repeat | no-repeat | repeat-x | repeat-y| space | round;
```

repeat：默认值，背景图像在横向和纵向平铺。

no-repeat：背景图像不重复。

repeat-x：背景图像仅在水平方向平铺。

repeat-y：背景图像仅在垂直方向平铺。

round：背景图像自动缩放直到适应且填充满整个容器。

space：背景图像以相同的间距平铺且填充满整个容器或某个方向。

```html
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

```css
background-attachment : scroll | fixed | local;
/* 背景图固定 */
background-attachment: fixed | scroll;
```

fixed：背景图像相对于窗体固定。

scroll：背景图像相对于元素固定，当元素内容滚动时背景图像不会跟着滚动

local：背景图像相对于元素内容固定，当元素随元素滚动时背景图像也会跟着滚动

```html
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

```css
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

```html
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

```css
background-origin : padding-box | border-box | content-box;
```

padding-box：从padding区域（含padding）开始显示背景图像

border-box：从border区域（含border）开始显示背景图像

content-box：从content区域开始显示背景图像

```html
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

```css
background-size:长度|百分比| auto | cover | contain;
/* 背景图大小 */
background-size: cover | contain | 百分比 | 像素数;
```

长度、百分比提供1个值时，表示宽度，等比缩放

长度、百分比提供2个值时，表示宽度、高度

auto：背景图像的真实大小。

cover：图片覆盖容器

contain：容器包裹完整图片

```html
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

```css
background-clip: border-box | padding-box | content-box | text;
```

border-box：默认值，不会发生裁剪。

padding-box：超出padding区域也就是border区域的背景将会被裁剪。

content-box：从content区域开始向外裁剪背景，即border和padding区域内的背景将会被裁剪掉。

text：从前景内容的形状（比如文字）作为裁剪区域向外裁剪，如此即可实现使用背景作为填充色之类的遮罩效果

```html
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

```css
background: linear-gradient(方向/角度, 颜色1 [长度/百分比], 颜色2 [长度/百分比], ...)
```

方向：

to left：往左渐变

to right：往右渐变

to top：往上渐变

to bottom：往下渐变

长度/百分比：**指定起止色位置**

```html
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

```css
/* 复合属性 */
background: 背景色 背景图 背景图平铺方式 背景图位置/背景图缩放  背景图固定 ;
```

### 多背景

```css
background:
        url(images/1.jpg) no-repeat top left,
        url(images/2.jpg) no-repeat top right,
        url(images/3.jpg) no-repeat bottom left,
        url(images/4.jpg) no-repeat bottom right,    
        url(images/5.jpg) no-repeat center center;
```

### 背景透明度

```css
opacity: 0.0-1.0;
```
```html
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

```css
width: 合适的值;
height: 合适的值;
background: url(URL) no-repeat 负X偏移量  负Y偏移量;
```

## CSS字体图标

iconfont

阿里妈妈字体库

## CSS美化表格

```html

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
```html

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
```html
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
```html
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

```html
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
```html

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
