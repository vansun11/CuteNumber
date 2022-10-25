export class Foo {
  bar() {
    return 'bar'
  }
}

export function isCuteNumberGreaterThan10(numbers: number[]) {

  const evenNumbers: number[] = findAllEvenNumbers(numbers)
  // console.log(evenNumbers)
  const maxNumber: number = findTheMax(evenNumbers)
  console.log(maxNumber)
  return isGreaterThan10(maxNumber)

}

function findAllEvenNumbers(numbers: number[]) {
  return numbers.filter(number => number % 2 === 0)
}

function findTheMax(evenNumbers: number[]): number {
  return Math.max(...evenNumbers)
}

function isGreaterThan10(maxNumber: number) {
  return maxNumber > 10
}

