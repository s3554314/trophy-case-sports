"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1
	
   Author: Justin McClure
   Date: March 15, 2025

   Filename: tc_cart.js
*/

// Initialize the running total and start building the shopping cart table
let orderTotal = 0;
let cartHTML = "<table>" +
               "<tr>" +
               "<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>" +
               "</tr>";

// Loop through the items and build each table row
for (let i = 0; i < item.length; i++) {
   // Use the itemImage array to display a distinct icon
   cartHTML += "<tr>" +
               "<td><img src='" + itemImage[i] + "' alt='Item " + item[i] + "' /></td>" +
               "<td>" + itemDescription[i] + "</td>" +
               "<td>$" + itemPrice[i].toFixed(2) + "</td>" +
               "<td>" + itemQty[i] + "</td>";
   
   // Calculate the cost for the current item
   let itemCost = itemPrice[i] * itemQty[i];
   
   // Add the cost cell and close the row
   cartHTML += "<td>$" + itemCost.toFixed(2) + "</td></tr>";
   
   // Add the item cost to the order total
   orderTotal += itemCost;
}

// Append the subtotal row to the table
cartHTML += "<tr>" +
            "<td colspan='4'>Subtotal</td>" +
            "<td>$" + orderTotal.toFixed(2) + "</td>" +
            "</tr>" +
            "</table>";

// Insert the completed shopping cart table into the page
document.getElementById("cart").innerHTML = cartHTML;
