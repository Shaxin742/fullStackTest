Function.prototype.mycall = function(context){
  context = context||window
  context[fn] = this
  let args = [...arguments]
  let result = context[fn](...args)
  delete context[fn]
  return result
}
var obj = {
   add:function(a,b){
    return a+b
  }
}
var ff = {a:1,b:2}
console.log(add.call(ff))

// function test(){
//   let data =[]
//   function on(){
//     if(!)
//   }
//   function emit(){

//   }
// }

二分法
eval 
