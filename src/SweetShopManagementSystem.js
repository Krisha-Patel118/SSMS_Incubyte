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
        this.#availableSweets.push(sweet);
        console.log(`Sweet "${sweet.name}" added successfully!`);
    }
}

module.exports = SweetShopManagementSystem;