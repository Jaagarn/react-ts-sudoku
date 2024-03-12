import { CanditatesHolder } from '../helpers/CanditatesHolder';
import { arrayToCells } from '../helpers/CellParser';
import { findAndFillCanditates, findCanditates } from '../solver/Crooks';
import { valid_board_easy_sudoku_almost_solved, valid_board_easy_sudoku_solution, valid_board_easy_sudoku } from '../testdata/test_boards';

const findCanditatesResult: Array<CanditatesHolder> = [
  new CanditatesHolder(1, 1, new Set([5])), 
  new CanditatesHolder(4, 4, new Set([7])), 
  new CanditatesHolder(8, 8, new Set([7])), 
];

describe('testing cooks', () => {
  test('findCanditates does what it says', () => {
    expect(findCanditates(arrayToCells(valid_board_easy_sudoku_almost_solved))).toStrictEqual(findCanditatesResult)
  })
  test('findAndFillCanditates does what it says', () => {
    expect(findAndFillCanditates(arrayToCells(valid_board_easy_sudoku))).toStrictEqual(arrayToCells(valid_board_easy_sudoku_solution))
  })
});