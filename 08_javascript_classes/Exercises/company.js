class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department) {
            throw new Error("Invalid input!");
        } else if (salary < 0) {
            throw new Error("Invalid input!");
        } else {
            if (!this.departments.hasOwnProperty(department)) {
                this.departments[department] = [{ name, salary, position }];
                return `New employee is hired. Name: ${name}. Position: ${position}`;
            } else {
                this.departments[department].push({ name, salary, position });
            }
        }
    }

    bestDepartment() {
        let bestDepartmentName;
        let currBestAvgSalary = 0;

        for (const department in this.departments) {

            let currDepartmentSalarySum = 0;
            for (const employee of this.departments[department]) {
                let currEmployeeSalary = employee.salary;
                currDepartmentSalarySum += currEmployeeSalary;
            }

            let currDepartmentAvgSalary = currDepartmentSalarySum / this.departments[department].length;

            if (currDepartmentAvgSalary > currBestAvgSalary) {
                currBestAvgSalary = currDepartmentAvgSalary;
                bestDepartmentName = department;
            }
        }

        let output = '';
        output += `Best Department is: ${bestDepartmentName}\n`;
        output += `Average salary: ${currBestAvgSalary.toFixed(2)}\n`;

        // SORT ARRAY OF OBJECTS BY TWO CRITERIA
        this.departments[bestDepartmentName].sort(function (a, b) {
            return  b.salary - a.salary || a.name.localeCompare(b.name);
        });

        let output2 = [];

        for (const employee of this.departments[bestDepartmentName]) {
            let currEmployeeName = employee.name;
            let currEmployeeSalary = employee.salary;
            let currEmployeePosition = employee.position;

            output2.push(`${currEmployeeName} ${currEmployeeSalary} ${currEmployeePosition}`);
        }

        output += output2.join('\n');

        return output;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

// console.table(c.departments);
// console.table(c.departments.Construction);

c.bestDepartment();