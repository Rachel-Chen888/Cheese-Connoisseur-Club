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
    "Maybe you should get an adult or friend to help you.",
    "How hard is it to read???",
    "It's a wonder you managed to even navigate here.",
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
    "We've been trying to reach you regarding your Life's extended Warranty.",
    "The biggest and heaviest cheese ever created was 32 feet long and weighed 57,518 pounds.",
    "There are more than 2000 varieties of cheese available worldwide.",
    "A whopping 20 million metric tons of cheese is produced worldwide each year and production is increasing with growing demand.",
    "Approximately 10 pounds of milk is required to make one pound of cheese"
];


//NOTE: This is the default code given
console.log("Before form lookup");
const form = document.querySelector("#registration-form");
console.log(form); //to check what is loading
console.log("After form lookup.");

if(form){ //makes sure this only runs when form exists (ie. on registration.html), to avoid issues.
     form.addEventListener("submit", function (event) {

     event.preventDefault();

     console.log("Submit event is RUNNING!");

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

     const password = document.querySelector("#password");
     const passwordError = document.querySelector("#password-error");

     //Success message
     const success = document.querySelector("#success-message");
     const failure = document.querySelector("#failure-message");

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

     //Email

     if (email.value.trim() === ""){
         emailError.textContent = "Please enter your email address.";

         email.classList.add("input-error");

         valid = false;
     }
     else if (!email.value.includes("@")){ //Email Validation check
        emailError.textContent = "Please enter a valid email address.";
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

        SSNError.textContent = "SSN must contain exactly 9 digits.";

        SSN.classList.add("input-error");
        
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

    //TODO: MAY REMOVE PASSWORD FROM FORM ENTIRELY
    if(password.value.trim() ===""){
        passwordError.textContent = "Please enter your password.";
        password.classList.add("input-error");

        valid = false;
    }
    else{
        passwordError.textContent = "";
        password.classList.remove("input-error");
    }

    //Textarea
    const favoriteCheese = document.querySelector("#favorite_cheese");
    const favoriteError = document.querySelector("#favorite-error");
    if(favoriteCheese.value.trim() === ""){
        favoriteError.textContent = "State your favorite Cheese(s).";
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
    const gender = document.querySelector("#gender");
    const genderError = document.querySelector("#gender-error");
    if(gender.value === ""){
        genderError.textContent = "Choose your gender.";
        gender.classList.add("input-error");
        
        valid = false;
    }
    else{
        genderError.textContent = "";
        gender.classList.remove("input-error");
    }

    //Checkbox //TODO: FIX!!!!!
    const terms = document.querySelector("#terms");
    const termsError = document.querySelector("#terms-error");

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
         success.textContent = "Registration successful!";
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