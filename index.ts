import inquirer from "inquirer";
import chalk from "chalk";

//Generate secrete number
const secretNumber:number=Math.floor((Math.random()*2))+1
console.log(secretNumber)

let userInput=await inquirer.prompt({
    type:"list",
    name:"num",
    message:"Please picked one number",
    choices:["1","2"]
})

//convert input in number

let num1=parseInt(userInput.num)

switch(true){
    case num1===secretNumber:
        console.log(chalk.bold.italic("You Won!"));
        break
     
    default:
        console.log("try again!")    
}

 