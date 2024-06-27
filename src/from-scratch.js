class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4;
  }
}

class Rectangle extends Quadrilateral {
  constructor(side1, side2) {
    super(side1, side2, side1, side2);
    this.getPerimeter(this);
  }

  getArea() {
    return this.side1 * this.side2;
  }

}

class Square {

}

/* Be creative with this one! */
class Person {

}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
