import { Intersect } from "../Set_Intersection";

describe("Test for Set Intersection", () => {
  it("The function is expected to return the intersect of two sets", () => {
    expect(Intersect(new Set([1, 2, 3, 5]), new Set([7, 6, 2, 5]))).toEqual([
      2, 5,
    ]);
    expect(Intersect(new Set([1, 2, 3, 5]), new Set([7, 6, 2, 5]))).not
      .toBeNull;
  });
});
