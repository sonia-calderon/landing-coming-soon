const form = document.getElementById("form");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let emailValue = email.value;
    if(validateEmail(emailValue)){
        alert("Thank you! Your email has been submitted.");
    } else{
        alert("Please, provide a valid email.");
    }

});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}