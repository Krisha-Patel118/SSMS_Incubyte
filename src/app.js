class SweetShopManagementSystem {
    #availableSweets = [];

    // Method to add a sweet to the shop
    addSweet(sweet) {
        this.#availableSweets.push(sweet);
        console.log(`Sweet "${sweet.name}" added successfully!`);
    }
}