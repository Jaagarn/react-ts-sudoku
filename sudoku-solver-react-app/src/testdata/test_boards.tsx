
const valid_board_1_json: string = `
 {"sudoku_board": [ 
  3, 0, 6, 5, 0, 8, 4, 0, 0,
  5, 2, 0, 0, 0, 0, 0, 0, 0,
  0, 8, 7, 0, 0, 0, 0, 3, 1,
  0, 0, 3, 0, 1, 0, 0, 8, 0,
  9, 0, 0, 8, 6, 3, 0, 0, 5,
  0, 5, 0, 0, 9, 0, 6, 0, 0, 
  1, 3, 0, 0, 0, 0, 2, 5, 0,
  0, 0, 0, 0, 0, 0, 0, 7, 4,
  0, 0, 5, 2, 0, 6, 3, 0, 0 
  ]}`;

const valid_board_1: number[] = [
    3, 1, 6, 5, 0, 8, 4, 0, 0,
    5, 2, 9, 0, 0, 0, 0, 0, 0,
    0, 8, 7, 0, 0, 0, 0, 3, 1,
    0, 0, 3, 0, 1, 0, 0, 8, 0,
    9, 0, 0, 8, 6, 3, 0, 2, 5,
    0, 5, 0, 0, 9, 0, 6, 0, 0,
    1, 3, 0, 0, 0, 0, 2, 5, 0,
    0, 0, 0, 0, 0, 0, 0, 7, 4,
    0, 0, 5, 2, 0, 6, 3, 0, 0
];

const valid_board_1_square_2_2: number[] = [
  2, 0, 3, 5, 7, 0, 0, 4, 0,
];

const valid_board_1_columns: number[] = [
  3, 5, 0, 0, 9, 0, 1, 0, 0,
  1, 2, 8, 0, 0, 5, 3, 0, 0,
  6, 9, 7, 3, 0, 0, 0, 0, 5,
  5, 0, 0, 0, 8, 0, 0, 0, 2,
  0, 0, 0, 1, 6, 9, 0, 0, 0,
  8, 0, 0, 0, 3, 0, 0, 0, 6,
  4, 0, 0, 0, 0, 6, 2, 0, 3,
  0, 0, 3, 8, 2, 0, 5, 7, 0,
  0, 0, 1, 0, 5, 0, 0, 4, 0,
];

const valid_board_1_column_4: number[] = [
  0, 0, 0, 1, 6, 9, 0, 0, 0,
];

const valid_board_1_solution: number[] = [
    3, 1, 6, 5, 7, 8, 4, 9, 2,
    5, 2, 9, 1, 3, 4, 7, 6, 8,
    4, 8, 7, 6, 2, 9, 5, 3, 1,
    2, 6, 3, 4, 1, 5, 9, 8, 7,
    9, 7, 4, 8, 6, 3, 1, 2, 5,
    8, 5, 1, 7, 9, 2, 6, 4, 3,
    1, 3, 8, 9, 4, 7, 2, 5, 6,
    6, 9, 2, 3, 5, 1, 8, 7, 4,
    7, 4, 5, 2, 8, 6, 3, 1, 9
];

const invalid_board_1_solution: number[] = [
  3, 1, 6, 5, 7, 8, 4, 9, 2,
  5, 2, 9, 1, 3, 4, 7, 6, 8,
  4, 8, 7, 6, 2, 9, 5, 3, 1,
  2, 6, 3, 4, 1, 5, 9, 8, 7,
  9, 7, 4, 8, 6, 3, 1, 2, 5,
  8, 5, 1, 7, 9, 2, 6, 4, 3,
  1, 3, 8, 9, 4, 7, 2, 5, 6,
  6, 9, 2, 3, 5, 1, 8, 7, 4,
  7, 4, 5, 2, 8, 6, 3, 1, 7
];

const invalid_board: number[] = [
    3, 0, 6, 5, 0, 8, 4, 0, 0,
    5, 2, 0, 0, 0, 0, 0, 1, 0,
    0, 8, 7, 0, 0, 0, 0, 3, 1,
    0, 0, 3, 0, 1, 0, 0, 8, 0,
    9, 0, 0, 8, 6, 3, 0, 0, 5,
    0, 5, 0, 0, 9, 0, 6, 0, 0,
    1, 3, 0, 0, 0, 0, 2, 5, 0,
    0, 0, 0, 0, 0, 0, 0, 7, 4,
    0, 0, 5, 2, 0, 6, 3, 0, 0
];

const valid_board_easy_sudoku_string: string = 
"060001003850069200040803069076102000408000106000604970590406020002390014300500090";

