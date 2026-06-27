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

// Part F - JavaScript Data Structures

/* 
Students must use at least one 
JavaScript array or object to store and display information dynamically.
*/ 

const announcements = [
    "Registration ends on June 30",
    "Cheese voting ends on July 2",
    "NDA for our top secret cheese recipe due July 5",  
    "Cheese Wars commencing on July 10"
];

const announcementsList = document.querySelector("#announcements");

if (announcementsList) {
    announcements.forEach(function (announcement) {
        console.log("Announcments Running!");
        const item = document.createElement("li"); 
        item.textContent = announcement;
        item.addEventListener("click", () => {
            item.remove(item); 
        }); 
        
        announcementsList.appendChild(item);
    
    });
}

//Part E - (Registration) Form Validation --------------------------------------------------------
//TODO: Validate 1. no empty fields, 2. valid email, 3. our choice

//Provide: 1. error messages when invalid, 2. Prevent submission when invalid, 3. success messages when successful

let failedAttempts = 0;

const failureMessages = [
    "Wow, you're pretty bad at this.",
    "Try finding an adult to help you.",
    "How hard is it to read???",
    "It's a wonder you even managed to get here.",
    "...You do know how to read right?",
    "I refuse to believe you have a functional frontal lobe.",
    "Don't just spam the button!",
    "You are not qualified to be a member of this club",
    "Our interns are crying.",
    "This is starting to feel personal.",
    "Please stop bullying the submit button.",
    "I'm regretting my life decisions.",
    "I'm not paid enough for this.",
    "This is just...sad.",
    "You're doing this for fun now, huh?",
    "You think this is funny? I have a wife and children!",
    "The Cheese is disappointed in you.",
    "We've been trying to reach you regarding your car's extended Warranty.",
    "The biggest and heaviest cheese ever created was 32 feet long and weighed 57,518 pounds.",
    "There are more than 2000 varieties of cheese available worldwide.",
    "A whopping 20 million metric tons of cheese is produced worldwide each year and production is increasing with growing demand.",
    "Approximately 10 pounds of milk is required to make one pound of cheese",
    "You're still here?",
    "Why do you make me suffer?", 
    "Cheese curds squeak because the elastic protein strands in the cheese rub against the enamel of your teeth.",
    "It takes ten pounds of milk to make just one pound of cheese.", 
    "The Sun will explode in 5 billion years."
];


console.log("Before form lookup");
const form = document.querySelector("#registration-form");
console.log(form); //to check what is loading
console.log("After form lookup.");

