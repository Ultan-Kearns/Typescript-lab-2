"use strict";
exports.__esModule = true;
var Exercise = /** @class */ (function () {
    function Exercise() {
        this.strArray = [];
    }
    Exercise.prototype.addTask = function (task) {
        this.strArray.push(task);
        console.log("Pushed " + task + " to array\nNumber of elements in array after insertion: " + this.strArray.length);
    };
    Exercise.prototype.listAllTasks = function () {
        for (var x = 0; x < this.strArray.length; x++) {
            console.log("\n\nString at position: " + x + " is equal to: " + this.strArray[x]);
        }
        if (this.strArray.length == 0) {
            console.log("\nNo elements in array");
        }
    };
    Exercise.prototype.deleteTask = function (task) {
        var key = task;
        var index = task.indexOf(key, 0);
        if (index > -1) {
            this.strArray.splice(index, 1);
        }
        console.log("Removed string " + task + " at index: " + index);
    };
    return Exercise;
}());
var exerciseObject = new Exercise();
exerciseObject.addTask("Hi");
exerciseObject.listAllTasks();
exerciseObject.deleteTask("Hi");
exerciseObject.listAllTasks();
