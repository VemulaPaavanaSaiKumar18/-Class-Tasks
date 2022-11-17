const data = [
  { firstName: "John", lastName: "Doe", age: 46, button: "Alert" },
  { firstName: "Joanne", lastName: "kumar", age: 43, button: "Alert" },
  { firstName: "Sai", lastName: "bai", age: 20, button: "Alert" },
  { firstName: "Raja", lastName: "rav", age: 25, button: "Alert" },
  { firstName: "Rama", lastName: "bai", age: 18, button: "Alert" },
  { firstName: "Raj", lastName: "v", age: 27, button: "Alert" },
];
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

table.append(thead, tbody);

// Adding the entire table to the body tag
document.getElementById("body").appendChild(table);

// Creating and adding data to first row of the table
let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = "FirstName";
let heading_2 = document.createElement("th");
heading_2.innerHTML = "LastName";
let heading_3 = document.createElement("th");
heading_3.innerHTML = "Age";
let heading_4 = document.createElement("th");
heading_4.innerHTML = "Button";

row_1.append(heading_1, heading_2, heading_3, heading_4);
thead.appendChild(row_1);

data.forEach((item) => {
  let row = document.createElement("tr");
  let rowData_1 = document.createElement("td");
  rowData_1.innerHTML = item.firstName;
  let rowData_2 = document.createElement("td");
  rowData_2.innerHTML = item.lastName;
  let rowData_3 = document.createElement("td");
  rowData_3.innerHTML = item.age;
  let rowButton = document.createElement("td");
  rowButton.setAttribute("class", "button");
  rowButton.innerText = item.button;

  row.append(rowData_1, rowData_2, rowData_3, rowButton);
  tbody.appendChild(row);

  const alertBox = () => {
    alert(item.firstName);
  };

  rowButton.addEventListener("click", alertBox);
});
