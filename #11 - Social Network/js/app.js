let session = new Session ();
session = session.getSession();

if(session !== ""){
    window.location.href = "hexa.html";
}


document.querySelector("#register").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "block";
})

document.querySelector(".closeModal").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
})

let config = {
    "korisnicko_ime": {
        required: true,
        minlength: 5,
        maxlength: 50,
    },
    "register_email": {
        required: true,
        email: true,
        minlength: 5,
        maxlength: 50,
    },
    "registerLozinka": {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: "ponovi_lozinku"
    },
    "ponovi_lozinku": {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: "registerLozinka"
    },
    
};

let validator = new Validator(config, "#registrationForm")


document.querySelector("#registrationForm").addEventListener("submit", e => {
    e.preventDefault();
    if(validator.validationPassed()){
        let user = new User();
        user.username = document.querySelector("#korisnicko_ime").value;
        user.email = document.querySelector("#register_email").value;
        user.password = document.querySelector("#registerLozinka").value;
        user.img_id = "1";
        user.create();

    }
    else{
        alert("Registracija nije valjana");
    }
});

document.querySelector(".loginForm").addEventListener("submit", e => {
    e.preventDefault();
    let email = document.querySelector("#login_email").value;
    let password = document.querySelector("#login_password").value;
    
    let user = new User();
    user.email = email;
    user.password = password;
    user.login();
})

