const numbers = [1, 2, 3];
const doubleNumber = numbers.map(num => num  * 2);
// console.log(doubleNumber)

const employees = [
    { name: 'Ali', age: 25, salary: 3000 },
    { name: 'Aslam', age: 35, salary: 5000 },
    { name: 'Saleem', age: 28, salary: 4000 },
    { name: 'Javeed', age: 40, salary: 6000 }
];

const increaseSalary=  employees.map(employee => {
    if (employee.age < 30) {
        return {
          ...employee,
          salary: employee.salary * 1.2
        };
      } else {
        return employee;
      }
})

console.log(increaseSalary)
  

////////////////Filter/////////////////////
const number = [15, 9, 30, 45,21, 22, 27, 75];
const less30 =number.filter(n=> (n%3===0 && n%5!==0))
console.log(less30)

//////////////////////////////////////////////////