let config = {
    "ime_prezime": {
        reguired: true,
        minlenght: 3,
        maxlenght: 50
    },
    "korisnicko_ime": {
        reguired: true,
        minlenght: 3, 
        maxlenght: 50
    },
    "email": {
        reguired: true,
        email: true,
        minlenght: 5, 
        maxlenght: 50
    },
    "zip_code": {
        reguired: true,
        minlenght: 5, 
        maxlenght: 15
    },
    "broj_telefona": {
        minlenght: 9, 
        maxlenght: 13
    },
    "lozinka": {
        reguired: true,
        minlenght: 7, 
        maxlenght: 25,
        matching: "ponovi_lozinku"
    }, 
    "ponovi_lozinku": {
        reguired: true,
        minlenght: 7, 
        maxlenght: 25,
        matching: "lozinka"
    } 
}

let validator = new Validator (config);