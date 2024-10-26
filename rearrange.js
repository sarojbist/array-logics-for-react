// You are given an array of objects representing tasks in a to-do list. Each task has an id, description, and priority. Your goal is to rearrange tasks in the array so that they appear in a specific order, based on user actions.


const tasks = [
    { id: 1, description: "Wash the car", priority: "Low" },
    { id: 2, description: "Prepare presentation", priority: "High" },
    { id: 3, description: "Grocery shopping", priority: "Medium" },
    { id: 4, description: "Call the doctor", priority: "High" },
];

function moveTask(arr, id, moveto) {
    // lets get the index of given id
    const indexofId = arr.findIndex((item) => item.id === id);
    if (indexofId === -1) return;

    // remove the item from its position
    const removedItem = arr.splice(indexofId, 1);

    //add item in the provided index
    arr.splice(moveto, 0, removedItem[0])

}

// Calling moveTask with taskId 2, moving it to index 3
moveTask(tasks, 2, 3);

console.log(tasks);