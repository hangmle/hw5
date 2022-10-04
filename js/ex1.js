/* HW5
  Example 1 JavaScript code
*/

class Square {
  constructor(side) {
    this.side = side;
  }
  peri() {
    return this.side*4;
  }
  area() {
    return this.side**2;
  }
  diag() {
    return (Math.sqrt(2)*this.side**2).toFixed(3)
  }
  desc() {
    return `Square with side ${this.side} has perimeter of ${this.peri()}, area of ${this.area()}, and diagonal of ${this.diag()}`
  }
}

const squares = [];

squares[0] = new Square(2);
squares[1] = new Square(3);
squares[2] = new Square(4);

squares.forEach(square => {
  console.log(square.desc());
})