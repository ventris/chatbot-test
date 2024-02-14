// function that runs when the page loads
function startFunction() {
    waitAndResponce("intro");
}

// Function that takes user input and sends it to the BOT
function userInput() {
    // Get the users input from the input field
    var input = document.getElementById("inputMessage");
    // Get the value of the input field
    var ti = input.value;
    // If the input field is empty, return and do nothing
    if (input.value == "") {
        return;
    }
    // Create a list item for user input
    var userLi = document.createElement("li");
    // Create a div for user input so that it can be styled
    var userdiv = document.createElement("div");
    // Add the css classes to the div
    userdiv.setAttribute("class", "sent red");
    // Add the user input to the div
    userdiv.innerText = input.value;
    // Add the div to the list item
    userLi.appendChild(userdiv);
    // Add the list item to the unordered list
    document.getElementById("listUL").appendChild(userLi);
    // Call the waitAndResponce function and pass the user input to it so that the bot can respond
    setTimeout(function() { waitAndResponce(ti) }, 1500);
    // Clear the input field
    input.value = "";
}

// Function that the BOT uses to select which case to responde with.
function waitAndResponce(inputText) {
    // Switch statement to select which case to responde with
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            // timeout to not send the message immediately, but instead wait 1s
            setTimeout(() => {
                sendTextMessage("WELCOME I AM BOT");
            }, 1000);
            break;

        case "help":
            sendTextMessage("<span class='sk'>Messages:<br> - hello <br> - help</span>");
            break;

        case "hello":
            sendTextMessage("Hello there");
            break;

        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...<br>Send 'help' to know more about usage.");
            }, 1000);
            break;
    }
}
// Function that the BOT uses to send messages
function sendTextMessage(textToSend) {
    // Create a list item for the BOT response
    var botLi = document.createElement("li");
    // Create a div for the BOT response so that it can be styled
    var botdiv = document.createElement("div");
    // Add the css classes to the div
    botdiv.setAttribute("class", "received green");
    // Add the BOT response to the div
    botdiv.innerHTML = textToSend;
    // Add the div to the list item
    botLi.appendChild(botdiv);
    // Add the list item to the unordered list
    document.getElementById("listUL").appendChild(botLi);
}

