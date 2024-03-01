function validateHeight(height) {
    const validateRegex = new RegExp(/^(\d)[.,]?(\d{1,2})?$/);
    return validateRegex.test(height) 
}

function validateWeight(weight) {
    const validateRegex = new RegExp(/^(\d{1,3})[.,]?(\d{1,2})?$/);
    return validateRegex.test(weight)
}

function validateDigit(value) {
    const regex = /[^0-9,.]/g;
    return value.replace(regex , "")
}

//const regexHeight = /^(\d{1,3})[.,](\d{1,2})$/;

export {validateHeight , validateWeight  , validateDigit}
