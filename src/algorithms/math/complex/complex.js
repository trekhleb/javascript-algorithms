function degToRad(deg) {
  return deg * (180 / Math.PI);
}

class Complex {
  /**
   * z = a + ib = r*e^(i*theta)
   * where z is complex number
   * @param {number} a - real part of complex number
   * @param {number} b - imaginary part of complex number
   */
  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.eulerForm = {
      angle: this.getAngle(),
      r: this.mod(),
    };
  }
  /**
   * @returns {Object} Complex Object contaning a and b ;
   */
  get getComplexVar() {
    return {
      a: this.a,
      b: this.b,
    };
  }

  update() {
    this.eulerForm.angle = this.getAngle();
    this.eulerForm.r = this.mod();
  }

  /**
   * z = a + ib
   * where z is complex number
   * @param {Object} z - is simple object or Complex class object
   * @param {number} z.a - real part;
   * @param {number} z.b - imaginary part;
   */
  set setComplexVar(z) {
    if (z instanceof Complex) {
      this.a = z.a;
      this.b = z.b;
      this.update();
    } else if (z instanceof Object) {
      if (z.a !== undefined || z.b !== undefined) {
        this.a = z.a;
        this.b = z.b;
        this.update();
      }
    } else {
      const error = new Error('Parameter should be Complex type or Object Contain a and b!');
      throw error;
    }
  }
}

/**
 * Gives Back Conjugate of Complex number
 * z = a + ib ;
 * then z conjugate is a - ib
 * @returns {Complex}
 */

Complex.prototype.conjugate = function () {
  return new Complex(this.a, -this.b);
};


/**
 * @return {number}
 * returns modulas of complex |a + ib| = (a^2 + b^2)^(1/2)
 */

Complex.prototype.mod = function () {
  return Math.sqrt((this.a ** 2) + (this.b ** 2));
};

/**
 * @param {Complex} z
 */
Complex.prototype.mul = function (z) {
  if (z instanceof Complex) {
    const {
      a,
      b,
    } = this.getComplexVar;
    this.a = (a * z.a) - (b * z.b);
    this.b = (a * z.b) + (b * z.a);
    this.update();
  } else {
    const error = new Error('Parameter should be Complex type!');
    throw error;
  }
};

/**
 * @param {Complex} z
 */
Complex.prototype.div = function (z) {
  if (z instanceof Complex) {
    this.mul(z.conjugate());
    const temp = z;
    temp.mul(temp.conjugate());
    const div = temp.Re();
    this.a = this.a / div;
    this.b = this.b / div;
    this.update();
  } else {
    const error = new Error('Parameter should be Complex type!');
    throw error;
  }
};

/**
 * @param {Complex} z
 */
Complex.prototype.add = function (z) {
  if (z instanceof Complex) {
    this.a += z.a;
    this.b += z.b;
    this.update();
  } else {
    const error = new Error('Parameter should be Complex type!');
    throw error;
  }
};

/**
 * @param {Complex} z
 */
Complex.prototype.sub = function (z) {
  if (z instanceof Complex) {
    this.a -= z.a;
    this.b -= z.b;
    this.update();
  } else {
    const error = new Error('Parameter should be Complex type!');
    throw error;
  }
};

/**
 * @return {number}
 * returns the angle between real line and imaginary line
 */

Complex.prototype.getAngle = function () {
  let theta = Math.atan(Math.abs(this.b) / Math.abs(this.a));

  if (this.b > 0 && this.a < 0) {
    theta = Math.PI - theta;
  } else if (this.a < 0 && this.b < 0) {
    theta = -(Math.PI - theta);
  } else if (this.a > 0 && this.b < 0) {
    theta = -theta;
  }
  theta = degToRad(theta);
  return theta;
};

/**
 * @return {Object}
 * returns the Object contaning angle and r
 */

Complex.prototype.euler = function () {
  return this.eulerForm;
};

/**
 * @return {number}
 * returns Real part of complex number, Re(z)
 */

Complex.prototype.Re = function () {
  return this.a;
};

/**
 * @return {number}
 * returns Imaginary part of complex number, Im(z)
 */

Complex.prototype.Im = function () {
  return this.b;
};

/**
 * @return {bool}
 * returns true if it Purely Real
 */

Complex.prototype.purelyRe = function () {
  if (!this.b) {
    return true;
  }
  return false;
};

/**
 * @return {bool}
 * returns true if it Purely Real
 */

Complex.prototype.purelyIm = function () {
  return !this.purelyRe();
};

/**
 * @return {Complex}
 * returns Inverse of Complex number
 */

Complex.prototype.inverse = function () {
  const temp = this;
  const one = new Complex(1, 0);
  one.div(temp);
  return one;
};

/**
 * @return {Array}
 * returns Array containing square root of Complex number
 */

Complex.prototype.sqrt = function () {
  const a = Math.sqrt((this.mod() + this.a) / 2);
  const b = Math.sqrt((this.mod() - this.a) / 2);
  const roots = [];
  if (this.b > 0) {
    roots.push(new Complex(a, b));
    roots.push(new Complex(-a, -b));
  } else {
    roots.push(new Complex(a, -b));
    roots.push(new Complex(-a, b));
  }
  return roots;
};


/**
 * @return {String}
 * returns the iota^n or i^n
 */

Complex.iPower = function (n) {
  const pow = n % 4;

  if (pow === 0) return '1';
  else if (pow === 1) return 'i';
  else if (pow === 2) return '-1';
  else if (pow === 3) return '-i';

  return '0';
};

export default Complex;
