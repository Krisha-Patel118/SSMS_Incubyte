const Sweet = require('./Sweet.js');

class SweetShopManagementSystem {
    #availableSweets = [];
    #soldSweets = [];

    // Get a list of available sweets
    getAvailableSweets() {
        return [...this.#availableSweets];
    }
     // Get a list of sold sweets
    getSoldSweets() {
        return [...this.#soldSweets];
    }
      // Add a sweet to the shop
    addSweet(sweet) {
        this.#checkSweetId(sweet.id);
        this.#checkSweetName(sweet.name);
        this.#checkSweetCategory(sweet.category);
        this.#checkSweetPrice(sweet.pricePerUnit);
        this.#checkSweetQuantity(sweet.quantityInStock);

        this.#availableSweets.push(sweet);
        console.log(`Sweet "${sweet.name}" added successfully!`);
    }



    //Check if ID is unique positive integer
    #checkSweetId(id) {
        if (id === null) throw new Error("Sweet ID cannot be null!");
        if (typeof id !== "number" || id <= 0 || !Number.isInteger(id)) throw new Error("Sweet ID must be a positive integer!");
        if (this.#availableSweets.some(sweet => sweet.id === id)) throw new Error(`Sweet with ID ${id} already exists!`);
    }
  
    //Check if an empty sweet name or null sweet name throws an error
    #checkSweetName(name) {
    if (name === null) {
            throw new Error("Sweet name cannot be null!");
        } else if (name.trim() === "") {
            throw new Error("Sweet name cannot be empty");
        }
        return true;
}

     //Check if an empty sweet category or null sweet category throws an error
    #checkSweetCategory(sweetCategory) {
        if (sweetCategory === null) throw new Error("Sweet category cannot be null!");
        if (sweetCategory.trim() === "") throw new Error("Sweet category cannot be empty!");
        return true;
    }


    // Check if the price is a positive number
    #checkSweetPrice(price) {
        if (typeof price !== "number" || price <= 0) throw new Error("Sweet price must be a positive number!");
        return true;
    }

    // Check if the quantity is a positive number
    #checkSweetQuantity(quantity) {
        if (typeof quantity !== "number" || quantity <= 0) throw new Error("Sweet quantity must be a positive number!");
        return true;
    }

}

module.exports = SweetShopManagementSystem;