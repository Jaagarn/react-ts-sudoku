import { arrayToCells, cellsToString } from "../helpers/CellParser";
import { CellData } from "../solver/CellData";
import { findCanditates } from "../solver/Crooks";
import { recursionStartGenerator, recursionStartStringGenerator } from "../solver/CrooksGenerator";
import { solved } from "../solver/Validator";
import {
  valid_board_easy_sudoku, valid_board_easy_sudoku_almost_solved,
  valid_board_easy_sudoku_solution, valid_board_expert_sudoku,
}
  from "../testdata/test_boards";

describe('testing cooks recursion', () => {
  test('recursionGeneratorStart solves a simple sudoku 1', () => {
    let board = arrayToCells(valid_board_easy_sudoku_almost_solved);
    let recursiveGenerator = recursionStartGenerator(board, findCanditates(board));
    while (!recursiveGenerator.next().done) {
      board = recursiveGenerator.next().value;
    }
    expect(board).toStrictEqual(arrayToCells(valid_board_easy_sudoku_solution));
  })
  test('recursionGeneratorStart solves a simple sudoku 2', () => {
    let board = arrayToCells(valid_board_easy_sudoku);
    let recursiveGenerator = recursionStartGenerator(board, findCanditates(board));
    do  {
      board = recursiveGenerator.next().value;
    } while (!recursiveGenerator.next().done)

    expect(board).toStrictEqual(arrayToCells(valid_board_easy_sudoku_solution));
  })
  test('recursionGeneratorStart solves an expert sudoku', () => {
    let board = arrayToCells(valid_board_expert_sudoku);
    let recursiveGenerator = recursionStartGenerator(board, findCanditates(board));
    do  {
      board = recursiveGenerator.next().value;
    } while (!recursiveGenerator.next().done)

    expect(solved(board)).toStrictEqual(true);
  })
  test('recursionStartGeneratorString solves an expert sudoku', () => {
    let board = cellsToString(arrayToCells(valid_board_expert_sudoku));
    let currentBoard = new Array<CellData>();
    let recursiveGenerator = recursionStartStringGenerator(board);
    do  {
      currentBoard = recursiveGenerator.next().value;
    } while (!recursiveGenerator.next().done)

    expect(solved(currentBoard)).toStrictEqual(true);
  })
});