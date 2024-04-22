import inquirer from "inquirer"
let todos = []

let condition = true;

while(condition)
{
    let todoquestions= await inquirer.prompt(
        [
         {
           name: "firstQuestion",
           type: "input",
           message: "what would you like to add in you todos?"
              
         },
         { 
             name: "secondQuestion",
            type: "confirm",
            message: " would you like to add in you todos?",
            default: "true"
         }
    ]
    );
         todos.push(todoquestions.firstQuestion);
         console.log(todos)
         //the loop is running on the based of this variable condition
         condition = todoquestions.secondQuestion;
    }
    //read,update,delete, add

    const fruits: string[] = ['apple','orange','banana','kiwi'];
    fruits.forEach(fruit =>{
      console.log(fruits);
    });
    
















