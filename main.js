#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n ---- Welcome To Our Mini Object Oriented Programming ---- \n");
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome!");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom Would You Like To Interact With?",
            choices: ["staff", "student", "exit"]
        });
        if (ans.select == "staff") {
            console.log("You Approach The Staff Room. Please Feel Free To Ask Any Question.");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter The Student's Name You Wish To Engage With:"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello I am ${name.name}. Nice to Meet You!`);
                console.log("New Student Added");
                console.log("Current Student List:");
                console.log(persons.students);
            }
            else {
                console.log(`Hello I am ${student.name}. Nice To See You Again!`);
                console.log("Existing Student List:");
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log("Exiting The Program...");
            process.exit();
        }
    } while (true);
};
programStart(persons);
console.log("\n ---- Thanks For Testing Our Project ---- \n");
