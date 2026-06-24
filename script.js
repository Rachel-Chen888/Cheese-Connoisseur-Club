
// Starter code from Lab3
<script src="js/script.js" defer></script>
function updateWelcomeMessage() {
    const message = document.querySelector("#welcome-message");
    message.textContent = "Welcome to our interactive CSI 3140 website!";
}

//Part C - Event Handling. TODO: Need at least 3 different instances of event handlers.-----------------------

//Part D - Dynamic Page Behaviour --------------------------------------------------------------------
/* TODO: Need 3 meaningful behaviours, from list (refer to the lab instructions)
At least one feature must involve creating or updating content from a JavaScript array or object

Check Lab instructions for starter code
*/


//Part E - (Registration) Form Validation --------------------------------------------------------
//TODO: Validate 1. no empty fields, 2. valid email, 3. our choice

//Provide: 1. error messages when invalid, 2. Prevent submission when invalid, 3. success messages when successful

//NOTE: This is the default code given

const form = document.querySelector("#registration-form");

form.addEventListener("submit", function (event) {
    

    //VARIABLES
    const firstname = document.querySelector("#firstname");
    const firstnameError = document.querySelector("#firstname-error");
    const email = document.querySelector("#email");
    const error = document.querySelector("#email-error");
    //TODO: ADD ALL FIELDS TO BE CHECKED FOR EMPTY

    //TRACK IF ERRORS EXIST
    let valid = true;

    event.preventDefault(); //Need to figure out where to put this

    /*To prevent submission when invalid
    if(!valid) {
        event.preventDefault();
    }

    TODO: find correct placement for it in this block. 
    Or honestly, deciding on the best way to design this. */

    //Check empty fields validation
    //TODO: THE REST
    if(firstname.value.trim() === ""){
        "First name is required.";

        firstname.classList.add("input-error");

        valid = false;
    }
    else{
        firstnameError.textContent = "";
        firstname.classList.remove("input-error");
    }


    //Email validation
    if (!email.value.includes("@")) {
        error.textContent = "Please enter a valid email address.";
        email.classList.add("input-error");
        valid = false;
    } else {
        error.textContent = "";
        email.classList.remove("input-error");
    }

    /*After checking validity of every field during form submission, reveal the success message!

    success.textContent = "Registration successful!";
    success.style.display = "block";

    Check if we need to reset this*/
});