# WxAddressPicker
微信小程序 自定义组件 三级联动 多列选择器 自关联 对象数组 ObjectArray 
![](https://github.com/layasntx/WxAddressPicker/blob/master/show.gif)
## 使用方法
### 在 Page.json 注册组件
~~~
{
  "usingComponents": {
    "address-picker": "/component/address-picker/address-picker"
  }
}
~~~
### 在 Page 布局中引用组件
~~~
<address-picker my-class="Red" ids="{{ids}}" bind:onChange="onChange" bind:onColumnChange="onColumnChange">
  <text slot="content">你的地址是：</text>
</address-picker>
~~~
#### 通过 my-class 修改 picker 样式  
#### slot="content" 在 picker 之前插入文字或其他内容
#### 数据源直接放在组件 data 的 allDatas 中，也支持通过属性 dataset 导入  
#### 通过 ids 指定 默认选项  
~~~
data: {
  ids: [5, 220, 1896]
},
~~~
