function add(n1:number,n2:number):number{
    return n1 + n2;
}
console.log(add(2,1));
//lambda function takes 2 numbers and returns sum
let ans:number = (x:number,y:number) => {return x + y};
let screenWrite = () => {console.log("Hello")};
screenWrite();