const valid_board_easy_sudoku: number[] = [
    0, 6, 0, 0, 0, 1, 0, 0, 3,
    8, 5, 0, 0, 6, 9, 2, 0, 0,
    0, 4, 0, 8, 0, 3, 0, 6, 9,
    0, 7, 6, 1, 0, 2, 0, 0, 0,
    4, 0, 8, 0, 0, 0, 1, 0, 6,
    0, 0, 0, 6, 0, 4, 9, 7, 0,
    5, 9, 0, 4, 0, 6, 0, 2, 0,
    0, 0, 2, 3, 9, 0, 0, 1, 4,
    3, 0, 0, 5, 0, 0, 0, 9, 0
];

const valid_board_easy_sudoku_solution: number[] = [
    7, 6, 9, 2, 4, 1, 8, 5, 3,
    8, 5, 3, 7, 6, 9, 2, 4, 1,
    2, 4, 1, 8, 5, 3, 7, 6, 9,
    9, 7, 6, 1, 3, 2, 4, 8, 5,
    4, 2, 8, 9, 7, 5, 1, 3, 6,
    1, 3, 5, 6, 8, 4, 9, 7, 2,
    5, 9, 7, 4, 1, 6, 3, 2, 8,
    6, 8, 2, 3, 9, 7, 5, 1, 4,
    3, 1, 4, 5, 2, 8, 6, 9, 7
];

const valid_board_easy_sudoku_almost_solved: number[] = [
    7, 6, 9, 2, 4, 1, 8, 5, 3,
    8, 0, 3, 7, 6, 9, 2, 4, 1,
    2, 4, 1, 8, 5, 3, 7, 6, 9,
    9, 7, 6, 1, 3, 2, 4, 8, 5,
    4, 2, 8, 9, 0, 5, 1, 3, 6,
    1, 3, 5, 6, 8, 4, 9, 7, 2,
    5, 9, 7, 4, 1, 6, 3, 2, 8,
    6, 8, 2, 3, 9, 7, 5, 1, 4,
    3, 1, 4, 5, 2, 8, 6, 9, 0
];

const valid_board_hard_sudoku: number[] = [
    7, 0, 0, 0, 0, 6, 0, 0, 3,
    4, 0, 0, 0, 0, 9, 0, 0, 0,
    5, 0, 0, 0, 1, 0, 7, 0, 4,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 6, 0, 0, 0, 1, 0, 0, 7,
    3, 0, 0, 5, 0, 0, 0, 0, 8,
    0, 2, 0, 0, 0, 8, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 9, 4, 0,
    0, 3, 0, 0, 9, 0, 0, 8, 0
];

const valid_board_hard_sudoku_solution: number[] = [
    7, 9, 2, 4, 5, 6, 8, 1, 3,
    4, 1, 3, 7, 8, 9, 6, 2, 5,
    5, 8, 6, 2, 1, 3, 7, 9, 4,
    1, 5, 7, 8, 6, 4, 2, 3, 9,
    2, 6, 8, 9, 3, 1, 4, 5, 7,
    3, 4, 9, 5, 7, 2, 1, 6, 8,
    9, 2, 5, 6, 4, 8, 3, 7, 1,
    8, 7, 1, 3, 2, 5, 9, 4, 6,
    6, 3, 4, 1, 9, 7, 5, 8, 2
];

const valid_board_expert_sudoku: number[] = [
    0, 0, 4, 0, 0, 3, 0, 5, 0,
    0, 0, 0, 0, 0, 9, 0, 0, 3,
    6, 0, 0, 2, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 4, 0, 0,
    0, 0, 7, 0, 0, 1, 0, 8, 0,
    0, 0, 0, 4, 8, 5, 1, 0, 2,
    0, 0, 9, 0, 0, 8, 0, 0, 5,
    0, 5, 0, 0, 3, 0, 2, 0, 0,
    0, 7, 0, 0, 0, 0, 0, 6, 0
];

const valid_board_expert_sudoku_solution: number[] = [
    2, 6, 4, 8, 1, 3, 9, 5, 7,
    5, 8, 1, 7, 4, 9, 6, 2, 3,
    7, 9, 3, 2, 5, 6, 8, 4, 1,
    8, 1, 5, 9, 7, 2, 4, 3, 6,
    4, 2, 7, 3, 6, 1, 5, 8, 9,
    9, 3, 6, 4, 8, 5, 1, 7, 2,
    3, 4, 9, 6, 2, 8, 7, 1, 5,
    6, 5, 8, 1, 3, 7, 2, 9, 4,
    1, 7, 2, 5, 9, 4, 3, 6, 8
];

