let inputs = document.querySelectorAll("input");
let errors = {
    "ime_prezime": [],
    "korisnicko_ime": [],
    "email": [],
    "lozinka": [],
    "ponovi_lozinku": []
};

inputs.forEach(input => {
    input.addEventListener("change", e => {
        let currentInput = e.target
        let inputValue = currentInput.value
        let inputName = currentInput.getAttribute("name")
    
        if (inputValue.length < 5) {
            errors[inputName] = ["Polje mora imati vise od 4 znaka"];
        }
        
        else {
            errors[inputName] = [];
            switch (inputName) {
                case "ime_prezime":
                    if ((inputValue.trim()).includes(" ") === false){
                        errors[inputName].push("Unesi i ime i prezime")
                    }
                    break;
                
                case "email":
                    if(!validateEmail(inputValue)){
                       errors[inputName].push("Email nije ispravan")
                    }
                    break;
                
                case "ponovi_lozinku":
                    let lozinka = document.querySelector(`input[name="lozinka"]`).value;
               A
                    if(lozinka != inputValue){
                        errors[inputName].push("Lozinke se nisu jednake")

                    }
                    
                default:
                    break;
            }
        }
        populateErrors();
       
    });

});

const populateErrors = () => { 
    for(let el of document.querySelectorAll("ul")){
        el.remove();
    }
    for (let key of Object.keys(errors)) {
        let input = document.querySelector(`input[name="${key}"]`)
        let divTag = input.parentElement;
        let displayErrorTag = document.createElement("ul");

        divTag.appendChild(displayErrorTag)
        errors[key].forEach(error => {
            displayErrorTag.innerHTML = `<li>${error}</li>`;
        });
        
    }
  
}

const validateEmail = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    } else {
        return false;
    }
}

const validatePassword = () => {

}