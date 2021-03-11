// You are creating the "shopping cart experience" for a Online Marketplace.
// You have the list of the available books from the current API:
// https://striveschool-api.herokuapp.com/books
// What you have to do is:
// 0) Get all the products from the API using a fetch  #
// 1) Display the list of items available on the page using template literals `` and .forEach
// 2) Add a "add to cart button"
// 3) When the button is pressed, change the style of the item and add it to another list
// 4) Add "skip" button next to each item
// 5) When pressed, the button should remove from the page the item not interesting from the user
// 6) Add a "search bar". When the user types more than 3 chars, you should filter the content of the page to show only the items with a matching name (hint: use .filter method)
// 7) Allow the user to delete items from the cart list
console.log("hello");
let booksName = [];
const fetchData = async () => {
  try {
    const parent = document.querySelector(".books");
    parent.innerHTML = "";
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/books"
    );
    const data = await response.json();
    console.log(data);
    data.forEach((book) => {
      booksName.push(book.title);
      const list = `
          <li>
            <h5>${book.title}</h5>
          </li>
          <button type="button" id=${book.asin} class="btn btn-primary">Add to cart</button>
        `;
      parent.innerHTML += list;
    });
  } catch (error) {
    console.log(error);
  }
};
console.log(booksName);

window.onload = async function () {
  await fetchData();
};
