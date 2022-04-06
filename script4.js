let proname= prompt("Enter product name:");
document.write(proname);
console.log("proname");


let Subtotal = "Subtotal";
document.write(Subtotal);

let price=prompt("Enter product price:");
console.log("price");

let Quantity= prompt("Enter quantity:");
console.log("Quantity");
document.write (price*Quantity);

let taxes="Taxes";
document.write(taxes);

let taxesnum=price*Quantity/7.25;
taxesnum=taxesnum.toFixed(2);
document.write(taxesnum);

let subtot="Subtotal";
document.write(subtot);

let subtotnum=(price*Quantity)+taxesnum;
subtotnum=subtotnum.toFixed(2);
document.write(subtotnum);