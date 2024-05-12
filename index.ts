#! /usr/bin/env node

import inquirer from "inquirer";
const ans = await inquirer.prompt(
    [
        {
            type: "number",
            name: "first_number",
            message: "please enter your first number"


        },
        {
            type: "number",
            name: "second_number",
            message: "please enter your second number"
        },
        {
            type: "list",
            name: "operators",
            message: "select operation number",
            choices: ["addition","substraction","multiplication","division"]
        }
    ]);
    if (ans.operators === "addition") {
       console.log(ans.first_number + ans.second_number);        
    }
    else if (ans.operators === "substraction") {
        console.log(ans.first_number -  ans.second_number);
    } 
    else if (ans.operators === "multiplication") {
        console.log(ans.first_number * ans .second_number);
    }
    else if (ans.operators === "division") {
        console.log(ans.first_number / ans.second_number);
    }
        