//attempt at unit testing. Novice user to Jest

const { expect } = require('@jest/globals')
const parseInput = require('./merge.js')

test('should merge overlapping intervals', () => {
    const runString = "1,2-5,6,10-12,11-15"
    expect(parseInput(runString).toEqual[ [ 1, 1 ], [ 2, 5 ], [ 6, 6 ], [ 10, 15 ] ])
});

test('Value Error if string is null'), () =>{
    expect(parseInput(null)).toBeNull();
}

test('should merge into one array', () => {
    const newString = "1-5, 2-10,1-10"
    expect(parseInput(newString).toBe[ [ 1, 10 ] ])
});