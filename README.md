Sudoku solver - React (18.2) with TypeScript(4.9). Added lodash 4.17 for deep copy and comlink 4.4 for simple web workers.

The solution is based on brute force with constraint programming. In terms of sudoku solving I apply methods from Crooks paper https://www.ams.org/notices/200904/rtx090400460p.pdf, but not everything.
In short, the program tries to find and place all naked singels it can find, and then tries to do it again until it's solved or have to guess (naked single = a cell where only one digit can be placed.).
If it's not solved it starts to brute force the solution based on possible canditates for each cell, so it dosen't try 0-9 for each cell if it has constriants from the row, column, or square.

To run it just clone the repo, _npm run install_, _npm run start_. (You can run the tests with _npm run test_). There are three examples, the first two (Board 1 and Board 2) are easy sudokus that only
needs to use the first part of the algorithm to solve them. So it dosen't need brute force. The third one is a hard sudoku and will take around a minute to solve with bruteforce. It runs in a web worker
to not freeze the ui while calculating.

TODO:
Make the ui nicer, maybe use Material ui
Make the user be able to input their own puzzles. Solved and Solvable functions can be used to verify
Make the generator branch use a web worker also so it can will display the "thought" process of the algorithm.

Optimize the brute force solution with more constraints
Utilize Crooks methods more



Futher readings:
https://pi.math.cornell.edu/~mec/Summer2009/meerkamp/Site/Solving_any_Sudoku_II.html
