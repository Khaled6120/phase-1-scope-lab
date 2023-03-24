
var customerName = "bob"
const leastFavoriteCustomer = "Khaled"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}

function setBestCustomer(){
     bestCustomer  = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "trying to change const value"
}