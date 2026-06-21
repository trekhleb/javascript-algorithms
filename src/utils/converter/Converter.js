// Length — mm, cm, m, km, inch, foot, mile
// Weight — mg, g, kg, lb, oz
// Temperature — Celsius, Fahrenheit, Kelvin
// Digital storage — bits, bytes, KB, MB, GB, TB
// Time — ms, seconds, minutes, hours, days

export default class Converter {
  /**
       * Converts a value from one unit to another.
       * @param {number} value - The numeric value to convert.
       * @param {string} fromUnit - The unit to convert from (e.g. 'km').
       * @param {string} toUnit - The unit to convert to (e.g. 'mile').
       * @returns {number}
       */
  convert(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;

    const fromFactor = Converter.conversionMap[fromUnit];
    const toFactor = Converter.conversionMap[toUnit];

    if (fromFactor === undefined) {
      throw new Error(`Unknown unit: "${fromUnit}"`);
    }
    if (toFactor === undefined) {
      throw new Error(`Unknown unit: "${toUnit}"`);
    }

    if (!Converter.sameCategory(fromUnit, toUnit)) {
      throw new Error(`Cannot convert "${fromUnit}" to "${toUnit}": different categories.`);
    }

    // Convert: value -> base unit -> target unit
    return (value * fromFactor) / toFactor;
  }

  // <--------  Length (base unit: meter)  -------->

  /**
    * Converts a length value from one unit to another.
    * @param {number} value
    * @param {string} fromUnit - One of: 'mm', 'cm', 'm', 'km', 'inch', 'foot', 'yard', 'mile'
    * @param {string} toUnit
    * @returns {number}
    */
  convertLength(value, fromUnit, toUnit) {
    if (!Converter.lengthUnits.includes(fromUnit) || !Converter.lengthUnits.includes(toUnit)) {
      throw new Error('Both units must be valid length units.');
    }
    return this.convert(value, fromUnit, toUnit);
  }

  /**
         * Converts a weight value from one unit to another.
         * @param {number} value
         * @param {string} fromUnit - One of: 'mg', 'g', 'kg', 'lb', 'oz'
         * @param {string} toUnit
         * @returns {number}
         */
  convertWeight(value, fromUnit, toUnit) {
    if (!Converter.weightUnits.includes(fromUnit) || !Converter.weightUnits.includes(toUnit)) {
      throw new Error('Both units must be valid weight units.');
    }
    return this.convert(value, fromUnit, toUnit);
  }

  // <---- Temperature needs special handling (formulas, not ratios) ---->
  /**
       * Converts a temperature value from one unit to another.
       * @param {number} value
       * @param {string} fromUnit - One of: 'C', 'F', 'K'
       * @param {string} toUnit
       * @returns {number}
       */
  convertTemperature(value, fromUnit, toUnit) {
    if (
      !Converter.temperatureUnits.includes(fromUnit)
            || !Converter.temperatureUnits.includes(toUnit)
    ) {
      throw new Error('Both units must be valid temperature units.');
    }
    return Converter.convertTemperatureHelper(value, fromUnit, toUnit);
  }

  /**
     * Converts a digital storage value from one unit to another.
     * @param {number} value
     * @param {string} fromUnit - One of: 'bit', 'byte', 'KB', 'MB', 'GB', 'TB'
     * @param {string} toUnit
     * @returns {number}
     */
  convertStorage(value, fromUnit, toUnit) {
    if (
      !Converter.storageUnits.includes(fromUnit)
            || !Converter.storageUnits.includes(toUnit)) {
      throw new Error('Both units must be valid digital storage units.');
    }
    return this.convert(value, fromUnit, toUnit);
  }

  /**
     * Converts a time value from one unit to another.
     * @param {number} value
     * @param {string} fromUnit - One of: 'ms', 'second', 'minute', 'hour', 'day'
     * @param {string} toUnit
     * @returns {number}
     */
  convertTime(value, fromUnit, toUnit) {
    if (!Converter.timeUnits.includes(fromUnit)
            || !Converter.timeUnits.includes(toUnit)) {
      throw new Error('Both units must be valid time units.');
    }
    return this.convert(value, fromUnit, toUnit);
  }

  // <---------- Static helpers ---------->

  /**
    * Checks whether two units belong to the same category.
    * @param {string} unitA
    * @param {string} unitB
    * @returns {boolean}
    */
  static sameCategory(unitA, unitB) {
    const categories = [
      Converter.lengthUnits,
      Converter.weightUnits,
      Converter.storageUnits,
      Converter.timeUnits,
    ];
    return categories.some(
      (category) => category.includes(unitA) && category.includes(unitB),
    );
  }

  /**
     * Handles temperature conversion using explicit formulas.
     * @param {number} value
     * @param {string} fromUnit - 'C', 'F', or 'K'
     * @param {string} toUnit - 'C', 'F', or 'K'
     * @returns {number}
     */

  static convertTemperatureHelper(value, fromUnit, toUnit) {
    if (String(fromUnit) === String(toUnit)) return value;

    // Convert to Celsius first, then to target
    let celsius;
    switch (fromUnit) {
      case 'C': celsius = value; break;
      case 'F': celsius = (value - 32) * (5 / 9); break;
      case 'K': celsius = value - 273.15; break;
      default: throw new Error(`Unknown temperature unit: "${fromUnit}"`);
    }

    switch (toUnit) {
      case 'C': return celsius;
      case 'F': return celsius * (9 / 5) + 32;
      case 'K': return celsius + 273.15;
      default: throw new Error(`Unknown temperature unit: "${toUnit}"`);
    }
  }

  // <---------- Unit lists (used for category validation) ---------->

  /** @returns {string[]} */
  static get lengthUnits() {
    return ['mm', 'cm', 'm', 'km', 'inch', 'foot', 'yard', 'mile'];
  }

  /** @returns {string[]} */
  static get weightUnits() {
    return ['mg', 'g', 'kg', 'lb', 'oz'];
  }

  /** @returns {string[]} */
  static get temperatureUnits() {
    return ['C', 'F', 'K'];
  }

  /** @returns {string[]} */
  static get storageUnits() {
    return ['bit', 'byte', 'KB', 'MB', 'GB', 'TB'];
  }

  /** @returns {string[]} */
  static get timeUnits() {
    return ['ms', 'second', 'minute', 'hour', 'day'];
  }

  // <--------- Conversion map (each value = how many base units this unit equals) --------->

  /**
     * A flat map of unit -> base-unit factor.
     * Base units: meter | gram | bit | millisecond
     * @returns {Object.<string, number>}
     */

  static get conversionMap() {
    return {
      // Length (base: meter)
      mm: 0.001,
      cm: 0.01,
      m: 1,
      km: 1000,
      inch: 0.0254,
      foot: 0.3048,
      yard: 0.9144,
      mile: 1609.344,

      // Weight (base: gram)
      mg: 0.001,
      g: 1,
      kg: 1000,
      lb: 453.592,
      oz: 28.3495,

      // Digital storage (base: bit)
      bit: 1,
      byte: 8,
      KB: 8000,
      MB: 8000000,
      GB: 8000000000,
      TB: 8000000000000,

      // Time (base: millisecond)
      ms: 1,
      second: 1000,
      minute: 60000,
      hour: 3600000,
      day: 86400000,
    };
  }
}
