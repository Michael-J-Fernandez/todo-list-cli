const prompt = require('prompt-sync')({ sigint: true });


console.log("\n~ Select an Action ~\n[1] Create a new to-do item\n[2] Change the status of a to-do item\n[3] Edit to-do item\n[4] Delete to-do item\n[5] Exit To-Do List Application\n");

let option = Number(prompt("> "));
let toDoList = [];
let statusArray = [];

while (option !== 5) {
    
//  ----- Add To-Do Item -----
    if (option === 1) {
        displayList();
        console.log("\nEnter New To-Do Item: ");
        
        let addItem = prompt("> ");

        while (addItem === "") {         // Makes sure string is not empty
            console.log("Input cannot be empty.\nEnter New To-Do Item: ")
            addItem = prompt("> ");      // reprompts the user to addItem

        }
        
        toDoList.push(addItem);
        statusArray.push(false);
        
        displayList();
        // reprompt the user
        selectAction();


//  ----- Gets into changing task status -----
    } else if (option === 2) { 
        
        if (toDoList.length !== 0) {
            
            displayList();
            console.log("\nEnter item number to change its completion status:\n");

            
            let newStatus = Number(prompt("> "));
            
            // this reprompts if newStatus is not a whole number between 1 and toDoList.length
            while (isNaN(newStatus) || newStatus > toDoList.length || newStatus < 1 || newStatus % 1 !== 0) {
                console.log("Invalid - Please input an item number for your choice: ");
                newStatus = Number(prompt("> "));
            }

            // Below tries to toggle item status
            if (statusArray[newStatus - 1] === true) {
                statusArray[newStatus - 1] = false;

            } else if (statusArray[newStatus - 1] === false) {
                statusArray[newStatus - 1] = true;
            }

            displayList();
            selectAction();
            
        } else {
            console.log("You need to have items here before you can change anything.");
            
            displayList()      // NEEDS WORK
            selectAction();    // NEEDS WORK
        }


//  ----- Modify Existing To-Do Task -----
    } else if (option === 3) {
    
        if (toDoList.length !== 0) {
            
            displayList();
            console.log("\nEnter item number to edit its text:");

            
            let modifyItem = Number(prompt("> "));
            
            // this reprompts if newStatus is not a whole number between 1 and toDoList.length
            while (isNaN(modifyItem) || modifyItem > toDoList.length || modifyItem < 1 || modifyItem % 1 !== 0) {
                console.log("Invalid - Please input an item number for your choice: ");
                modifyItem = Number(prompt("> "));
            }

            // Below targets item to modify and prompts for new text
            toDoList[modifyItem - 1] = prompt("Enter new text for your item: ")

            displayList();
            selectAction();
            
        } else {
            console.log("You need to have items here before you can change anything.");
            
            displayList()      // NEEDS WORK
            selectAction();    // NEEDS WORK
        }

//  ----- Delete Existing To-Do Task -----     
    } else if (option === 4) {

        if (toDoList.length !== 0) {
            
            displayList();
            console.log("\nEnter item number to delete");

            let deleteItem = Number(prompt("> "));
            
            // this reprompts if newStatus is not a whole number between 1 and toDoList.length
            while (isNaN(deleteItem) || deleteItem > toDoList.length || deleteItem < 1 || deleteItem % 1 !== 0) {
                console.log("Invalid - Please input an item number for your choice: ");
                deleteItem = Number(prompt("> "));
            }

            // Below targets item to delete
            toDoList.splice([deleteItem - 1], 1);
            statusArray.splice([deleteItem - 1], 1);

            displayList();
            selectAction();
            
        } else {
            console.log("You need to have items here before you can change anything.");
            
            displayList()      // NEEDS WORK
            selectAction();    // NEEDS WORK
        }

//  ----- In case a wrong choice is selected -----
    } else {
        console.log("Invalid Operation");
        selectAction();
    } 
}

// ----- Exiting Application -----
console.log("\nExiting To-Do List Application\n")



// ----- FUNCTIONS -----


// ----- Prompts user to select an action -----

function selectAction() {

    console.log("\n~ Select an Action ~\n[1] Create a new to-do item\n[2] Change the status of a to-do item\n[3] Edit to-do item\n[4] Delete to-do item\n[5] Exit To-Do List Application\n");

    option = Number(prompt("> ")); 
}


// ----- Displays To-Do List and status -----

function displayList() {

    if (toDoList.length === 0) {
        console.log(`Your To-Do List is Empty`)

    } else {
        console.log(`\nYour To-Do List has ${toDoList.length} item(s).`);
    }
    

    for (i = 0; i < toDoList.length; i++){  // displays whether item is [Complete]

        if (statusArray[i] === false) {
            itemStatus = "[Incomplete]";

        } else if (statusArray[i] === true) {
            itemStatus = "[Complete]";
        }
    
        console.log(`${i + 1}. ${itemStatus} ${toDoList[i]}`);
    }
}


// ----- END OF FUNCTIONS -----



// ----- PROJECT NOTES -----

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
