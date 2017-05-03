# SeaFood
作爲個人基礎技能的整理，屬於非常簡易的CSS框架，仅可作为小型项目和个人练习的测试版。
**css使用sass编写，采用新语法格式。**
**文件分成：layout（布局样式）、myBase（基础样式表）、module（各个页面样式）。**

## layout（布局样式）
采用盒模型display:box.
### 列表
****
#### 方块列表
```
<div class="list-square">
    /*水平分布*/
    <div class="element">
         /*垂直*/
        <div class="top"></div>
        <div class="bottom"></div>
    </div>
    <div class="element"></div>
    <div class="element"></div>
</div>
```
| element | element | element |
| :----------- | :-----------  | :-----------  |
| top | top | top |
| top | top | top |
| bottom | bottom | bottom |
``.list-square``垂直居中，默认高度**8rem**，``.top``高度是``.bottom``的**两倍**。

#### 长方形列表
```
<div class="list-rectangle">
    /*水平分布*/
    <div class="element">
         /*垂直*/
        <div class="top"></div>
        <div class="bottom"></div>
    </div>
    <div class="element"></div>
    <div class="element"></div>
</div>
```
| element | element | element |
| :----------- | :-----------  | :-----------  |
| top | top | top |
| bottom | bottom | bottom |
``.list-square-normal``垂直居中，无默认高度，``.top``高度与``.bottom``高度**相等**。

