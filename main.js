// CALCULATOR  
import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter first Number"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter Second Number"
    },
    {
        type: "list",
        name: "Operator",
        choices: ["/", "*", "+", "-"],
        message: "Select Operator"
    }
]);
const { numberOne, numberTwo, Operator } = answers;
if (numberOne && numberTwo && Operator) {
    let results = 0;
    if (Operator === "/") {
        results = numberOne / numberTwo;
    }
    else if (Operator === "*") {
        results = numberOne * numberTwo;
    }
    if (Operator === "+") {
        results = numberOne + numberTwo;
    }
    if (Operator === "-") {
        results = numberOne - numberTwo;
    }
    console.log("Your result is;", results);
}
else {
    console.log("Enter Valid Input");
}
