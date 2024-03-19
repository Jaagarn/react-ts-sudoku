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
    private _value: number;

    public get value() {
      return this._value;
    }

    public set value(value: number) {
      if(value > 9 || value < 0) throw new RangeError("Value has to be between 0-9 ");
      this._value = value;
    }

    constructor(x: number, y: number, id: number, value: number = 0) {
        if(value > 9 || value < 0) throw new RangeError("Value has to be between 0-9 ");
        this.x = x;
        this.y = y;
        this.id = id;
        this._value = value;
    }
}

export { CellData };
export type { CellDataProps };
