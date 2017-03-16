# callWithName
##### Mini JS library for calling functions without use of ()
If you ever want to call any function without the use of appending '()' at the end of it then this libray will be useful.

## Example:
````
count //instead of count()
someObject.getName // indtead of someObject.getName()
````
## How To Use

**callWithName(name, function, options)**
- name     : the name by which you want to identity and call the function.
- function : the function to be called by the given name.
- options  : contains values for context and return value 

````
function showError(){
  alert("Something went wrong");
}
callWithName("showError", showError);

//use like
showError;
//instead of
showError();

````

same can be done by passing the function annonymously

```
callWithName("showError", function(){
  alert("Something went wrong");
});

```

context can also be passed 

````
var obj = {a:1,b:2};
callWithName('printA', function(){console.log(obj.a)},{contenxt:obj});
````
