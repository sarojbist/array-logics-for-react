// Table Row Selection:
// Write a function that allows users to delete the selected row in a table. 

// <----------------Method 1 ------------------>
// <----------------Index and splice logic------------------>

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

// function deleteRow(obj) {
//     // lets say we don't want to change original array by splicing.
//     const tempItems = [...items];
//     const indexofArray = tempItems.indexOf(obj)

//     tempItems.splice(indexofArray, 1)
//     console.log(tempItems) //in react, we can pass this to state variable
// }

// deleteRow(items[1]);
// //mimic of item from map in react
// console.log(items)



// <----------------Method 2------------------>
// <----------------Filter Logic------------------>
function deleteRow(obj) {

    // we can filter on the basis of obj.id
    const filteredArr = items.filter((item) => item.id != obj.id);
    console.log(filteredArr);
}
deleteRow(items[1]);