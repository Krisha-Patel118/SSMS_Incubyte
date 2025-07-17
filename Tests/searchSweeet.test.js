const SweetShopManagementSystem = require('../src/SweetShopManagementSystem');
const Sweet = require('../src/Sweet');

describe('Search Sweet Tests', () => {
    let shop;

    beforeEach(() => {
        shop = new SweetShopManagementSystem();
        shop.addSweet(new Sweet(1, "Gulab Jamun", "Milk Sweet", 100, 10));
        shop.addSweet(new Sweet(2, "Ladoo", "Dry Sweet", 50, 5));
        shop.addSweet(new Sweet(3, "Kala Jamun", "Milk Sweet", 110, 7));
        shop.addSweet(new Sweet(4, "Kaju Katli", "Dry Sweet", 150, 3));
    });

    //Search by name (partial match)
    test('searchByNamePartial', () => {
        const results = shop.searchSweets({ name: "Jamun" });
        const ids = results.map(s => s.id);
        expect(ids).toEqual([1, 3]);
    });

    //Search by category
    test('searchByCategory', () => {
        const results = shop.searchSweets({ category: "Dry Sweet" });
        const ids = results.map(s => s.id);
        expect(ids).toEqual([2, 4]);
    });

    //Search by name and category
    test('searchByNameAndCategory', () => {
        const results = shop.searchSweets({ name: "Kala", category: "Milk Sweet" });
        expect(results).toHaveLength(1);
        expect(results[0].name).toBe("Kala Jamun");
    });

    //Search with no match
    test('searchNoMatch', () => {
        const results = shop.searchSweets({ name: "Barfi" });
        expect(results).toHaveLength(0);
    });

    //Search with no filters (return all)
    test('searchWithNoFilters', () => {
        const results = shop.searchSweets({});
        expect(results).toHaveLength(4);
    });
});