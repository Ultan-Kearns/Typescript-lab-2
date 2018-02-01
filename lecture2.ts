//Default return is of type:any
function echo(data:any):any
 {
     return data;
 }
 console.log(echo("Test"));
 console.log(echo("Test").length);
 console.log(echo(22));
 console.log(echo(22).length);

 //Takes type of any and returns type of any
 function betterEcho<T>(data:T)
 {
    return data;
 }
 console.log(betterEcho("Test"));
 console.log(betterEcho("Test").length);
 console.log(betterEcho(22));
 /*
 *console.log(betterEcho(22).length);
 *gives error due to generic type function
 */