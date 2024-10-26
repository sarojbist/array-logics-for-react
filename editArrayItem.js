//Suppose you have array of objects, you need to create a function that takes the id given by the user and then, change the status of the given object inside array.

const arr = [
    { id: 1, content: "Card 1", status: "start" },
    { id: 2, content: "Card 2", status: "start" },
    { id: 3, content: "Card 3", status: "start" },
    { id: 4, content: "Card 4", status: "start" },
]
// I want to give id and status of given id should be changed to "end"

function editArr(id) {
    const newArr = [...arr]
    newArr.map((item) => {
        if (item.id === id) {
            console.log(arr.indexOf(item)) //show index of the given item
            item.status = "end"
        }
    })
    console.log(newArr)
}
editArr(3);