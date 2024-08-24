let myVarAny: any;
myVarAny = 1;
myVarAny = 'text';
myVarAny = true;
myVarAny = {};
// Using any no error shows because the type can be any
myVarAny.doSomething();
myVarAny.toUpperCase();

// Using Unknow type I can still assigned any value type
let myVarUnknow: unknown;
myVarUnknow = 1;
myVarUnknow = 'text';
myVarUnknow = true;
myVarUnknow = {};

// But i can execute native methods of the type witouth checking the real type of the variable
// myVarUnknow.doSomething();
if (typeof myVarUnknow === 'string') {
  myVarUnknow.toUpperCase();
}
