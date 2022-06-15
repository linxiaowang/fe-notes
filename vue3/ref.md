### Ref<type>
指定数据类型
`let message: Ref<string> = ref('hello there') ` 

### isRef
判断数据是否为 ref 类型

### shallowRef
```javascript
let message = shallowRef({
  name: 'nihao'
})

const changeMsg = () => {
  message.value.name = 'bad' // no use
  message.value = { name: 'good'} // effect
}
```

### triggerRef
```javascript
let message = shallowRef({
  name: 'nihao'
})

const changeMsg = () => {
  message.value.name = 'bad' // no use
  triggerRef(message) // 强制更新dom
}
```

### customRef
```javascript
function MyRef<T>(value: T){
  customRef((trank, trigger)=>{ 
    return {
      get(){
        trank()
        return value
      },
      set(newVal: T){
        value = newVal
        trigger()
      }
    }
  })
}

let message = MyRef<string>('nihao')

const changeMsg = () => {
  message.value = 'goods'
}
```