//ALL FUNCTIONS RELATED TO REGISTRATION FORM
if(form){ //makes sure this only runs when form exists (ie. on registration.html), to avoid issues.
     //VARIABLES--------------------------------------

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

    //Text Area
    const favoriteCheese = document.querySelector("#favorite_cheese");
    const favoriteError = document.querySelector("#favorite-error");

    //Dropdown
    const gender = document.querySelector("#gender");
    const genderError = document.querySelector("#gender-error");

    //Checkbox
    const terms = document.querySelector("#terms");
    const termsError = document.querySelector("#terms-error");

     //Success message
     const success = document.querySelector("#success-message");
     const failure = document.querySelector("#failure-message");
    
     //This is more related to the DOM Events section of the lab!

    const fav_counter = document.querySelector("#character-counter");
 favoriteCheese.addEventListener("input", function(){
    const remaining = 6000 - favoriteCheese.value.length;

    fav_counter.textContent = remaining + " characters remaining.";
 });

    //VALIDATION METHOD
     form.addEventListener("submit", function (event) {

     event.preventDefault();

     console.log("Submit event is RUNNING!");

     //TO TRACK IF ERRORS EXIST
     let valid = true;

     //Checking for empty fields
     //TODO: ADD MIN-LENGTH AND MAX-LENGTH CHECKERS

     const firstnameValue = firstname.value.trim();
     if(firstnameValue === ""){
         firstnameError.textContent = "Please enter your first name.";

         firstname.classList.add("input-error");

         valid = false;
     }
     else if(firstnameValue.length < 2){

        firstnameError.textContent = "First name must be at least 2 characters long.";
        firstname.classList.add("input-error");

        valid = false;
     }

     else if (firstnameValue.length > 2000){
        firstnameError.textContent = "First name cannot exceed 2000 characters.";
        firstname.classList.add("input-error");

        valid = false;
     }
     else{
         firstnameError.textContent = "";
         firstname.classList.remove("input-error");
     }

    
     const lastnameValue = lastname.value.trim();

     if(lastnameValue === ""){
         lastnameError.textContent = "Please enter your last name."

         lastname.classList.add("input-error");

         valid = false;
     }
     else if(lastnameValue.length < 2){
        lastnameError.textContent = "Last name must be at least 2 characters long.";
        lastname.classList.add("input-error");

        valid = false;
     }

     else if (lastnameValue.length > 2000){
        lastnameError.textContent = "Last name cannot exceed 2000 characters.";
        lastname.classList.add("input-error");

        valid = false;
     }
     else{
         lastnameError.textContent = "";
         lastname.classList.remove("input-error");
     }

     //Email
     const emailValue = email.value.trim();
     if (emailValue === ""){
         emailError.textContent = "Please enter your email address.";

         email.classList.add("input-error");

         valid = false;
     }
     else if (!emailValue.includes("@")){ //Email Validation check
        emailError.textContent = "Please enter a valid email address.";
         email.classList.add("input-error");

         valid = false;
     }

     else if (emailValue.length > 2000){
        emailError.textContent = "Email address must not exceed 2000 characters.";
        email.classList.add("input-error");

        valid = false;
     }
     else{
         emailError.textContent = "";
         email.classList.remove("input-error");
     }


     //SSN
     const ssnPattern = /^\d{9}$/; //Trying to define the parameters for the SSN (9 digits long, 0-9)

     if(SSN.value.trim() === ""){
         SSNError.textContent = "Please enter you SSN.";
         SSN.classList.add("input-error");

        valid = false;
    }
    else if(!ssnPattern.test(SSN.value)){ //SSN format check
        //Check if it's running.
        console.log("SSN value:", SSN.value);
        console.log("Regex result:", ssnPattern.test(SSN.value));

        SSNError.textContent = "SSN may only contain numbers.";

        SSN.classList.add("input-error");
        
        valid = false;

    }
    else if(ssnValue.length !== 9){
        SSNError.textContent = "SSN must contain exactly 9 digits.";

        valid = false;
    }
    else{
        SSNError.textContent = "";
        SSN.classList.remove("input-error");

    }

    //Phone number
    const phonePattern = /^\d{10}$/;
    const phoneValue = phone.value.trim();

    if (phoneValue === ""){
        phoneError.textContent = "Please enter your phone number.";
        phone.classList.add("input-error");

        valid = false;
    }
    else if(!phonePattern.test(phoneValue)){ //Phone number format check
        phoneError.textContent = "Please enter a valid phone number.";
        phone.classList.add("input-error");

        valid = false;
    }
    else{
        phoneError.textContent = "";
        phone.classList.remove("input-error");
    }

    //TODO: ADD CHARACTER COUNTER
    //Textarea
    const favoriteCheeseValue = favoriteCheese.value.trim()
    if(favoriteCheeseValue === ""){
        favoriteError.textContent = "State your favorite Cheese(s).";
        favoriteCheese.classList.add("input-error");

        valid = false;
    }
    else if(favoriteCheeseValue.length > 6000){
        favoriteError.textContent = "Statement cannot exceed 6000 characters";
        favoriteCheese.classList.add("input-error");

        valid = false;
    }
    else{
        favoriteError.textContent = "";
        favoriteCheese.classList.remove("input-error");
    }

    //Radio buttons
    const knowledge = document.querySelector('input[name="cheese_knowledge"]:checked');
    const knowledgeError = document.querySelector("#knowledge-error");

    if (!knowledge){
        knowledgeError.textContent = "Please select your level of cheese expertise.";

        valid = false;
    }
    else{
        knowledgeError.textContent = "";
    }

    //Dropdown
    if(gender.value === ""){
        genderError.textContent = "Choose your gender.";
        gender.classList.add("input-error");
        
        valid = false;
    }
    else{
        genderError.textContent = "";
        gender.classList.remove("input-error");
    }

    //Checkbox

    if (!terms.checked){
        termsError.textContent = "Pledge yourself to the Cheese Connoisseur Club.";
        terms.classList.add("input-error");

        valid =false;

    }
    else{
        termsError.textContent = "";
        terms.classList.remove("input-error");
    }


     //Check Submission Validity
     if(!valid){

         failedAttempts++;
         console.log(failedAttempts);

         console.log("Invalid Submission"); //for documentation purposes?
         success.style.display = "none";
         failure.style.display = "block";

         if(failedAttempts >= 5){
            const i = Math.floor(Math.random() * failureMessages.length);

            failure.textContent = failureMessages[i];
            failedAttempts = 0;
         }
         else{
            failure.textContent = "Registration Failed. Please fix the highlighted fields.";
         }
        
     }
     else{

         form.reset(); //reset to empty the form after good submission
        
         failure.style.display = "none";  
         success.textContent = "Congratulations! Registration successful!";
         success.style.display = "block";

         failedAttempts = 0;

         //wipe the error messages too
         document.querySelectorAll(".error-message").forEach(error => {
             error.textContent = "";
         });

        console.log("Form Submitted!");

         //TODO: Make it redirect to index.html?
    }
 });


}


//Part G - Dark Mode Toggle --------------------------------------------------------------------

console.log("Before theme toggle lookup");
const themeBtn = document.querySelector("#theme-toggle");
console.log(themeBtn); //to check what is loading
console.log("After theme toggle lookup");

if (themeBtn) { //make sure this only runs when button exists
    themeBtn.addEventListener("click", function (event) {
        
        console.log("Theme toggle event is running");

        const body = document.querySelector("body"); 

        //Toggle dark mode class
        body.classList.toggle("dark-mode");

        //Update button text based on state
        if (body.classList.contains("dark-mode")) {
            themeBtn.textContent = "Cheese At Daylight!";
            console.log("Switched to dark mode.");
        } else {
            themeBtn.textContent = "Cheese At Night!";
            console.log("Switched to light mode.");
        }
    });
}