interface CellDataProps {
    x: number;
    y: number;
    id: number;
    value: number;
}

class CellData {
    readonly x: number;
    readonly y: number;
    readonly id: number;
    value: number;

    constructor(x: number, y: number, id: number, value: number = 0) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.value = value;
    }
}

export { CellData };
export type { CellDataProps };
