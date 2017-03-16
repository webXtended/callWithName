/*!
 * CallWithName v1.0
 *
 * Copyright 2015, Himanshu Tanwar
 * Released under the MIT license
 * https://github.com/webXtended/callWithName
 * Date: 2017-03-16
 */
var callWithName = function(name, fn, options){
    var context,errorMsg,nameType = typeof name, fnType = typeof fn;
    options = options || {};
    if(nameType === 'string' && fnType === 'function'){
        context = options.context || window;
        context[name] = fn;
        context[name].toString = function(){
            var sendBack = fn.call(context);
            return sendBack || options.returnValue ||undefined;
        }
    }else{
        errorMsg = [];
        errorMsg.push("cannot assign");
        errorMsg.push(nameType);
        errorMsg.push("to a");
        errorMsg.push(fnType);
        console.error(errorMsg.join(" "));
        console.info("Pass a string for name and a function to associate it with the name");
        console.info("for more details visit https://github.com/webXtended/callWithName");
    }
};
