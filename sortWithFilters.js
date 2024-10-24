// Given an array of user data, how would you first filter the data based on a criterion and then sort the resulting filtered data?
// Create a function that combines both filtering and sorting in a single function call.



const users = [
    { id: 1, name: 'Alice', age: 25, active: true },
    { id: 2, name: 'Bob', age: 40, active: false },
    { id: 3, name: 'Charlie', age: 22, active: true },
    { id: 4, name: 'David', age: 35, active: false },
    { id: 5, name: 'Eve', age: 28, active: true },
];

function filterAndSort(status, age) {
    const filtered = users.filter((user) => user.active === status);
    console.log(filtered)

    const abc = filtered.sort((a, b) => {
        if (age === "asc") {
            return a.age - b.age
        }
        else if (age === "des") {
            return b.age - a.age
        }

    })
    console.log(abc)

}
filterAndSort(true, age = "des")
// first argument can be true or false which is active and secpnd argument is sorting based on user input i.e asc pr des
// Imaging this same function is added to different buttons in our project with different arguments