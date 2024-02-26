import { arrayToCells } from '../helpers/CellParser';
import { getCanditates } from '../solver/Calculations';
import { findAndFillCanditates } from '../solver/Cooks';
import { invalid_board, invalid_board_1_solution, valid_board_1, valid_board_1_column_4, valid_board_1_columns, valid_board_1_solution, valid_board_1_square_2_2, valid_board_easy_sudoku, valid_board_easy_sudoku_solution } from '../testdata/test_boards';

const canditates156: Set<number> = new Set<number>([1, 7, 8]);
const canditatesEasy72: Set<number> = new Set<number>([5, 7]);
const noCanditates: Set<number> = new Set<number>([]);

describe('testing cooks', () => {
  test('fnidAndFillCanditates does what it says', () => {
  })
});