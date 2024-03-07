

// console.log(Document.prototype); show all document properties and method


export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isaN(value) {
    return !isNaN(value)
}

export function addClass(element, value) {
    value = String(value);
    if (Array.isArray(element)) {
        for (let i = 0; i < element.length; i++) {
            element[i].classList.add(value)
        }
    } else {
        element.classList.add(value)
    }
}