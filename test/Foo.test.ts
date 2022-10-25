import { Foo } from '../src/Foo'
import { isCuteNumberGreaterThan10 } from '../src/Foo'

describe('Foo', () => {
  it('bar', () => {
    expect(new Foo().bar()).toEqual('bar')
  })

  it('should return true when given special numbers', () => {
    const numbers = [1, 3, 4, 5, 7, 8, 20]

    const result: boolean = isCuteNumberGreaterThan10(numbers)

    expect(result).toBeTruthy()
    // expect(result).toBeFalsy()
  })

})
