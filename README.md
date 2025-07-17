# Sweet Shop Management System 
This is a simple yet complete Sweet Shop Management System developed using JavaScript and tested with Jest. It follows the principles of Test Driven Development (TDD) and offers key functionalities including adding, viewing, updating, deleting, searching, purchasing, and restocking sweets. With robust input validation and error handling, the system provides a dependable and practical simulation of a real-world sweet shop.


## Features

* Add and manage new sweets with unique ID, name, category, price, and quantity
* View all currently available and previously sold sweets in the system
* Delete sweets from the inventory using their unique ID
* Search sweets efficiently by their name or category
* Purchase sweets with automatic validation of available quantity
* Restock sweets by specifying the ID and restock quantity
* Ensure proper input validation and comprehensive error handling throughout


---

## TDD (Test Driven Development)

This project was carefully developed following the principles of Test Driven Development (TDD), ensuring that every feature is robust and reliable through systematic testing.

The three core rules of TDD are:

1. Always begin by writing just enough code to intentionally make the test fail.
2. Then, write the minimum amount of code required to make the failing test pass.
3. Finally, refactor the code where needed to improve structure or performance without altering its functionality.

---

## Getting Started

### Prerequisites

Make sure the following are installed on your system:
- Node.js
- npm (Node Package Manager)

### Installation Steps

1. Download or clone the project using this link:
   https://github.com/Krisha-Patel118/SSMS_Incubyte.git

2. Open a terminal/command prompt and go to the project folder.

3. Type the command to install all the required packages:
   (This will download everything the project needs to run.)
   → Run: `npm install`

---

## Running the Tests

### To run **all the tests** at once:
- Open the terminal in the project folder
- Type and run:
  → `npm test`

### To test specific features individually:

- To test adding sweets:
  → Run: `npx jest tests/addSweet.test.js`

- To test viewing sweets:
  → Run: `npx jest tests/viewSweet.test.js`

- To test deleting sweets:
  → Run: `npx jest tests/deleteSweet.test.js`

- To test searching sweets:
  → Run: `npx jest tests/searchSweet.test.js`

- To test purchasing sweets:
  → Run: `npx jest tests/purchaseSweet.test.js`

- To test restocking sweets:
  → Run: `npx jest tests/restockSweet.test.js`

(You can copy and paste any of the above commands into your terminal.)

---

## Built With

- JavaScript (Node.js) – Core application logic
- Jest – For writing and running tests

---

## Author

**Krisha Patel**  
L.D. College of Engineering  
GitHub: [https://github.com/Krisha-Patel118](https://github.com/Krisha-Patel118)