const valid_board_very_hard: number[] = [
    5, 0, 0, 0, 0, 0, 0, 0, 9,
    0, 2, 0, 1, 0, 0, 0, 7, 0, 
    0, 0, 8, 0, 0, 0, 3, 0, 0, 
    0, 4, 0, 0, 0, 2, 0, 0, 0, 
    0, 0, 0, 0, 5, 0, 0, 0, 0, 
    0, 0, 0, 7, 0, 6, 0, 1, 0,
    0, 0, 3, 0, 0, 0, 8, 0, 0,
    0, 6, 0, 0, 0, 4, 0, 2, 0,
    9, 0, 0, 0, 0, 0, 0, 0, 5
]

const invalid_board_json: string = `
{Error"sudoku_board": [
    3, 0, 6, 5, 0, 8, 4, 0, 0,
    5, 2, 0, 0, 0, 0, 0, 0, 0,
    0, 8, 7, 0, 0, 0, 0, 3, 1,
    0, 0, 3, 0, 1, 0, 0, 8, 0,
    9, 0, 0, 8, 6, 3, 0, 0, 5,
    0, 5, 0, 0, 9, 0, 6, 0, 0,
    1, 3, 0, 0, 0, 0, 2, 5, 0,
    0, 0, 0, 0, 0, 0, 0, 7, 4,
    0, 0, 5, 2, 0, 6, 3, 0, 0
]}`;

const invalid_board_json_missing_key: string = `
{
    "error": [
        3, 0, 6, 5, 0, 8, 4, 0, 0,
        5, 2, 0, 0, 0, 0, 0, 0, 0,
        0, 8, 7, 0, 0, 0, 0, 3, 1,
        0, 0, 3, 0, 1, 0, 0, 8, 0,
        9, 0, 0, 8, 6, 3, 0, 0, 5,
        0, 5, 0, 0, 9, 0, 6, 0, 0,
        1, 3, 0, 0, 0, 0, 2, 5, 0,
        0, 0, 0, 0, 0, 0, 0, 7, 4,
        0, 0, 5, 2, 0, 6, 3, 0, 0
    ]
}
`;

const invalid_board_few_numbers_json: string = `
{
    "sudoku_board": [
        3, 0, 6, 5, 0, 8, 4, 0, 0,
        5, 2, 0, 0, 0, 0, 0, 0, 0,
        0, 8, 7, 0, 0, 0, 0, 3, 1,
        0, 0, 3, 0, 1, 0, 0, 8, 0,
        9, 0, 0, 8, 6, 3, 0, 0, 5,
        0, 5, 0, 0, 9, 0, 6, 0, 0,
        1, 3, 0, 0, 0, 0, 2, 5, 0,
        0, 0, 0, 0, 0, 0, 0, 7, 4,
        0, 0, 5, 2, 0, 6, 3
    ]
}`;

const invalid_board_not_list_json: string = `
{
    "sudoku_board":
    "3, 0, 6, 5, 0, 8, 4, 0, 0, 5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 8, 7, 0, 0, 0, 0, 3, 1, 0, 0, 3, 0, 1, 0, 0, 8, 0, 9, 0, 0, 8, 6, 3, 0, 0, 5, 0, 5, 0, 0, 9, 0, 6, 0, 0, 1, 3, 0, 0, 0, 0, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 7, 4, 0, 0, 5, 2, 0, 6, 3, 0, 0"
}`;

const invalid_board_incorrect_integers_json: string = `
{
    "sudoku_board": [
        3, "a", 6, 5, 0, 8, 4, 0, 0,
        5, 2, 0, 0, 0, 0, 0, 0, 0,
        0, 8, 7, 0, 0, 0, 0, 3, 1,
        0, 0, 3, 0, 1, 0, 0, 8, 0,
        9, 0, 0, 8, 6, 3, 0, 0, 5,
        0, 5, 0, 0, 9, 0, 6, 0, 0,
        1, 3, 0, 0, 0, 0, 2, 5, 0,
        0, 0, 0, 0, 0, 0, 0, 7, 4,
        0, 0, 5, 2, 0, 6, 3, 0, 0
    ]
}
`;

export {
    valid_board_1_json, valid_board_easy_sudoku_almost_solved, valid_board_1, valid_board_1_columns, valid_board_1_column_4, valid_board_1_square_2_2,
    valid_board_1_solution, valid_board_easy_sudoku, valid_board_easy_sudoku_solution, valid_board_very_hard,
    valid_board_expert_sudoku, valid_board_expert_sudoku_solution, valid_board_hard_sudoku, valid_board_easy_sudoku_string,
    valid_board_hard_sudoku_solution, invalid_board, invalid_board_json, invalid_board_1_solution,
    invalid_board_json_missing_key, invalid_board_few_numbers_json, invalid_board_not_list_json,
    invalid_board_incorrect_integers_json
}