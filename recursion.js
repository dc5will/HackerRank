'use strict';

/* NOTE: 
Recursion = extremely important algorithm concept that involves splitting a problem into two parts: a base base and a recursive case. The problem is divided into smaller subproblems which are then solved recursively until such time as they are small enough and meet some base case is met, the solution for each subproblem are combined and their result is the answer to the entire problem.

If the base case is not met, the function's recursive case calls the function again with modified values. The code must be structured in such a way that the base case is reachable after some number of iterations, meaning that each subsequent modified value should bring you closer and closer to the base case; otherwise, you'll be stuck in the dreaded infinite loop!

It's important to note that any task that can be accomplished recursively can also be performed iteratively (i.e., through a sequence of repeatable steps). Recursive solutions tend to be easier to read and understand than iterative ones, but there are often performance drawbacks associated with recursive solutions that you're going to want to evaluate on a case-by-case basis. Typically, we use recursion when each recursive call significantly reduces the size of the problem (e.g., if we can halve the dataset during each recursive call). Regardless of the advisability of recursively solving a problem, it's extremely important to practice and understand how to recursively solve problems.
*/

/* HACK: Fibonacci Numbers - The Fibonacci Sequence

The Fibonacci sequence appears in nature all around us, in the arrangement of seeds in a sunflower and the spiral of a nautilus for example.

The Fibonacci sequence begins with fibonacci(0) = 0 and fibonacci(1) = 1 as its first and second terms. After these first two elements, each subsequent element is equal to the sum of the previous two elements.

Programmatically:
- fibonacci(0) = 0
- fibonacci(1) = 1
- fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)

Given n, return the nth number in the sequence.

As an example, n = 5. The Fibonacci sequence to 6 is fs=[0,1,1,2,3,5,8]. With zero-based indexing, fs[5] = 5.
*/