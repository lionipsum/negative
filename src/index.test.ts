import test from 'ava'
import { negative } from './index'
interface Test {
  name: string
  input: number,
  expected: number
}

const data: Test[] = [
  {
    name: 'positive number',
    input: 1,
    expected: -1
  },
  {
    name: 'negative number',
    input: -1,
    expected: -1
  },
  {
    name: 'handles zero',
    input: 0,
    expected: 0
  }
]

data.forEach(({ name, input, expected }) => {
  test(name, (t) => {
    const actual = negative(input)
    t.is(actual, expected)
  })
})
