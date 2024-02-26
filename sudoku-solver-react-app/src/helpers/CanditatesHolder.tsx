class CanditatesHolder {
  readonly x: number;
  readonly y: number;
  private _canditates: Set<number>;

  public addCanditate (canditate: number) {
    this._canditates.add(canditate);
  }

  public removeCanditate (canditate: number) {
    this._canditates.delete(canditate);
  }

  public getCanditates(): IterableIterator<number> {
    return this._canditates.values();
  }

  public getCanditate(): number {
    return this._canditates.values().next().value;
  }

  constructor(x: number, y: number, canditates: Set<number>) {
    this.x = x;
    this.y = y;
    this._canditates = canditates;
  }
}

export {CanditatesHolder}