// @ts-check
import Vector from '../vector';

const vector2D = new Vector(2, 3);
const vector3D = new Vector(2, 3, 4);

test('Getting of Vectors', () => {
  expect(vector2D.getPoints).toEqual({
    x: 2,
    y: 3,
  });

  expect(vector3D.getPoints).toEqual({
    x: 2,
    y: 3,
    z: 4,
  });
});

test('Setting of Vectors', () => {
  vector2D.setPoints = {
    x: 7,
    y: 8,
  };
  vector3D.setPoints = {
    x: 7,
    y: 8,
    z: 9,
  };
  expect(vector2D.getPoints).toEqual({
    x: 7,
    y: 8,
  });

  expect(vector3D.getPoints).toEqual({
    x: 7,
    y: 8,
    z: 9,
  });
});

test('Cross Product of two Vectors', () => {
  expect(vector2D.crossProduct(vector3D)).toEqual({
    x: 72,
    y: -63,
    z: 0,
  });

  expect(vector3D.crossProduct(vector2D)).toEqual({
    x: -72,
    y: 63,
    z: 0,
  });

  let vec = new Vector(2, 3);

  expect(vector2D.crossProduct(vec)).toEqual({
    x: 0,
    y: 0,
    z: 5,
  });
  vec = new Vector(2, 3, 4);
  expect(vector3D.crossProduct(vec)).toEqual({
    x: 5,
    y: -10,
    z: 5,
  });
});

test('Dot Product of two Vectors', () => {
  expect(vector2D.dotProduct(vector3D)).toEqual(113);

  expect(vector3D.dotProduct(vector2D)).toEqual(113);

  let vec = new Vector(2, 3);
  expect(vector2D.dotProduct(vec)).toEqual(38);

  vec = new Vector(2, 3, 4);
  expect(vector3D.dotProduct(vec)).toEqual(74);

  vec = new Vector(2, 3.57538765);
  expect(vector2D.dotProduct(vec)).toBeCloseTo(42.6031012);

  vec = new Vector(2, 3.57538765, 4.2239);
  expect(vector3D.dotProduct(vec)).toBeCloseTo(80.6182012);
});

test('Magnitude of Vector', () => {
  expect(vector2D.magnitude()).toBeCloseTo(10.63014581273465);

  expect(vector3D.magnitude()).toBeCloseTo(13.92838827718412);

  const vec = new Vector(2.342, 3.458376);
  expect(vec.magnitude()).toBeCloseTo(4.176760533879816);
});

test('Angle between two Vector', () => {
  expect(vector2D.angle(vector3D)).toBeCloseTo(0.7025452889921332);

  expect(vector3D.angle(vector2D)).toBeCloseTo(0.7025452889921332);

  const vec = new Vector(2.342, 3.458376);
  expect(vector2D.angle(vec)).toBeCloseTo(0.1235729200172077);
  expect(vector3D.angle(vec)).toBeCloseTo(0.7115045996727678);
});

test('Multiplying Vector with a constant value', () => {
  vector2D.mult(5);
  expect(vector2D).toEqual(new Vector(35, 40));

  vector3D.mult(5);
  expect(vector3D).toEqual(new Vector(35, 40, 45));

  const vec = new Vector(2.342, 3.458376);
  vec.mult(5);

  expect(vec).toEqual(new Vector(11.71, 17.29188));
});

test('Dividing Vector with a constant value', () => {
  vector2D.div(5);
  expect(vector2D).toEqual(new Vector(7, 8));

  vector3D.div(5);
  expect(vector3D).toEqual(new Vector(7, 8, 9));
});

test('Dividing Vector with a constant value', () => {
  vector3D.setPoints = {
    x: 70,
    y: 84,
    z: 92,
  };
  const vec = vector3D.unitVector();
  const points = vec.getPoints;

  expect(points.x).toBeCloseTo(0.489857961);
  expect(points.y).toBeCloseTo(0.587829554);
  expect(points.z).toBeCloseTo(0.643813321);
});

test('Adding two Vector', () => {
  vector2D.add(vector3D);
  expect(vector2D).toEqual(new Vector(77, 92));
});

test('Subtarcting two Vector', () => {
  vector2D.sub(vector3D);
  expect(vector2D).toEqual(new Vector(7, 8));
});
