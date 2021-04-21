//attempt at unit testing. Novice user

const { expect } = require('@jest/globals')
const parseInput = require('./merge.js')

test('should merge overlapping intervals', () => {
    const runString = "1,2-5,6,10-12,11-15"
    expect(parseInput(runString).toEqual[ [ 1, 1 ], [ 2, 5 ], [ 6, 6 ], [ 10, 15 ] ])
});