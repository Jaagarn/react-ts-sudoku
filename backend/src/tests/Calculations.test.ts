import { arrayToCells } from '../helpers/CellParser';
import { getCanditates } from '../solver/Calculations';
import { valid_board_1, valid_board_easy_sudoku, valid_board_easy_sudoku_solution } from '../testdata/TestBoards';

const canditates156: Set<number> = new Set<number>([4, 7, 9]);
const canditates164: Set<number> = new Set<number>([1, 7]);
const canditates146: Set<number> = new Set<number>([4, 7, 8]);
const noCanditates: Set<number> = new Set<number>([]);

describe('testing calculations', () => {
  test('canditates for a cell returns all canditates 1', () => {
    expect(getCanditates(arrayToCells(valid_board_1), 5, 6)).toStrictEqual(canditates156);
  })
  test('canditates for a cell returns all canditates 2', () => {
    expect(getCanditates(arrayToCells(valid_board_1), 6, 4)).toStrictEqual(canditates164);
  })
  test('canditates for a cell returns all canditates 3', () => {
    expect(getCanditates(arrayToCells(valid_board_1), 4, 6)).toStrictEqual(canditates146);
  })
  test('canditates for a cell returns all canditates 4', () => {
    expect(getCanditates(arrayToCells(valid_board_easy_sudoku), 7, 2)).toStrictEqual(noCanditates);
  })
  test('canditates for a cell returns empty array if no canditates', () => {
    expect(getCanditates(arrayToCells(valid_board_easy_sudoku_solution), 2, 1)).toStrictEqual(noCanditates);
  })
});