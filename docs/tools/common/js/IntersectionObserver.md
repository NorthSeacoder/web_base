
## 常见方法

判断元素在在当前窗口是否可见最普遍的方法一般为利用getBoundingClientRect()方法获取元素的大小及其相对于视口的位置,然后用元素的 top,bottom,right,left 与 window比对来验证,即:

```js
const isInView = (el) => {
    if (!el) return false;

    const elRect = el.getBoundingClientRect();

    return elRect.top < window.innerHeight 
        && elRect.bottom > 0 
        && elRect.right > 0 
        && elRect.left < window.innerWidth;
}

```
### 不足

 - 可以简单判断元素是否在视区(viewport)内,但是无法处理元素在视区内但却被其他元素遮挡这一情况
 - getBoundingClientRect()在主线程上执行,频繁触发会引起性能问题

## IntersectionObserver

Intersection Observer API提供了一种异步检测目标元素与祖先元素或 viewport 相交情况变化的方法,目前除了 ie 以外的主流浏览器支持率较为良好  

![兼容性](https://e.im5i.com/2020/10/15/2abfd80e0d4df94c177fd4f2e4d789d1.png)   

### 用法

```js
//构造观察器
const observer = new IntersectionObserver(callback,options);

//监听相应元素
observer.observe(element);
//停止监听特定元素
observer.unobserve(element);
//停止监听
observer.disconnect();
//获取所有观察目标
observer.takeRecords()
```

