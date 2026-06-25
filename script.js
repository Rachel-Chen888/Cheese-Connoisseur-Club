console.log("Script.js Loaded!"); //To check that JS is loading

// Starter code from Lab3
//<script src="js/script.js" defer></script> <---Pretty sure this is HTML and not supposed to be in here
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
console.log("Before form lookup");
const form = document.querySelector("#registration-form");
console.log(form); //to check what is loading
console.log("After form lookup.");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log("Submit event is RUNNING!");

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

    //Success message
    const success = document.querySelector("#success-message");

    //TO TRACK IF ERRORS EXIST
    let valid = true;

    //Checking for empty fields
    //TODO: THE REST
    if(firstname.value.trim() === ""){
        firstnameError.textContent = "Please enter your first name.";

        firstname.classList.add("input-error");

        valid = false;
    }
    else{
        firstnameError.textContent = "";
        firstname.classList.remove("input-error");
    }

    if(lastname.value.trim() === ""){
        lastnameError.textContent = "Please enter your last name."

        lastname.classList.add("input-error");

        valid = false;
    }
    else{
        lastnameError.textContent = "";
        lastname.classList.remove("input-error");
    }

    if (email.value.trim() === ""){
        emailError.textContent = "Please enter your email address.";

        email.classList.add("input-error");

        valid = false;
    }
    else{
        emailError.textContent = "";
        email.classList.remove("input-error");
    }

    if(SSN.value.trim() === ""){
        SSNError.textContent = "Please enter you SSN.";
        SSN.classList.add("input-error");

        valid = false;
    }
    else{
        SSNError.textContent = "";
        SSN.classList.remove("input-error");
    }

    if (phone.value.trim() === ""){
        //TODO
    }
    else{
        //TODO
    }

    if(password.value.trim() ===""){
        //TODO
    }
    else{
        //TODO
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

    //Number formatting validation. Includes: SSN, phone, possibly password


    //Is this correct? REVIEW THIS
    if(!valid){
        console.log("Invalid Submission"); //for documentation purposes?
        success.style.display = "none";
    }
    else{

        form.reset(); //reset to empty the form after good submission
        
        success.textContent = "Registration successful!";
        success.style.display = "block";     

        //wipe the error messages too
        document.querySelectorAll(".error-message").forEach(error => {
            error.textContent = "";
        });

        console.log("Form Submitted!");

        //TODO: Make it redirect to index.html?
    }
});