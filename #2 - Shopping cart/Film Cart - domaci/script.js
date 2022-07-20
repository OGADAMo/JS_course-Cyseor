let total = 0
let watched = 0
function addToCart(element) {
    let type = element.closest(".single-film");
    let name = type.querySelector("h3").innerText;
    let price = type.querySelector("span").innerText;
    let priceLabel= document.querySelector(".price");
    let watchedLabel= document.querySelector(".watched");

    total = total + parseInt(price);

    priceLabel.innerHTML = "<p>Total: " +total+ "$</p>";
    watchedLabel.innerHTML  += `<p>Pogledano: ${name} - ${price}</p>`;
    element.setAttribute('disabled', 'disabled');
    document.querySelector(".watched").style.display = "block"
    document.querySelector(".price").style.display = "block"
    element.innerText = "Pogledano";
    type.style.background = "rgba(170, 255, 200, 0.3)";
    
}