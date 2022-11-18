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

document.getElementById("body").appendChild(table);

let row_1 = document.createElement("tr");

let headings = ["FirstName", "LastName", "Age", "Button"];
headings.forEach((item) => {
  let heading = document.createElement("th");
  heading.innerHTML = item;
  row_1.append(heading);
});
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
