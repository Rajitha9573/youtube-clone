
/////     Map polyfill  


// delete Array.prototype.map;


// Array.prototype.map=function(callbackfn){
//     let res=[];
//     for(let i=0; i<this.length; i++){
        
//            res.push(callbackfn(this[i]));
        
//     }
//     return res;
// }

// let Arr = [1,2,3,4];

// let newarr=Arr.map((item)=>{
//     return item*3;
// })
// console.log(newarr);




//////// filter polyfill



// delete Array.prototype.filter;


// Array.prototype.filter=function(callbackfn){
//     let res=[];
//     for(let i=0; i<this.length; i++){
//         if(callbackfn(this[i])){
//            res.push(this[i]);
//         }
//     }
//     return res;
// }

// let Arr = [1,2,3,4];

// let newarr=Arr.filter((item)=>{
//     return item%2==0;
// })
// console.log(newarr);




/////// Reduce of polyfill



// let Arr = [1,2,3,4]; 

// const newArray = Arr.reduce((accu, curr)=>
//     accu+curr, 0)
// console.log(newArray)

// delete Array.prototype.reduce;

// Array.prototype.reduce= function(callback, initialValue){
//     accumalator = initialValue;
//     for(let i=0; i<this.length; i++){
//         accumalator=callback(accumalator. this[i])
//     }
//     return accumalator;
// }




///////          call of polyfill



// let object= {
//     name:"Rajitha",
//     village:"lgmpl",
    

// }
// function getFunc(town){
//     console.log(`my name is ${this.name} from ${town}`);
// }

// // console.log(getFunc.call(object));

// delete Function.prototype.myCall;

//  Function.prototype.myCall = function(context={}, ...args){
// context.fn=this;
// context.fn(...args);
// }
// getFunc.myCall(object, "hnk");



///////    apply

// let object= {
//     name:"Rajitha",
//     village:"lgmpl",
    

// }
// function getFunc(town, age){
//     console.log(`my name is ${this.name} from ${town} and ${age} old` );
// }

// // console.log(getFunc.call(object));

//  //delete Function.prototype.myCall;

//  Function.prototype.myApply = function(context={}, args=[]){
// context.fn=this;
// context.fn(...args);
// }
// getFunc.myApply(object, ["hnk", 24]);



//////       bind method





let object= {
        name:"Rajitha",
        village:"lgmpl",
        
    
    }
    function getFunc(town){
        console.log(`my name is ${this.name} from ${town}`);
    }
    
    // console.log(getFunc.call(object));
    
    // delete Function.prototype.myCall;
    
     Function.prototype.mybind = function(context={}, ...args){
    context.fn=this;

    return function (...newArgs){
     return context.fn(...args, ...newArgs);
    }
    }
    let newFunction = getFunc.mybind(object, "hnk");
    console.log(newFunction());