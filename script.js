const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with class names "item" and "price"
  const items = document.querySelectorAll(".item");
  const prices = document.querySelectorAll(".price");

  let totalPrice = 0;

  // Calculate the total price by summing up the individual prices
  for (let i = 0; i < items.length; i++) {
    totalPrice += parseFloat(prices[i].textContent);
  }

  // Create a new row for displaying the total price
  const totalRow = document.createElement("tr");
  const totalCell1 = document.createElement("td");
  totalCell1.textContent = "Total Price";
  const totalCell2 = document.createElement("td");
  totalCell2.textContent = totalPrice;

  totalRow.appendChild(totalCell1);
  totalRow.appendChild(totalCell2);

  // Append the new row to the table
  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
