let attempt=3; //number of attempts to log in allowed


//function that runs when user clicks submit button with strict rules
function validate() {
let username= document.getElementById("username").value;
let password= document.getElementById("password").value;
        if (username == "yatziry"  && password == "1234") {
            alert ("Login Successful");
            return false;
        }
    else {
        attempt --;// Decrementing by one.
        alert("You have left" +attempt+ "attempt;");
    }

}