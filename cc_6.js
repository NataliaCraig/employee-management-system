//create base class
class Employee {
    constructor(name, department, level = "Associate") {
        this.name = name;
        this.department = department;
        this.level = level; }
        
describe() {
return `${this.name} works in ${this.department}`
 }
}

// create subclass
class Manager extends Employee {
constructor(name, department, level = "Manager", teamSize) {
super(name, department, level);
this.teamSize = teamSize; }

    describe() {
        return `${this.name} | ${this.level} | ${this.department}`;
    }
 isExecutiveLevel() {
        return this.teamSize >= 10;
    }
}
//create employee objects
const emp1 = new Employee("Natalia", "Marketing");
const emp2 = new Employee("Alicia", "Finance", "Director");

//create manager objects
const mgr1 = new Manager("Sophia", "Sales", "Manager", 8);
const mgr2 = new Manager("Liam", "Operations", "Manager", 12);

console.log(emp1.describe());
console.log(emp2.describe());
console.log(mgr1.describe());
console.log(mgr2.describe());

// test subclass method
console.log(mgr1.isExecutiveLevel()); // false
console.log(mgr2.isExecutiveLevel()); // true

// Create Company class
class Company {
constructor() {
this.employees = [];
}

addEmployee(employee) {
this.employees.push(employee);
}

listEmployees() {
this.employees.forEach(employee => {
console.log(employee.describe());
});
}
}

//create company instance
const myCompany = new Company();

//add employees and managers
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);

//List all employees
myCompany.listEmployees();


