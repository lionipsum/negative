import test from 'ava'
import { negative } from './index'
interface Test {
  name: string
  input: number | string,
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
  },
  {
    name: 'handles floats',
    input: 0.1,
    expected: -0.1
  },
  {
    name: 'handles positive strings',
    input: '1',
    expected: -1
  },
  {
    name: 'handles negative string',
    input: '-1',
    expected: -1
  },
  {
    name: 'handles zero strings',
    input: '0',
    expected: 0
  }

]

data.forEach(({ name, input, expected }) => {
  test(name, (t) => {
    const actual = negative(input)
    t.is(actual, expected)
  })
})
