# Plugin

## Toast 提示

用于主动操作后的反馈

### 不同状态
   有三种不同 toast
   
<template>
	<n-button  @click="success">success</n-button>
	<n-button @click="error">error</n-button>
	<n-button @click="info">info</n-button>
</template>

<script>
export default {
	methods:{
		success(event) {
			const vm = this;
			vm.$toast.success('success')
        },
		error(event) {
			const vm = this;
			vm.$toast.error('error')
        },
		info(event) {
			const vm = this;
			vm.$toast.info('info')
        },
	}
}
</script>

### usage

```js
vm.$toast.success('success');
vm.$toast.error('error');
vm.$toast.info('info');
```

## Modal 弹框

模拟系统的消息提示框而实现的一套模态对话框组件

### 基础使用

### 不同状态

### usage
