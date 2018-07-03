class Vector {
  /**
   * @param {number} x - x coordinate
   * @param {number} y - y coordinate
   * @param {number} z - z coordinate which is optinal
   */
  constructor(x, y, z = undefined) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * @returns {Object} Object contaning x and y or x, y and z ;
   */

  get getPoints() {
    let points;
    const z = typeof (this.z) !== 'undefined' ? this.z : false;
    if (!z) {
      points = {
        x: this.x,
        y: this.y,
      };
    } else {
      points = {
        x: this.x,
        y: this.y,
        z: this.z,
      };
    }

    return points;
  }

  /**
   * r = xi + yj + zk
   * where r is a vector
   * @param {Object} points   - is simple object conatining coordinates
   * @param {number} points.x - x coordinate;
   * @param {number} points.y - y coordinate;
   * @param {number=} points.z - z coordinate;
   */
  set setPoints(points) {
    const z = typeof (points.z) !== 'undefined' ? points.z : false;
    if (!z) {
      this.x = points.x;
      this.y = points.y;
    } else {
      this.x = points.x;
      this.y = points.y;
      this.z = points.z;
    }
  }
  /**
   * @param {Vector} vector object
   * @returns {Object} object containg Cross Product
   */
  crossProduct(vector) {
    const selfZ = typeof (this.z) !== 'undefined' ? this.z : 0;
    const vectorZ = typeof (vector.z) !== 'undefined' ? vector.z : 0;
    const iCap = ((this.y * vectorZ) - (selfZ * vector.y));
    let jCap = ((this.x * vectorZ) - (selfZ * vector.x));
    const kCap = ((this.x * vector.y) - (this.y * vector.x));
    if (jCap !== 0) {
      jCap *= -1;
    }
    return {
      x: iCap,
      y: jCap,
      z: kCap,
    };
  }
  /**
   * @param {Vector} vector object
   * @returns {number} Dot Product containg coordinates
   */
  dotProduct(vector) {
    const selfZ = typeof (this.z) !== 'undefined' ? this.z : 0;
    const vectorZ = typeof (vector.z) !== 'undefined' ? vector.z : 0;
    const result = (this.x * vector.x) + (this.y * vector.y) + (selfZ * vectorZ);
    return result;
  }

  /**
   * @returns {number} which contains Magnitude of Vector
   */

  magnitude() {
    const selfZ = typeof (this.z) !== 'undefined' ? this.z : 0;
    return Math.sqrt((this.x ** 2) + (this.y ** 2) + (selfZ ** 2));
  }
  /**
   * @param {Vector} vector object
   * @returns {number} angle between to vectors
   */
  angle(vector) {
    const dotProduct = this.dotProduct(vector);
    const selfMagnitude = this.magnitude();
    const vectorMagnitude = vector.magnitude();

    const cos = dotProduct / (selfMagnitude * vectorMagnitude);
    return Math.acos(cos);
  }
  /**
   * @param {number}  constant number for multipication
   */
  mult(constant) {
    if (typeof (constant) !== 'number') {
      const error = new Error('Parameter should be a Number!');
      throw error;
    }
    if (typeof (this.z) !== 'undefined') {
      this.x *= constant;
      this.y *= constant;
      this.z *= constant;
    } else {
      this.x *= constant;
      this.y *= constant;
      this.z = undefined;
    }
  }
  /**
   * @param {number}  constant number for division
   */
  div(constant) {
    if (typeof (constant) !== 'number') {
      const error = new Error('Parameter should be a Number!');
      throw error;
    }
    if (typeof (this.z) !== 'undefined') {
      this.x /= constant;
      this.y /= constant;
      this.z /= constant;
    } else {
      this.x /= constant;
      this.y /= constant;
      this.z = undefined;
    }
  }
  /**
   * @return {Vector} unit vector
   */
  unitVector() {
    const vector = new Vector(this.x, this.y, this.z);
    vector.div(vector.magnitude());
    return vector;
  }
  /**
   * @param {Vector}  vector for addition of vectors
   */
  add(vector) {
    if (typeof (this.z) !== 'undefined' && typeof (vector.z) !== 'undefined') {
      this.x += vector.x;
      this.y += vector.y;
      this.z += vector.z;
    } else {
      this.x += vector.x;
      this.y += vector.y;
      this.z = undefined;
    }
  }
  /**
   * @param {Vector}  vector for subtraction of vectors
   */
  sub(vector) {
    if (typeof (this.z) !== 'undefined' && typeof (vector.z) !== 'undefined') {
      this.x -= vector.x;
      this.y -= vector.y;
      this.z -= vector.z;
    } else {
      this.x -= vector.x;
      this.y -= vector.y;
      this.z = undefined;
    }
  }
}
export default Vector;
