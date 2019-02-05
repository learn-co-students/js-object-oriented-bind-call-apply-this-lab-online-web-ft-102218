//Your code here
function justInvoke(fn) {
//  The function simply invokes the function passed through to it. 
//  It also returns the return value of the passed through function.
  return fn();
}
function setThisWithCall(fn, thisValue, arg) {
//  The function again invokes the function passed to it, 
//  but uses the call method to return the function's this value. 
//  (Make sure to correctly pass the third argument!)
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args) {
  //  Again, invoke the function passed to it, change the this value 
  //  of that function passed to it. In addition, we ask you to invoked
  //  the passed function with arguments. You should accomplish all of 
  //  the above by using apply.
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
}