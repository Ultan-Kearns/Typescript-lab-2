import {exerciseInterface} from "./Interface"
class Exercise implements exerciseInterface
{
    strArray:Array<string> = [];
    addTask(task:string)
    {
        this.strArray.push(task);
        console.log("Pushed " + task + " to array\nNumber of elements in array after insertion: " + this.strArray.length);
    }
    listAllTasks()
    {
        for(let x:number = 0; x < this.strArray.length; x++)
        {
            console.log("\n\nString at position: " + x + " is equal to: " + this.strArray[x]);
        }
        if(this.strArray.length == 0)
        {
            console.log("\nNo elements in array");
        }
    }
    deleteTask(task:string)
    {
        let key : string = task;
        let index: number = task.indexOf(key,0);
        if(index > -1)
        {
            this.strArray.splice(index,1);
        }
        console.log("Removed string " + task + " at index: " + index);
    }
}
let exerciseObject = new Exercise();
exerciseObject.addTask("Hi");
exerciseObject.listAllTasks();
exerciseObject.deleteTask("Hi");
exerciseObject.listAllTasks();