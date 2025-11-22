console.log("Hello World!");

// Task 1: Full name
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getFullName("Rohit", "Sharma"));

// Task 2: Mean
function findMean(numbers) {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return sum / numbers.length;
}
console.log(findMean([10, 20, 30]));

// Task 3: Right tree
function printRightTree(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(i - 1) + i);
    }
}
printRightTree(5);
