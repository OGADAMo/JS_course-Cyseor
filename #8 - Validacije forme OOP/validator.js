class Validator {
    constructor(config) {
        this.elementsConfig = config;
        this.errors = {};

        this.generateErrorObject();
        this.inputListener();
    } 
    generateErrorObject() {
        for (let field in this.elementsConfig) {
            this.errors[field] = [];   
        }
    } 
    inputListener () {
        let inputSelector = this.elementsConfig;  
        for(let field in inputSelector){
            let el = document.querySelector(`input[name="${field}"]`);
            el.addEventListener('input', this.validate.bind(this));
        }
    }
    validate(e) {
        let elFields = this.elementsConfig;
        let field = e.target;
        let filedName = field.getAttribute("name");
        let fieldValue = field.value;
        this.errors[filedName] = [];

        if (elFields[filedName].reguired === true) {
            if(fieldValue === ""){
                this.errors[filedName].push("Polje je prazno")
            }
        } 
        if (elFields[filedName].email) {
            if (!this.validateEmail(fieldValue)) {
                this.errors[filedName].push("Neispravna email adresa");   
            }
        }
        

        if(fieldValue.length < elFields[filedName].minlenght || fieldValue.length > elFields[filedName].maxlenght){
            this.errors[filedName].push("polje mora imati min, a maksimalno")
        }
        if(elFields[filedName].matching){
            let matchingEl = document.querySelector(`input[name="${elFields[filedName].matching}"]`)
    
            if(fieldValue !== matchingEl.value){
                this.errors[filedName].push("Lozinke se ne poklapaju")
            }
            if(this.errors[filedName].lenght === 0){
                this.errors[filedName] = [];
                this.errors[elFields[filedName].matching] = [];
            }
        }
        this.populateErrors(this.errors);
        
    } 
    populateErrors(errors) {
        for(const elem of document.querySelectorAll("UL")){
            elem.remove();
        }

        for(let key of Object.keys(errors)){
            let parentElement = document.querySelector(`input[name="${key}"]`).parentElement;
            let errorsElement = document.createElement("ul");
            parentElement.appendChild(errorsElement);

            errors[key].forEach(error => {
                let li  = document.createElement("li");
                li.innerText = error;

                errorsElement.appendChild(li)
            });
        }
    }
    validateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return (true)
        }
        return false;
    }  
    
}

