### typeof 类型守护
```ts
  function padLeft(padding: number | string, input: string){
    if(typeof padding === 'number'){
      return new Array(padding + 1).join('') + input
    }
    return padding + input
  }

```

### 真值缩小：条件、&&、||、if语句、布尔否定
```ts
  function printAll(strs: string | string[] | null){
    if(strs && typeof strs === 'object' ){
      //...
    }else if(type of strs = 'string'){
      //...
    }else{

    }
  }
```
### 等值缩小
```ts
  function example(x: string | number, y: string| boolean){
    if(x === y){
      x.toUpperCase()
      y.toUpperCase()
    }else{
      //...
    }
  }
```

### in 操作符缩小
```ts
  type Fish = { swim: ()=>void }
  type Bird = { fly: ()=>void }
  type Human = { swim?: ()=>void, fly?: ()=>void }

  function move(animal: Fish | Bird | Human){
    if( 'swim'  in animal) {
      // fish | human
      return (animal as Fish).swim()
    }

    return (animal as Bird).fly()
  }
```

### instanceof 操作符缩小
```ts
  function logValue(x: Date | string){
    if(x instanceof Date){
      console.log(x.toUTCString())
    }else{
      console.log(x.toUpperCase())
    }
  }
```

### 分配缩小
```ts
  // x: string | number
  let x = Math.random() < 0.5 ? 1 : 'less than 0.5'
```

### 控制流分析
```ts
  function example(){
    let x: string | number | boolean

    x = Math.random() < 0.5
    // x: boolean

    if(Math.random < 0.5){
      x = 'hello'
      // x: string
    }else{
      x = 100
      // x:number
    }
    return x
  }

  let x = example()
  x = 'hello'
  x = false // 报错  x为 string | number
```

