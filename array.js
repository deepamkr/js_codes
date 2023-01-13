const array =[1,2,3,4];
const array2=[];
const newArray =array.forEach((num) => array2.push(num*2));
console.log(array2);
//map transform the array 
////////////////////////////////////////
const mapArray= array.map(num =>
{
    return num*2;
});
////////////////////////////////////////
const mapArray2= array.map(num => num*2);
    
console.log('map',mapArray2);

//filter

const filterArray = array2.filter( num => num>5);
console.log("filter",filterArray);

//reduce
const reduceArray =array.reduce((accumulator,num)=>{
    return accumulator+num;
},0);

console.log('reduce',reduceArray);
