let strArray:Array<string> = [];
addTask("Hello");
addTask("h");
addTask("h");
listAllTasks();
deleteTask("Hello");
listAllTasks();
function addTask(task:string)
{
    strArray.push(task);
    console.log("Pushed " + task + " to array\nNumber of elements in array after insertion: " + strArray.length);
}
function listAllTasks()
{
    for(let x:number = 0; x < strArray.length; x++)
    {
        console.log("\n\nString at position: " + x + " is equal to: " + strArray[x]);
    }
    if(strArray.length == 0)
    {
        console.log("\nNo elements in array");
    }
}
function deleteTask(task:string)
{   
    let key : string = task;
    let index: number = task.indexOf(key,0);
    if(index > -1)
    {
        strArray.splice(index,1);
    }
    console.log("Removed string " + task + " at index: " + index);
}