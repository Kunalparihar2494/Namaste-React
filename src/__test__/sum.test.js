import { sum } from "../components/sum";


test("should calculate sum of two function", () => {
  const result = sum(1,2);

  expect(result).toBe(3)
});
