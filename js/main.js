console.log("Hello World!");

  const navLinks = document.querySelectorAll('.nav-links a');
  const menuToggle = document.getElementById('menu-toggle');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.checked = false; // uncheck the menu
    });
  });

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    panels.forEach(p => p.classList.remove('active'));
    panel.classList.add('active');
  });
});


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
