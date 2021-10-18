/// < reference path = "./function.ts" /> 

interface Human{
    jump():void;
}

class Employee implements Human{
    name: string;
    email: string;
    active: boolean;

    constructor(name, email, active){
        this.name = name;
        this.email = email;
        this.active = active;
    }
    jump():void {
        console.log("Employee is jumping out of happiness");
        
    }
}

let employees: Employee[];
const employee1: Employee = new Employee('Vaibhav', 'vaibhav@gmail.com', true);
const employee2: Employee = new Employee('Indrasen', 'indrasen@gmail.com', true);
employees = [employee1, employee2];

employee1.jump();

console.log(FunctionDemo.printOnConsole(true));
