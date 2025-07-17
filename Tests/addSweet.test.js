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
        const sweet = new Sweet("Gulab Jamun", "Milk Sweet", 25, 100);
        shop.addSweet(sweet);
        const updatedAvailableSweets = shop.getAvailableSweets();
        expect(updatedAvailableSweets).toHaveLength(1);
        expect(updatedAvailableSweets).toContainEqual(sweet);
    });

    //Test to check if a sweet with an empty name throws an error
    test('addSweetWithEmptyName', () => {
        const sweet = new Sweet("", "Milk Sweet", 25, 100);
        expect(() => shop.addSweet(sweet)).toThrow("Sweet name cannot be empty");
    });

     //Test to check if a null sweet name throws an error
    test('addSweetWithNullNameTest', () => {
        const sweet = new Sweet(null, "Milk Sweet", 25, 100);
        expect(() => shop.addSweet(sweet)).toThrow('Sweet name cannot be null!');
    });

    //Test to check if a sweet with an empty category throws an error
    test('addSweetWithEmptyCategory', () => {
        const sweet = new Sweet("Gulab Jamun", "", 25, 100);
        expect(() => shop.addSweet(sweet)).toThrow("Sweet category cannot be empty!");
    });

    //Test to check if sweet name is empty or null
    test('addSweetWithNullCategory', () => {
        const sweet = new Sweet("Gulab Jamun", null, 25, 100);
        expect(() => shop.addSweet(sweet)).toThrow("Sweet category cannot be null!");
    });
});