import { CellDataProps } from "../solver/CellData"

const Cell = ({ value, id, x, y }: CellDataProps) => {

    let values = `${id}: ${value}`
    return (
        <>
            <input className="cell-style" type="text" name="digit-input" value={values} />
        </>
    )
}

export { Cell }