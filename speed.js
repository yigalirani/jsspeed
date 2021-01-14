'use strict'
function make_func_array(size){
  function f1(w){
    w.val+=1
  }
  function f2(w){
    w.val+=10
  }
  var ans=[]
  for (let i=0;i<size;i++){
    ans.push(f1)
    ans.push(f2)    
  }
  return ans
}

function run_ar(ar,val){
  var w={val}
  var n=ar.length
  for(let i=0;i<n;i++){
    ar[i](w)
  }
  return w.val
}

var ar=make_func_array(10)
var ans=run_ar(ar,3)
console.log('ans',ans)

function time(){
  return new Date().getTime()
}
function many_runs(iter,ans,ar){
  for (let i=0;i<iter;i++){
    ans=run_ar(ar,ans)
  }
  return ans  
}
function run_it(){
  var start=time();
  var size=10000
  var iter=10000
  var ar=make_func_array(size)
  var ans=many_runs(iter,0,ar)
  var elapsed=time()-start
  var oper=size*iter*2
  var milpersec=oper/elapsed/1000
  console.log(ans)
  return {ans,elapsed,oper,milpersec}
}