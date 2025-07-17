const SweetShopManagementSystem = require('../src/SweetShopManagementSystem');
const Sweet = require('../src/Sweet');

describe('Delete Sweet Tests', () => {
    let shop;

    beforeEach(() => {
        shop = new SweetShopManagementSystem();
        shop.addSweet(new Sweet(1, "Gulab Jamun", "Milk Sweet", 100, 10));
        shop.addSweet(new Sweet(2, "Kaju Katli", "Dry Sweet", 50, 10));
    });

    //Test 1: Successfully delete existing sweet
    test('deleteExistingSweetTest', () => {
        shop.deleteSweetById(1);
        const sweets = shop.getAvailableSweets();
        expect(sweets).toHaveLength(1);
        expect(sweets[0].id).toBe(2);
    });

    //Test 2: Try to delete a sweet that doesn't exist
    test('deleteNonExistingSweetTest', () => {
        expect(() => shop.deleteSweetById(96)).toThrow("Sweet with ID 96 not found!");
    });

    //Test 3: Delete then try to view same ID
    test('deleteThenViewTest', () => {
        shop.deleteSweetById(2);
        expect(() => shop.viewSweetById(2)).toThrow("Sweet with ID 2 not found!");
    });

    //Test 4: Delete all sweets
    test('deleteAllSweetsTest', () => {
        shop.deleteSweetById(1);
        shop.deleteSweetById(2);
        expect(shop.getAvailableSweets()).toHaveLength(0);
    });
});