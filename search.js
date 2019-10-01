'use strict';

/* NOTE: 
Binary Search = Very efficient way to find data in a sorted dataset. Binary Search is a recursive algorithm that works by partitioning the dataset in half and then evaluating whether the desired value will fall in the lower half of the upper half of the dataset. You then simply continue to recurisvely search whichever half the desired value would be located in until such a time as you either find the desired value in the dataset or the dataset can no longer by halved.

Complexity = Worst Case -> O(log n), Best Case -> O(1), Avg case -> O(log n)
*/

/* HACK: Hash Tables - Ice Cream Parlor - Each time Sunny and Johnny take a trip to the Ice Cream Parlor, they pool their money to buy ice cream. On any given day, the parlor offers a line of flavors. Each flavor has a cost associated with it.

Given the value of money and the cost of each flavor for t trips to the Ice Cream Parlor, help Sunny and Johnny choose two distinct flavors such that they spend their entire pool of money during each visit. ID numbers are the 1- based index number associated with a cost. For each trip to the parlor, print the ID numbers for the two types of ice cream that Sunny and Johnny purchase as two space-separated integers on a new line. You must print the smaller ID first and the larger ID second.

For example, there are n = 5 flavors having cost = [2,1,3,5,6]. Together they have money = 5 to spend. They would purchase flavor ID's 1 and 3 for a cost of 2 + 3 = 5. Use 1 based indexing for your response.

*/

function whatFlavors(cost, money) {

}