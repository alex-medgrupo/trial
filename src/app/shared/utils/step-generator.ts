export function* stepGenerator(stepQuantity: number) {
  for (let index = 1; index <= stepQuantity; index++) {
    yield index;
  }
}
