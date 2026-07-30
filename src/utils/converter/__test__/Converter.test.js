import Converter from '../Converter';
// units must be in string
// Length — mm, cm, m, km, inch, foot, mile
// Weight — mg, g, kg, lb, oz
// Temperature — Celsius, Fahrenheit, Kelvin
// Digital storage — bits, bytes, KB, MB, GB, TB
// Time — ms, seconds, minutes, hours, days

describe('Converter', () => {
  const converter = new Converter();

  // Length

  describe('convertLength', () => {
    it('should convert kilometers to meters', () => {
      expect(converter.convertLength(1, 'km', 'm')).toBe(1000);
    });

    it('should convert meters to centimeters', () => {
      expect(converter.convertLength(1, 'm', 'cm')).toBe(100);
    });

    it('should convert miles to kilometers', () => {
      expect(converter.convertLength(1, 'mile', 'km')).toBeCloseTo(1.60934, 3);
    });

    it('should convert inches to centimeters', () => {
      expect(converter.convertLength(1, 'inch', 'cm')).toBeCloseTo(2.54, 5);
    });

    it('should convert foot to meter', () => {
      expect(converter.convertLength(1, 'foot', 'm')).toBeCloseTo(0.3048, 4);
    });

    it('should return same value when converting to the same unit', () => {
      expect(converter.convertLength(5, 'km', 'km')).toBe(5);
    });

    it('should handle zero value', () => {
      expect(converter.convertLength(0, 'km', 'm')).toBe(0);
    });

    it('should throw for invalid length unit', () => {
      expect(() => converter.convertLength(1, 'km', 'kg')).toThrow();
    });
  });

  // Weight

  describe('convertWeight', () => {
    it('should convert kilograms to grams', () => {
      expect(converter.convertWeight(1, 'kg', 'g')).toBe(1000);
    });

    it('should convert grams to milligrams', () => {
      expect(converter.convertWeight(1, 'g', 'mg')).toBe(1000);
    });

    it('should convert pounds to kilograms', () => {
      expect(converter.convertWeight(1, 'lb', 'kg')).toBeCloseTo(0.453592, 4);
    });

    it('should convert ounces to grams', () => {
      expect(converter.convertWeight(1, 'oz', 'g')).toBeCloseTo(28.3495, 3);
    });

    it('should return same value when converting to the same unit', () => {
      expect(converter.convertWeight(10, 'kg', 'kg')).toBe(10);
    });

    it('should handle zero value', () => {
      expect(converter.convertWeight(0, 'kg', 'g')).toBe(0);
    });

    it('should throw for invalid weight unit', () => {
      expect(() => converter.convertWeight(1, 'kg', 'km')).toThrow();
    });
  });

  // Temperature

  describe('convertTemperature', () => {
    it('should convert Celsius to Fahrenheit', () => {
      expect(converter.convertTemperature(0, 'C', 'F')).toBe(32);
      expect(converter.convertTemperature(100, 'C', 'F')).toBe(212);
    });

    it('should convert Fahrenheit to Celsius', () => {
      expect(converter.convertTemperature(32, 'F', 'C')).toBe(0);
      expect(converter.convertTemperature(212, 'F', 'C')).toBe(100);
    });

    it('should convert Celsius to Kelvin', () => {
      expect(converter.convertTemperature(0, 'C', 'K')).toBe(273.15);
      expect(converter.convertTemperature(100, 'C', 'K')).toBe(373.15);
    });

    it('should convert Kelvin to Celsius', () => {
      expect(converter.convertTemperature(273.15, 'K', 'C')).toBe(0);
    });

    it('should convert Fahrenheit to Kelvin', () => {
      expect(converter.convertTemperature(32, 'F', 'K')).toBeCloseTo(273.15, 2);
    });

    it('should return same value when converting to the same unit', () => {
      expect(converter.convertTemperature(100, 'C', 'C')).toBe(100);
    });

    it('should handle negative temperatures', () => {
      expect(converter.convertTemperature(-40, 'C', 'F')).toBe(-40);
    });

    it('should throw for invalid temperature unit', () => {
      expect(() => converter.convertTemperature(100, 'C', 'X')).toThrow();
    });
  });

  // Digital Storage

  describe('convertStorage', () => {
    it('should convert bytes to bits', () => {
      expect(converter.convertStorage(1, 'byte', 'bit')).toBe(8);
    });

    it('should convert kilobytes to bytes', () => {
      expect(converter.convertStorage(1, 'KB', 'byte')).toBe(1000);
    });

    it('should convert gigabytes to megabytes', () => {
      expect(converter.convertStorage(1, 'GB', 'MB')).toBe(1000);
    });

    it('should convert terabytes to gigabytes', () => {
      expect(converter.convertStorage(1, 'TB', 'GB')).toBe(1000);
    });

    it('should return same value when converting to the same unit', () => {
      expect(converter.convertStorage(5, 'MB', 'MB')).toBe(5);
    });

    it('should handle zero value', () => {
      expect(converter.convertStorage(0, 'GB', 'MB')).toBe(0);
    });

    it('should throw for invalid storage unit', () => {
      expect(() => converter.convertStorage(1, 'GB', 'km')).toThrow();
    });
  });

  // Time

  describe('convertTime', () => {
    it('should convert seconds to milliseconds', () => {
      expect(converter.convertTime(1, 'second', 'ms')).toBe(1000);
    });

    it('should convert minutes to seconds', () => {
      expect(converter.convertTime(1, 'minute', 'second')).toBe(60);
    });

    it('should convert hours to minutes', () => {
      expect(converter.convertTime(1, 'hour', 'minute')).toBe(60);
    });

    it('should convert days to hours', () => {
      expect(converter.convertTime(1, 'day', 'hour')).toBe(24);
    });

    it('should convert days to seconds', () => {
      expect(converter.convertTime(1, 'day', 'second')).toBe(86400);
    });

    it('should return same value when converting to the same unit', () => {
      expect(converter.convertTime(3, 'hour', 'hour')).toBe(3);
    });

    it('should handle zero value', () => {
      expect(converter.convertTime(0, 'day', 'ms')).toBe(0);
    });

    it('should throw for invalid time unit', () => {
      expect(() => converter.convertTime(1, 'hour', 'kg')).toThrow();
    });
  });

  // Cross-category guard

  describe('convert (cross-category)', () => {
    it('should throw when mixing categories', () => {
      expect(() => converter.convert(1, 'km', 'kg')).toThrow(
        'Cannot convert "km" to "kg": different categories.',
      );
    });

    it('should throw for completely unknown units', () => {
      expect(() => converter.convert(1, 'xyz', 'm')).toThrow('Unknown unit: "xyz"');
    });
  });
});
