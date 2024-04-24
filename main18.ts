// ASSIGNMENT NO 18:

/*
Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order.
 Print the list to show that its order has changed.
*/

console.log("ASSIGNMENT NO 18:");

// store the locations in an array:
let placesToVisit: string[] = ["Tokyo", "Pakistan", "America", "China", "Japan"];

// Print the array in its original order:
console.log ("Original order:", placesToVisit);

// Print the array in its original order:
console.log ("Original order:", [...placesToVisit].sort());

// Show that the array instill in its orignial order:
console.log ("Original order:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list:
console.log ("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order:
console.log ("Original order after reverse sorting:", placesToVisit);

// // Reverse the order of the list:
placesToVisit.reverse();
console.log ("Reverse order:", placesToVisit);

// Reverse the order of the list again to get back to he original order:
placesToVisit.reverse();
console.log ("Back to original order:", placesToVisit);

// // Sort the array in alphabetical order:
placesToVisit.sort();
console.log ("Sorted in alphabetical order:", placesToVisit);

// // Sort the array in reverse alphabetical order:
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log ("Sorted in reverse alphabetical order:", placesToVisit);
