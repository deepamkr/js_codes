
let person={
    name:'deepam',
    age: 30
};

person.name='Deepam';

let selection='name';
person[selection]='Deepam'
console.log(person.name)

//////////////////////////////////////
let array=['red','green'];
console.log(array)
///////////////////////////////////
// array is an object in js

//functions
////////////////////////////////////

function greet()
{
    console.log('hello world');
}
greet();
////////////////////////////////////////////////

//variables #constant #primitve type(string.number,boolean,undefined,null)
// #dynamic type( type of variable can change)
//reference type(object, array, function)

var name='deepam';
if(name=='deepam')
{
    alert("HI Deepam!!!");
}