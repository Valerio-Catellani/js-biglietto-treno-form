


const minorDiscount = 0.20;
const over65Discount = 0.40;
const price = 0.21;

let elementUserName = document.getElementById("userName");
let elementUserSurname = document.getElementById("userSurname");
let elementDestination = document.getElementById("destination");
let elementUserAge = document.getElementById("userAge");

let compileButton = document.querySelector("#compile button:first-child");

let responseUserNameAndSurname = document.querySelector("#response th");
let responseTicketType = document.querySelector("#response td:nth-child(2)");
let responseCarriege = document.querySelector("#response td:nth-child(3)");
let responseCPCode = document.querySelector("#response td:nth-child(4)");
let responseCost = document.querySelector("#response td:nth-child(5)");

let invalidOption = document.querySelector("#userAge option:first-child");

let ticket = document.getElementById("ticket-cost")



compileButton.addEventListener("click",
    function () {
        let userName = elementUserName.value;
        let userSurname = elementUserSurname.value;
        let destination = parseInt(elementDestination.value);
        let userAge = elementUserAge.value; //evito il parseInt visto che i valori sono decisi da noi
        responseUserNameAndSurname.innerHTML = `${userName} ${userSurname}`;
        responseTicketType.innerHTML = (userAge == "minor" ? `Discounted Ticket (-${minorDiscount * 100}%)` : userAge == "over65" ? `Discounted Ticket (-${over65Discount * 100}%)` : "Standard Ticket");
        responseCarriege.innerHTML = getRndInteger(2, 20);
        responseCPCode.innerHTML = getRndInteger(10000, 99999);
        let cost = (price * destination);
        responseCost.innerHTML = (userAge == "minor" ? `${(cost - (cost * minorDiscount)).toFixed(2)}€` : userAge == "over65" ? `${(cost - (cost * over65Discount)).toFixed(2)}€` : `${cost}€`);
        trainAnimationIn();
    })

document.querySelector("#compile button:nth-child(2)").addEventListener("click",
    function () {
        elementUserName.value = elementUserSurname.value = elementDestination.value = "";
        invalidOption.selected = true;
        CheckButton();
        trainAnimationOut();
    }
)



/* Disabilita button quando i campi non sono completi */

elementUserName.addEventListener("input", CheckButton);
elementUserSurname.addEventListener("input", CheckButton);
elementDestination.addEventListener("input", CheckButton);
elementUserAge.addEventListener("input", CheckButton);

function CheckButton() {
    console.log(elementUserAge.selected);
    if (elementUserName.value && elementUserSurname.value && elementDestination.value && (invalidOption.selected !== true)) {
        compileButton.classList.remove("disabled");
    } else {
        compileButton.classList.add("disabled");
    }
}


/* animazione */

function trainAnimationIn() {
    let position = -100;
    let counter = null; //serve per tenere traccia di 

    function frame() {
        if (position == 48) { //Termina l'animazione quando la posizione è 48% da destra
            clearInterval(counter)
        } else {
            position++; //aumenta di 1%
            ticket.style.right = position + "%"
        }
    }
    counter = setInterval(frame, 10); //esegue l'animazione ogni 10 millisecondi
}

function trainAnimationOut() {
    let position = 48;
    let counter = null;

    function frame() {
        if (position == 200) {
            clearInterval(counter)
        } else {
            position++;
            ticket.style.right = position + "%"
        }
    }
    counter = setInterval(frame, 10);
}

