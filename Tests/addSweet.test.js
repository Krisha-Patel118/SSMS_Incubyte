const SweetShopManagementSystem = require('../src/SweetShopManagementSystem');
const Sweet = require('../src/Sweet');

describe('SweetShopManagementSystem Tests', () => {
    let shop;
    let availableSweets;
    let soldSweets;

    // beforeEach: runs before each test to reset the shop state
    beforeEach(() => {
        shop = new SweetShopManagementSystem();
        availableSweets = shop.getAvailableSweets();
        soldSweets = shop.getSoldSweets();
    });

    // Test to check adding a valid sweet to the shop
    test('addSweetTest', () => {
        const sweet = new Sweet(1,"Gulab Jamun", "Milk Sweet", 25, 100);
        shop.addSweet(sweet);
        const updatedAvailableSweets = shop.getAvailableSweets();
        expect(updatedAvailableSweets).toHaveLength(1);
        expect(updatedAvailableSweets).toContainEqual(sweet);
    });

    //Test to check if a sweet with an empty name throws an error
    test('addSweetWithEmptyName', () => {
        const sweet = new Sweet(2,"", "Milk Sweet", 25, 100);
        expect(() => shop.addSweet(sweet)).toThrow("Sweet name cannot be empty");
    });

     //Test to check if a null sweet name throws an error
    test('addSweetWithNullNameTest', () => {
        const sweet = new Sweet(3,null, "Milk Sweet", 25, 100);
        expect(() => shop.addSweet(sweet)).toThrow('Sweet name cannot be null!');
    });

    //Test to check if a sweet with an empty category throws an error
    test('addSweetWithEmptyCategory', () => {
        const sweet = new Sweet(4,"Gulab Jamun", "", 25, 100);
        expect(() => shop.addSweet(sweet)).toThrow("Sweet category cannot be empty!");
    });

    //Test to check if sweet name is empty or null
    test('addSweetWithNullCategory', () => {
        const sweet = new Sweet(5,"Gulab Jamun", null, 25, 100);
        expect(() => shop.addSweet(sweet)).toThrow("Sweet category cannot be null!");
    });

    //Test to check for Duplicate ID
     test('addSweetWithDuplicateIdTest', () => {
        const sweet1 = new Sweet(6, "Kaju Katli", "Milk Sweet", 20, 15);
        const sweet2 = new Sweet(6, "Ladoo", "Dry Sweet", 20, 20); 
        shop.addSweet(sweet1);
        expect(() => shop.addSweet(sweet2)).toThrow("Sweet with ID 6 already exists!");
    });

    //Test to check if ID is positive integer
    test('addSweetWithNegativeIdTest', () => {
        const sweet = new Sweet(-1, "Gulab Jamun", "Milk Sweet", 25, 100);
        expect(() => shop.addSweet(sweet)).toThrow("Sweet ID must be a positive integer!");
    });


    //Test to check if Price is Invalid
    test('addSweetWithInvalidPriceTest', () => {
        const sweet = new Sweet(8, "Gulab Jamun", "Milk Sweet", -25, 100);
        expect(() => shop.addSweet(sweet)).toThrow("Sweet price must be a positive number!");
    });

    //Test to check if Quantity is Invalid
    test('addSweetWithInvalidQuantityTest', () => {
        const sweet = new Sweet(9, "Gulab Jamun", "Milk Sweet", 25, -100);
        expect(() => shop.addSweet(sweet)).toThrow("Sweet quantity must be a positive number!");
    });

});