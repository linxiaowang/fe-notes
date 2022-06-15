### Reactive
通常绑定复杂数据类型,且访问值时不需要 `xxx.value` 来获取

基础用法
```javascript
let message = reactive({title: 'hello'})
message.title = 'wowrld'
```

数组异步赋值问题
这样赋值页面不变，因为会脱离响应式
```javascript
let person = reactive<number[]>([])
setTimeout(() => {
  person = [1,2,3]
  console.log(person)
}, 1000);
```

解决方法

1. 使用push
```javascript
setTimeout(() => {
  person.push(...[1,2,3])
}, 1000);
```

2. 包裹一层对象
```typescript
type Person = {
  list?:Array<numner>
}

let person = reactive<Person>({
  list: []
})
setTimeout(() => {
  person.list = [1,2,3]
}, 1000);
```

### readonly
拷贝一份proxy对象将其设置为只读
```javascript
const person = reactive({count: 1})
const copy = readonly(person)

```

### shallowReactive

```javascript
const obj = {
  a: 1,
  first: {
    b: 2,
    second: {
      c: 3
    }
  }
}

const state = shallowReactive(obj)

function change1(){
  state.a = 1
}

function change2(){
  state.first.b = 8
  state.first.second.c = 2
  console.log(state);
}
```