#### 行列表
```
<div class="list-row">
    /*水平分布*/
    <div class="element">
         /*水平*/
        <div class="top"></div>
        <div class="bottom"></div>
    </div>
    <div class="element"></div>
    <div class="element"></div>
</div>
```
![](http://upload-images.jianshu.io/upload_images/4114841-25b09399ba789054.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
``.list-row``垂直居中，行高``45rem``.

#### 块（正常）
****
```
<div class="block-normal"></div>
```
``.block-normal``左右距离边缘``.05rem``，背景白色，圆角。

#### 大背景块
****
```
<div class="block-large"></div>
```
![](http://upload-images.jianshu.io/upload_images/4114841-5f576b68b6bb3956.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
``.block-large``红色背景图，宽度``94%``，高度``1.7rem``，``z-index:-1``.

#### 大背景块（正常）
****
```
<div class="block-rectangle"></div>
```
![](http://upload-images.jianshu.io/upload_images/4114841-c1a2313f6547df5d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
``.block-rectangle``红色背景图，宽度``100%``，高度``1.2rem``，``z-index:-1``.

#### 选项卡
****
```
<div class="tab"></div>
```
![](http://upload-images.jianshu.io/upload_images/4114841-b1bc1df9175c1ceb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

``.block-large``左右距离边缘``.2rem``，高度``.3rem``，**选中效果**``.check``.

### myBase（基础样式）
#### 字体
****
**大小**
* ``font-small`` //12px
* ``font-normal`` //14px
* ``font-large`` //16px
* ``font-big`` //24px

**加粗**
* ``font-bold``

**颜色**
* ``font-red`` //红色
* ``font-yellow`` //黄色

#### 状态
* 进行中
```
<div class="loading">
    <p class="font">文字</p>
    <div class="bg">背景</div>
    <div class="border">边框</div>
    <div class="icon">图标</div>
</div>
```
* 完成
```
<div class="complete">
    <p class="font">文字</p>
    <div class="bg">背景</div>
    <div class="border">边框</div>
    <div class="icon">图标</div>
</div>
```
* 失败/过期
```
<div class="overdue">
    <p class="font">文字</p>
    <div class="bg">背景</div>
    <div class="border">边框</div>
    <div class="icon">图标</div>
</div>
```

### 横幅
****
**父级需相对定位position:relative.**
```
<div class="my-column"></div>
```
![](http://upload-images.jianshu.io/upload_images/4114841-1a73b65c35e2dc40.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 间距
****
#### 内间距
* ``pl-5`` //左间距.05rem
* ``prl-5`` //左右间距.05rem
* ``prl-10`` //左右间距.1rem
* ``prl-20`` //左右间距.2rem
* ``pt-10`` //顶部间距.1rem
* ``pt-20`` //顶部间距.2rem
* ``pb-10`` //底部间距.1rem
* ``pb-10`` //顶部底部间距.1rem

**特殊内间距**
行/方块列表宽度太窄，则在``<div class="element"></div>``添加``.prl-2``或``.prl-7``.
#### 外间距
* ``ml-5`` //左间距.05rem
* ``mr-20`` //左间距.2rem
* ``mrl-5`` //左右间距.05rem
* ``mr-20`` //右间距.2rem
* ``mt-10`` //顶部间距.1rem
* ``mt-20`` //顶部间距.2rem
* ``mb-10`` //底部间距.1rem
* ``mb-10`` //顶部底部间距.1rem

#### 行间距
* ``my-space-10`` //左间距.1rem
* ``my-space-20`` //左间距.2rem
* ``my-space-30`` //左间距.3rem
* ``my-space-50`` //左间距.5rem
* ``my-space-70`` //左间距.7rem
* ``my-space-80`` //左间距.8rem

### 白色背景
****
```
<div class="bg-white"></div>
```

### 字数超出省略
****
```
<div class="ellipsis"></div>
```

### 顶部图标
****
#### 空格占据
```
//宽高.5rem
<div class="user-place"></div>
```
* 设置：``user-set``
* 站内信：``user-msg``
* 右箭头：``arrow-right``
* 首页显示：``user-eye``
* 首页隐藏：``user-eye-hide``
* 输入框显示：``user-eye``
* 首页隐藏：``user-eye-hide``

### 菜单图标
****
首页
* 签到：``my-days``
* 红包：``my-hb``
* 商城积分：``my-shop``
* 电影积分：``my-movie``
* 订单记录：``my-menu-order``
* 我的团队：``my-menu-team``
* 分享中心：``my-menu-share``
* 优惠券：``my-menu-coupons``
* 最新公告：``my-menu-notice``
* 财务中心：``my-menu-withdraw``
* 账户设置：``my-menu-set``
* 更多：``my-menu-more``
* 签约领导人：``my-menu-leader``

### 分页
* （总）提现中心：``my-menu-extract``
* （分）提现：``my-sub-extract``
* 提现记录：``my-menu-record``
* 提现方式：``my-menu-type``
* （总）转账中心：``my-menu-transfer``
* （分）转账：``my-sub-transfer``
* 出账记录：``my-sub-post``
* 入账记录：``my-sub-chargeOff``
* （总）奖金中心：``my-menu-bonus``
* 转账到账户余额：``my-sub-tranMember``
* 转账给会员：``my-sub-tranOther``
* 转账记录：``my-sub-tranRecord``
* 资产明细：``my-menu-detail``

### 收款方式图标
****
* 快钱：``my-kq``
* 支付宝：``my-zfb``
* 微信：``my-wx``
* 银联：``my-yl``

### 登陆框图标
****
```
<div class="login">
    <div class="phone">手机图标</div>
</div>
```
* 手机：``phone``
* 密码：``psw``
* 验证码：``val``
* 省市区：``site``
* 下箭头：``down``
* 身份证：``id``
* 真实姓名：``name``
* 照片：``camera``

### 按钮
****
* 正常按钮（红色）：``btn-normal``
* 边框按钮（红色）：``btn-border``

### 通知
****
```
<div class="my-inform">
    <div class="title">
        标题
        <div class="red">标题红色小方块</div>
        <div class="yellow">标题黄色小方块</div>
    </div>
    <em>加粗字</em>
</div>
```
### 常见问题
****

```
<div class="my-question">
    <div class="title">
        标题
        <div class="red">标题红色小方块</div>
        <div class="yellow">标题黄色小方块</div>
    </div>
    <div class="element">
         问题1
        <div class="arrow-right"></div>//右箭头
    </div>
    <div class="element">
        问题2
        <div class="arrow-right"></div>//右箭头
     </div>
    <div class="element">
        问题3
        <div class="arrow-right"></div>//右箭头
    </div>
</div>
```
### 输入框
****

```
<div class="my-input">
    //选项列表
    <select class="element">
       <option selected="selected">默认提示</option>
       <option>选项1</option>
       <option>选项1</option>
     </select>
    <div class="element list-row noBot">输入行 无底部间距</div>
    <div class="element list-row">
        <label class="element" for="">名称</label>
        <input class="element num" type="text" name="" >//输入行
    </div>
    <div class="element list-row num">
        <label class="element" for="">名称</label>
        <input class="element num" type="number" >//只可以输入数字，打开手机数字键盘
    </div>
    <div class="element list-row safePsw">//安全密码
        <label class="element" for="">名称</label>
        <input class="element num" type="text" name="" >
    </div>
</div>
```

### 折角
****

```
<div class="my-bevel"></div>
```

### 分页符
****

```
<div class="list-page">
    <a href="">上一页</a>
    <a href="">1</a>
    <span class="check">当前页</span>
    <a href="">3</a>
    <a href="">4</a>
    <a href="">下一页</a>
</div>
```

### 顶部通知
****

```
<div class="inform">
    <i></i>单行通知
</div>

<div class="inform">
    <i></i>多行通知
</div>
```
