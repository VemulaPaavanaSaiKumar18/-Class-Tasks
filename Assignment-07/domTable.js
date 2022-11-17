const data = [
  { firstName: "John", lastName: "Doe", age: 46, button: "Alert" },
  { firstName: "Joanne", lastName: "kumar", age: 43, button: "Alert" },
  { firstName: "Sai", lastName: "bai", age: 20, button: "Alert" },
  { firstName: "Raja", lastName: "rav", age: 25, button: "Alert" },
  { firstName: "Rama", lastName: "bai", age: 18, button: "Alert" },
  { firstName: "Raj", lastName: "v", age: 27, button: "Alert" },
];
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

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

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
thead.appendChild(row_1);

data.map((item) => {
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

  row.appendChild(rowData_1);
  row.appendChild(rowData_2);
  row.appendChild(rowData_3);
  row.appendChild(rowButton);
  tbody.appendChild(row);

  const alertBox = () => {
    alert(item.firstName);
  };

  rowButton.addEventListener("click", alertBox);
});
