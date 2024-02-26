import { arrayToCells } from '../helpers/CellParser';
import { solved, solvable, columns, column, square, solvedSet, solvableSet } from '../solver/Validator';
import { invalid_board, invalid_board_1_solution, valid_board_1, valid_board_1_column_4, valid_board_1_columns, valid_board_1_solution, valid_board_1_square_2_2, valid_board_easy_sudoku_solution } from '../testdata/test_boards';

describe('testing solver helpers', () => {
  test('columns extract all columns', () => {
    expect(columns(arrayToCells(valid_board_1))).toStrictEqual(valid_board_1_columns);
  });
  test('column extract a column', () => {
    expect(column(arrayToCells(valid_board_1), 4)).toStrictEqual(valid_board_1_column_4);
  });
  test('square to extract a square', () => {
    expect(square(arrayToCells(valid_board_1), 2, 2)).toStrictEqual(valid_board_1_square_2_2);
  });
  test('solvedSet returns false if not solved', () => {
    expect(solvedSet(valid_board_1_square_2_2)).toStrictEqual(false);
  });
  test('solvedSet returns true if solved', () => {
    expect(solvedSet(square(arrayToCells(valid_board_easy_sudoku_solution), 2, 2))).toStrictEqual(true);
  });
  test('solvableSet returns false if not solvable', () => {
    expect(solvableSet(square(arrayToCells(invalid_board), 2, 0))).toStrictEqual(false);
  });
  test('solvableSet returns true if solvable', () => {
    expect(solvableSet(column(arrayToCells(valid_board_1), 6))).toStrictEqual(true);
  });
  test('solved returns false if not solved', () => {
    expect(solved(arrayToCells(invalid_board_1_solution))).toStrictEqual(false);
  });
  test('solved returns true if solved', () => {
    expect(solved(arrayToCells(valid_board_1_solution))).toStrictEqual(true);
  });
  test('unsolvable returns false if not solvable', () => {
    expect(solvable(arrayToCells(invalid_board))).toStrictEqual(false);
  });
  test('unsolvable returns false if not solvable', () => {
    expect(solvable(arrayToCells(invalid_board_1_solution))).toStrictEqual(false);
  });
  test('solvable returns true if solvable', () => {
    expect(solvable(arrayToCells(valid_board_1))).toStrictEqual(true);
  });
  test('solvable returns true if solvable', () => {
    expect(solvable(arrayToCells(valid_board_1_solution))).toStrictEqual(true);
  });
});