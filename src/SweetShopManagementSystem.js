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
      if (this.#checkSweetName(sweet.name) && this.#checkSweetCategory(sweet.category)) {
          this.#availableSweets.push(sweet);
          console.log(`Sweet "${sweet.name}" added successfully!`);
      }
    }
    

    #checkSweetCategory(sweetCategory) {
        if (sweetCategory === null) throw new Error("Sweet category cannot be null!");
        if (sweetCategory.trim() === "") throw new Error("Sweet category cannot be empty!");
        return true;
    }
    // Check if the sweet name is empty or null
    #checkSweetName(name) {
    if (name === null) {
            throw new Error("Sweet name cannot be null!");
        } else if (name.trim() === "") {
            throw new Error("Sweet name cannot be empty");
        }
        return true;
}


}

module.exports = SweetShopManagementSystem;