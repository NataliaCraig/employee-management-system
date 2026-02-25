//create base class
class Employee {
    constructor(name, department, level = "Associate") {
        this.name = name;
        this.department = department;
        this.level = level;
    }
    describe() {
return `${this.name} works in ${this.department}`
 }

    promote() {
        if (this.level === "Associate") {
            this.level = "Manager";
        } else if (this.level === "Manager") {
            this.level = "Director";
        } else {
            this.level = "Executive";
        }
    }
}