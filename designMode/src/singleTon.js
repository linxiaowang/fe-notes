const SingleTon = fucntion(name){
  this.name = name
  this.instance = null
}

SingleTon.prototype.getName = function(){
  return this.name
}

SingleTon.getInstance = function(name){
  if(!this.instance){
    this.instance = new SingleTon(name)
  }
  return this.instance
}


const CreateDiv = (function(){
  let instance;
  const CreateDiv = function(html){
    if(instance){
      return instance
    }
    this.html = html
    this.init()
    return instance = this
  }

  CreateDiv.prototype.init = function(){
    const div = document.createElement('div')
    div.innerHTML = this.html
    document.body.appendChild(div)
  }
  return CreateDiv
})()

var a = new CreateDiv( 'sven1' );
var b = new CreateDiv( 'sven2' ); 
alert ( a === b );     // true 


const CreateDivProxy = function(html){
  this.html = html
  this.init()
}

CreateDivProxy.prototype.init = function(){
  const div = document.createElement('div')
  div.innerHTML = this.html
  document.body.appendChild(div)
}

const proxySingletonCreateDiv = (function(){
  let instance
  return function(html){
    if(!instance){
      instance = new CreateDivProxy(html)
    }
    return instance
  }
})()

var a = new ProxySingletonCreateDiv( 'sven1' ); 
var b = new ProxySingletonCreateDiv( 'sven2' ); 
 
alert ( a === b );

