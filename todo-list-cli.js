const prompt = require('prompt-sync')({ sigint: true });


console.log("~ Select an action ~\n[1] Create a to-do item\n[2] Complete a to-do item\n[3] Exit To-Do List Application");

let option = Number(prompt("> "));
let toDoList = [];
let statusArray = [];

while (option !== 3) {
    
    if (option === 1) {
        displayList();
        console.log("Enter New To-Do Item: ");
        
        // add To-Do Item
        let addItem = prompt("> ");

        while (addItem === "") {         // Makes sure string is not empty
            console.log("Input cannot be empty.\nEnter New Item: ")
            addItem = prompt("> ");      // reprompts the user to addItem

        }
        
        toDoList.push(addItem);
        statusArray.push(false);
        
        displayList();
        // reprompt the user
        selectOption();
        
    } else if (option === 2) { // Gets into changing task status

        if (toDoList.length !== 0) {
            console.log("You have no items on this list.");

            displayList()      // NEEDS WORK
            selectOption();    // NEEDS WORK
        }
        
        console.log("Enter To-Do Item to Complete\n");
        displayList();
        
        let newStatus = Number(prompt("> "));

        // this reprompts if newStatus is not a whole number between 1 and toDoList.length
        while (isNaN(newStatus) || newStatus > toDoList.length || newStatus < 1 || newStatus % 1 !== 0) {
            console.log("Invalid - Please input an item number for your choice: ");
            newStatus = Number(prompt("> "));
        }

        statusArray[newStatus - 1] = true;
        
        displayList();
        selectOption();
        

    } else {
        // in case a wrong choice is selected
        console.log("Invalid Operation");
        selectOption();
    } 
}

// Exiting Application
console.log("\nExiting To-Do List Application\n")



// ----- FUNCTIONS -----

function selectOption() {

    console.log("\n");
    console.log("~ Select an action ~\n[1] Create a to-do item\n[2] Complete a to-do item\n[3] Exit To-Do List Application");

    option = Number(prompt("> ")); 
}


function displayList() {

    if (toDoList.length === 0) {
        console.log(`Your To-Do List is Empty`)

    } else {
        console.log(`Your To-Do List has ${toDoList.length} item(s).`);
    }
    

    for (i = 0; i < toDoList.length; i++){  // displays whether item is [Complete]

        if (statusArray[i] === false) {
            statusArray[i] = "[Incomplete]";

        } else if (statusArray[i] === true) {
            statusArray[i] = "[Complete]";
        }
    
        console.log(`${i + 1}. ${statusArray[i]} ${toDoList[i]}`);
    }
}


// ----- END OF FUNCTIONS -----



/* ----- Figure out UI -----

- console.log();
- Welcome message
- Different options (Add, Complete, Exit)
    - Error messages for invalid options
    - Spacing/separators to make it look nice

- prompts
    - Numbers to decide shich option (if statements):
        1 - ADD New To-Do Item - prompt user for item to create
        2 - COMPLETE To-Do Item - promt user for which item to complete
        3 - EXIT

- while loop
    Program has no known ending, so we want to be able to prompt them indefinitely/until they

- display the To-Do list to the user
    - completion status [complete] or [incomplete]
    - the name of the item
    - the number associalted with the item
    - loop to display each item in the Do-Do list (to break each line)

*/

/* ----- ADD New To-Do Item -----

- Prompt for the To-Do Item
    - Save the item by storing in an array - .push()
- An array to keep track of To-Do Items
    - Global variable


*/

/* ----- COMPLETE To-Do Item -----

- Any item in the list is [incomplete] until we mark it [complete]
- Whenever we add an item ot the To-Do list it is [imcomplete] by default

array of booleans

true = [complete];
flase = [incomplete];

[true,         false,        true]           status array
complete,      incomplete,   complete        
["Walk Dog",   "Get Food",   "Run Mile"]     toDoList  array
  0             1             2              shared index

let status = [];
By default, when we add a new item, we want to add a "false" boolean to our status array.


--- Completing To-Do Items:

- Display current items in the To-Do List with their status
- Pick which To-Do item to mark as complete
    - Swap its status from false to true
- Make sure to display the updated list right after



----- OPTIONAL PERSONAL GOALS -----

1. Separate [Complete] and [Incomplete] tasks


*/
