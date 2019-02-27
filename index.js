//Your code here
function justInvoke(cb) {
  return cb();
};

function setThisWithCall(cb, thisValue, arg) {
  return cb.call(thisValue, arg);
};

function setThisWithApply(cb, thisValue, arg) {
  return cb.apply(thisValue, arg );
};

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return returnFunction = functionToBeCopied.bind(thisValue);
};
