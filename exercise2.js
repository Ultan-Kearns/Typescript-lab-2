var strArray = [];
addTask("Hello");
addTask("h");
addTask("h");
listAllTasks();
deleteTask("Hello");
listAllTasks();
function addTask(task) {
    strArray.push(task);
    console.log("Pushed " + task + " to array\nNumber of elements in array after insertion: " + strArray.length);
}
function listAllTasks() {
    for (var x = 0; x < strArray.length; x++) {
        console.log("\n\nString at position: " + x + " is equal to: " + strArray[x]);
    }
}
function deleteTask(task) {
    var key = task;
    var index = task.indexOf(key, 0);
    if (index > -1) {
        strArray.splice(index, 1);
    }
}
