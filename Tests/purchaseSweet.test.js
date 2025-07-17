const SweetShopManagementSystem = require('../src/SweetShopManagementSystem');
const Sweet = require('../src/Sweet');

describe('Purchase Sweet Tests', () => {
    let shop;

    beforeEach(() => {
        shop = new SweetShopManagementSystem();
        shop.addSweet(new Sweet(1, "Gulab Jamun", "Milk Sweet", 100, 10));
        shop.addSweet(new Sweet(2, "Ladoo", "Dry Sweet", 50, 5));
    });

    test('purchaseSweet_Valid', () => {
        shop.purchaseSweet(1, 3);
        const available = shop.getAvailableSweets();
        const gulab = available.find(s => s.id === 1);
        expect(gulab.quantity).toBe(7); 

        const sold = shop.getSoldSweets();
        expect(sold).toContainEqual({
            id: 1,
            name: "Gulab Jamun",
            category: "Milk Sweet",
            quantity: 3, 
            price: 100,  
            totalAmount: 300
        });
    });

    test('purchaseSweet_ExactStock', () => {
        shop.purchaseSweet(2, 5);
        const ladoo = shop.getAvailableSweets().find(s => s.id === 2);
        expect(ladoo.quantity).toBe(0); // updated
    });

    test('purchaseSweet_InsufficientStock', () => {
        expect(() => shop.purchaseSweet(1, 15)).toThrow("Only 10 units available for Gulab Jamun.");
    });

    test('purchaseSweet_InvalidId', () => {
        expect(() => shop.purchaseSweet(99, 1)).toThrow("Sweet with ID 99 not found.");
    });

    test('purchaseSweet_InvalidQuantity', () => {
        expect(() => shop.purchaseSweet(1, 0)).toThrow("Purchase quantity must be a positive integer.");
    });

    test('purchaseSweet_NegativeQuantity', () => {
        expect(() => shop.purchaseSweet(1, -2)).toThrow("Purchase quantity must be a positive integer.");
    });
});