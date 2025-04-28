"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1
  
   Author: Justin McClure
   Date: March 15, 2025
     
   Filename: tc_order.js  

   The item array contains the ID numbers of the items ordered by the customer
   The itemDescription array contains the description of each item
   The itemPrice array contains the price of each item
   The itemQty array contains the quantity ordered of each item
*/

// Item data
let item = [10582, 23015, 41807, 10041];

let itemDescription = [
  "1975 Green Bay Packers Football (signed), Item 10582",
  "Tom Landry 1955 Football Card (unsigned), Item 23015",
  "1916 Army-Navy Game, Framed Photo (signed), Item 41807",
  "Protective Card Sheets, Item 10041"
];

let itemPrice = [149.93, 89.98, 334.93, 22.67];

let itemQty = [1, 1, 1, 4];

/*
   Example (not part of the official instructions):
   A parallel array containing the image filenames for each item.
   Make sure these files exist in your project folder or adjust the paths accordingly.
*/
let itemImage = [
  "tc_10582.png",  // for item[0] = 10582
  "tc_23015.png",  // for item[1] = 23015
  "tc_41807.png",  // for item[2] = 41807
  "tc_10041.png"   // for item[3] = 10041
];
