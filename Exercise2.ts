let strArray:Array<string> = [];
addTask("Hello");
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
}
function deleteTask(task:string)
{
    for(let x: number = 0; x < strArray.length; x++)
    {
        if(strArray[x] == task)
        {
            console.log("String: " + strArray[x] + 
            " removed from array\n");
            strArray.splice(x);
            console.log("Number of elements in array after deletion: " + strArray.length);
        }
    }
}