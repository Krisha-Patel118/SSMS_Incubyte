const Sweet = require("./Sweet.js");

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
    this.#checkSweetPrice(sweet.price);
    this.#checkSweetQuantity(sweet.quantity);

    this.#availableSweets.push(sweet);
    console.log(`Sweet "${sweet.name}" added successfully!`);
  }

  //Check if ID is unique positive integer
  #checkSweetId(id) {
    if (id === null) throw new Error("Sweet ID cannot be null!");
    if (typeof id !== "number" || id <= 0 || !Number.isInteger(id))
      throw new Error("Sweet ID must be a positive integer!");
    if (this.#availableSweets.some((sweet) => sweet.id === id))
      throw new Error(`Sweet with ID ${id} already exists!`);
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
    if (sweetCategory === null)
      throw new Error("Sweet category cannot be null!");
    if (sweetCategory.trim() === "")
      throw new Error("Sweet category cannot be empty!");
    return true;
  }

  // Check if the price is a positive number
  #checkSweetPrice(price) {
    if (typeof price !== "number" || price <= 0)
      throw new Error("Sweet price must be a positive number!");
    return true;
  }

  // Check if the quantity is a positive number
  #checkSweetQuantity(quantity) {
    if (typeof quantity !== "number" || quantity <= 0)
      throw new Error("Sweet quantity must be a positive number!");
    return true;
  }

  viewSweetById(id) {
    const sweet = this.#availableSweets.find((sweet) => sweet.id === id);
    if (!sweet) {
      throw new Error(`Sweet with ID ${id} not found!`);
    }
    return { ...sweet };
  }

  //Delete a sweet by ID
  deleteSweetById(id) {
    const index = this.#availableSweets.findIndex((sweet) => sweet.id === id);
    if (index === -1) {
      throw new Error(`Sweet with ID ${id} not found!`);
    }

    const deletedSweet = this.#availableSweets.splice(index, 1)[0];
    console.log(
      `Sweet "${deletedSweet.name}" with ID ${id} deleted successfully!`
    );
  }

  //Search sweets by name or category
  searchSweets({ name, category }) {
    return this.#availableSweets.filter((sweet) => {
      const matchesName = name
        ? sweet.name.toLowerCase().includes(name.toLowerCase())
        : true;
      const matchesCategory = category
        ? sweet.category.toLowerCase() === category.toLowerCase()
        : true;

      return matchesName && matchesCategory;
    });
  }
  //Purchase a sweet by ID and quantity
  purchaseSweet(id, quantity) {
    if (typeof id !== "number" || !Number.isInteger(id) || id <= 0) {
      throw new Error("Invalid sweet ID.");
    }

    if (
      typeof quantity !== "number" ||
      quantity <= 0 ||
      !Number.isInteger(quantity)
    ) {
      throw new Error("Purchase quantity must be a positive integer.");
    }

    const sweetIndex = this.#availableSweets.findIndex((s) => s.id === id);
    if (sweetIndex === -1) {
      throw new Error(`Sweet with ID ${id} not found.`);
    }

    const sweet = this.#availableSweets[sweetIndex];

    if (sweet.quantity < quantity) {
      throw new Error(
        `Only ${sweet.quantity} units available for ${sweet.name}.`
      );
    }

    // Deduct quantity from available
    sweet.quantity -= quantity;

    // Add to sold list
    this.#soldSweets.push({
      id: sweet.id,
      name: sweet.name,
      category: sweet.category,
      quantity: quantity,
      price: sweet.price,
      totalAmount: quantity * sweet.price,
    });

    console.log(`${quantity} ${sweet.name}(s) purchased successfully!`);
  }
}
module.exports = SweetShopManagementSystem;
