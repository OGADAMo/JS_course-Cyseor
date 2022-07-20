//https://62bc64016b1401736cf99290.mockapi.io/:endpoint



let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener("click", function () {
    let request = fetch("https://62bc64016b1401736cf99290.mockapi.io/Users/" + input.value)
    .then(response => response.json()).then(data=> {
        console.log(data);

        let types = document.querySelector("#types");
        types.innerHTML = `<p><b>${data["email"]}</b></p>`
                            
    })
    .catch(error =>{
        alert("Prekinuta mreza")
        })
    console.log(input.value);
})
