const SweetShopManagementSystem = require('../src/SweetShopManagementSystem');
const Sweet = require('../src/Sweet');

describe('View Sweet Tests', () => {
    let shop;

    beforeEach(() => {
        shop = new SweetShopManagementSystem();
        shop.addSweet(new Sweet(10, "Rasgulla", "Milk Sweet", 50, 20));
    });

    //View existing sweet
    test('viewSweetById_Valid', () => {
        const sweet = shop.viewSweetById(10);
        expect(sweet).toEqual({
            id: 10,
            name: "Rasgulla",
            category: "Milk Sweet",
            pricePerUnit: 50,
            quantityInStock: 20
        });
    });

    //Invalid sweet ID
    test('viewSweetById_Invalid', () => {
        expect(() => shop.viewSweetById(99)).toThrow("Sweet with ID 99 not found!");
    });

    //Ensure returned object is a copy
    test('returnedSweetIsACopy', () => {
        const sweet = shop.viewSweetById(10);
        sweet.name = "Tampered";

        const actual = shop.getAvailableSweets()[0];
        expect(actual.name).not.toBe("Tampered");
    });
});