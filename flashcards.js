var inquirer = require("inquirer");
var BasicCard = require("./basic.js");
var ClozeCard = require("./cloze.js");

//inquirer prompt user -> answer -> switch and select by case
function askUser() {
    inquirer.prompt([
        {
            type: "list", //list options
            message: "CHOOSE YOUR CARD", //CLI prompt	
            choices: ["BASIC CARD", "CLOZE CARD", "QUIT"], //options
            name: "askUser" //ref object name
        }
    ]).then(function (answer) {
      var waitMsg;

      switch (answer.askUser) {
  
          case 'BASIC CARD':
              console.log("BASIC CARD");
              waitMsg = setTimeout(card_basic, 1000);
              break;
  
          case 'CLOZE CARD':
              console.log("CLOZE CARD");
              waitMsg = setTimeout(card_cloze, 1000);
              break;
  
          case 'QUIT':
              return;
              break;
  
          default:
              console.log("Try again.");
      }
    });
  }
  askUser();

  function card_basic() {
      inquirer.prompt([
          { 
            type: "list",
            message: "Who was the first president of the United States?", //CLI prompt for front and back args.	
            choices: ["John Adams", "Thomas Jefferson", "George Washington", "James Madison"], //options
            name: "card_basic" //ref object name
          }
      ]).then(
        function (data) {

            var input1 = data.card_basic;

                if (input1 === "George Washington") {
                    console.log("CORRECT ANSWER");
                }
               else if (input1 !== "George Washington") {
                    console.log("WRONG ANSWER");
                }
        });
  }

function card_cloze() {

   var clozeCardBack = "George Washington";
   var clozeCardFront= "...was the first president of the United States."
   var clozecard_all = "George Washington was the first president of the United States."

   inquirer.prompt([
    { 
      type: "list",
      message: "...was the first president of the United States?", //CLI prompt for front and back args.	
            choices: ["John Adams", "Thomas Jefferson", "George Washington", "James Madison"], //options
      name: "card_cloze" //ref object name
    }
]).then(
  function (data) {

      var input2 = data.card_cloze;

          if (input2 === clozeCardBack) {
              console.log("CORRECT ANSWER");
              console.log(clozecard_all);
          }
         else if (input2 !== "George Washington") {
            
              console.log("WRONG ANSWER");
          }
  });

}
