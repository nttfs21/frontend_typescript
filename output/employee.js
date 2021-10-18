/// < reference path = "./function.ts" /> 
class Employee {
    constructor(name, email, active) {
        this.name = name;
        this.email = email;
        this.active = active;
    }
    jump() {
        console.log("Employee is jumping out of happiness");
    }
}
let employees;
const employee1 = new Employee('Vaibhav', 'vaibhav@gmail.com', true);
const employee2 = new Employee('Indrasen', 'indrasen@gmail.com', true);
employees = [employee1, employee2];
employee1.jump();
console.log(FunctionDemo.printOnConsole(true));
//# sourceMappingURL=employee.js.map