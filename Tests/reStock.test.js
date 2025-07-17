const SweetShopManagementSystem = require('../src/SweetShopManagementSystem');
const Sweet = require('../src/Sweet');

describe('Restock Sweet Tests', () => {
    let shop;

    beforeEach(() => {
        shop = new SweetShopManagementSystem();
        shop.addSweet(new Sweet(1, "Barfi", "Milk Sweet", 60, 5));
    });

    test('restockSweet_Valid', () => {
        shop.restockSweet(1, 10);
        const sweet = shop.getAvailableSweets().find(s => s.id === 1);
        expect(sweet.quantity).toBe(15);
    });

    test('restockSweet_InvalidId', () => {
        expect(() => shop.restockSweet(99, 5)).toThrow("Sweet with ID 99 not found.");
    });

    test('restockSweet_ZeroQuantity', () => {
        expect(() => shop.restockSweet(1, 0)).toThrow("Restock quantity must be a positive integer.");
    });

    test('restockSweet_NegativeQuantity', () => {
        expect(() => shop.restockSweet(1, -3)).toThrow("Restock quantity must be a positive integer.");
    });

    test('restockSweet_InvalidIdType', () => {
        expect(() => shop.restockSweet("one", 5)).toThrow("Invalid sweet ID.");
    });
});