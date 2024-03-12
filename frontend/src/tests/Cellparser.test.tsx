import { arrayToCells, cellsToString, stringToCells } from '../helpers/CellParser';
import { findAndFillCanditates } from '../solver/Crooks';
import { valid_board_easy_sudoku, valid_board_easy_sudoku_solution, 
         valid_board_easy_sudoku_string } 
        from '../testdata/test_boards';

describe('testing cellparsers', () => {
  test('array to celldata array works as intended', () => {
    expect(findAndFillCanditates(arrayToCells(valid_board_easy_sudoku))).toStrictEqual(arrayToCells(valid_board_easy_sudoku_solution));
  })
  test('string to celldata array works as intended', () => {
    expect(stringToCells(valid_board_easy_sudoku_string)).toStrictEqual(arrayToCells(valid_board_easy_sudoku));
  })
  test('celldata to string array works as intended', () => {
    expect(cellsToString(arrayToCells(valid_board_easy_sudoku))).toStrictEqual(valid_board_easy_sudoku_string);
  })
});