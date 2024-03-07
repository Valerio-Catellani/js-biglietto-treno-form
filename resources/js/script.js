import * as hype from "./hypeUtility.js"


const minorDiscount = 0.20;
const over65Discount = 0.40;
const price = 0.21;

let elementUserName = document.getElementById("userName");
let elementUserSurname = document.getElementById("userSurname");
let elementDestination = document.getElementById("destination");
let elementUserAge = document.getElementById("userAge");
let responseUserNameAndSurname = document.querySelector("#response th");
let responseTicketType = document.querySelector("#response td:nth-child(2)");
let responseCarriege = document.querySelector("#response td:nth-child(3)");
let responseCPCode = document.querySelector("#response td:nth-child(4)");
let responseCost = document.querySelector("#response td:nth-child(5)");


document.querySelector("#compile button:first-child").addEventListener("click",
    function () {
        let userName = elementUserName.value;
        let userSurname = elementUserSurname.value;
        let destination = parseInt(elementDestination.value);
        let userAge = elementUserAge.value; //evito il parseInt visto che i valori sono decisi da noi
        responseUserNameAndSurname.innerHTML = `${userName} ${userSurname}`;
        responseTicketType.innerHTML = (userAge == "minor" ? `Discounted Ticket (-${minorDiscount * 100}%)` : userAge == "over65" ? `Discounted Ticket (-${over65Discount * 100}%)` : "Standard Ticket");
        responseCarriege.innerHTML = hype.getRndInteger(2, 20);
        responseCPCode.innerHTML = hype.getRndInteger(10000, 99999);
        let cost = price * destination;
        responseCost.innerHTML = (userAge == "minor" ? `${cost - (cost * minorDiscount)}€` : userAge == "over65" ? `${cost - (cost * over65Discount)}€` : `${cost}€`)

    })

document.querySelector("#compile button:nth-child(2)").addEventListener("click",
    function () {
        alert("ffff")
    }
)
