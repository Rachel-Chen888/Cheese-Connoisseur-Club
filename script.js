
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

    /*VARIABLES*/

    //Normal Input Fields
    const firstname = document.querySelector("#firstname");
    const firstnameError = document.querySelector("#firstname-error");

    const lastname = document.querySelector("#lastname");
    const lastnameError = document.querySelector("#lastname-error")

    const email = document.querySelector("#email");
    const emailError = document.querySelector("#email-error");

    const SSN = document.querySelector("#SSN");
    const SSNError = document.querySelector("#SSN-error");

    const phone = document.querySelector("#phone");
    const phoneError = document.querySelector("#phone-error");

    const password = document.querySelector("#password");
    const passwordError = document.querySelector("#password-error");

    //Dropdown

    //Radio

    //Checkbox

    //TO TRACK IF ERRORS EXIST
    let valid = true;

    //Checking for empty fields
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

    if(lastname.value.trim() === ""){
        "Last name is required.";

        lastname.classList.add("input-error");

        valid = false;
    }
    else{
        lastnameError.textContent = "";
        lastname.classList.remove("input-error");
    }

    if (email.value.trim() === ""){
        //TODO:
    }
    else{
        //TODO:
    }



    //Email validation
    if (!email.value.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        email.classList.add("input-error");
        valid = false;
    } else {
        emailError.textContent = "";
        email.classList.remove("input-error");
    }

    /*After checking validity of every field during form submission, reveal the success message!

    success.textContent = "Registration successful!";
    success.style.display = "block";

    Check if we need to reset this*/

    //Is this correct? REVIEW THIS
    if(!valid){
        event.preventDefault();
    }
    else{
        //TODO: Success Message, and possibly a redirect to index.html
    }
});