import { CellData } from "../solver/CellData";
import { Cell } from "./Cell";
import {arrayToCells} from "../helpers/CellParser"
import { valid_board_1 } from "../testdata/test_boards";

const Board = () => {
    const boardArray: Array<CellData> = arrayToCells(valid_board_1);

    return (
        <>
            <div className="board-style">
                {boardArray.map((cell) => (
                    <Cell 
                        key={cell.id}
                        value={cell.value}
                        id={cell.id}
                        x={cell.x}
                        y={cell.y} />
                ))}
            </div>
        </>)
}

export { Board }