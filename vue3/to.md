### toRef 
如果原始对象是非响应式的就不会更新视图，数据是会变的

```javascript
const obj = {
  foo: 1,
  bar: 2
}

const state = toRef(obj, 'bar')
//bar 转化为响应式对象

const change = () => {
  state.value++
  console.log(obj, state);
}

```
如果原始对象是响应式的是会更新视图并且改变数据的

### toRefs
批量创建ref对象-方便解构使用
```javascript
const obj = {
  foo: 1,
  bar: 2
}

const {foo, bar} = toRefs(obj)

foo++
bar++
```

### toRaw
将响应式对象转化为普通对象
```javascript
const obj = reactive({
  foo: 1,
  bar: 2
})

const state = toRaw(obj)

```
