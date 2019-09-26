function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(name, surname){
    return name+" "+surname;
}

function makeHalfPrice(price){
    return price / 2;
}

function countBooks(books){
    return books.length;
}

function isInStock(book){
    if(book.quantity >= 1){
        return true;
    }
    return false;
}

function getTotalOrderPrice(price,quantity){
    return ((price*quantity)*0.2)+(price*quantity);
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};