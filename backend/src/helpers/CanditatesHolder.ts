class CanditatesHolder {
  readonly x: number;
  readonly y: number;
  public canditates: Set<number>;

  constructor(x: number, y: number, canditates: Set<number>) {
    this.x = x;
    this.y = y;
    this.canditates = canditates;
  }
}

export {CanditatesHolder}