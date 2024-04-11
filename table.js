
const companies = [
    ["Saab", "Stockholm", 1937],
    ["Volvo Group", "Göteborg", 1927],
    ["Sandvik AB", "Stockholm", 1862],
    ["Atlas Copco Group", "Nacka", 1873],
    ["Electrolux AB", "Stockholm", 1919],
    ["Skanska AB", "Stockholm", 1887],    
];

table = document.getElementById("listOfCompanies");

for (var i = 0; i < companies.length; i++)
           {
               // create a new row
               var newRow = table.insertRow(table.length);
               
               for(var j = 0; j < companies[i].length; j++)
               {
                   // create a new cell
                   var cell = newRow.insertCell(j);
                   
                   // add value to the cell
                   cell.innerHTML = companies[i][j];
               }
           }