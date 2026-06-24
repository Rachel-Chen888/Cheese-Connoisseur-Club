
// Starter code from Lab3
<script src="js/script.js" defer></script>
function updateWelcomeMessage() {
    const message = document.querySelector("#welcome-message");
    message.textContent = "Welcome to our interactive CSI 3140 website!";
}

//Part C - Event Handling. TODO: Need at least 3 different instances of event handlers.

//Part D - Dynamic Page Behaviour 
/* TODO: Need 3 meaningful behaviours, from list (refer to the lab instructions)
At least one feature must involve creating or updating content from a JavaScript array or object

Check Lab instructions for starter code
*/


//Part E - (Registration) Form Validation
//TODO: Validate 1. no empty fields, 2. valid email, 3. our choice

//Provide: 1. error messages when invalid, 2. Prevent submission when invalid, 3. success messages when successful

//NOTE: This is the default code given
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector("#email");
    const error = document.querySelector("#email-error");

    if (!email.value.includes("@")) {
        error.textContent = "Please enter a valid email address.";
        email.classList.add("input-error");
    } else {
        error.textContent = "";
        email.classList.remove("input-error");
    }
});