const bubbleSort = require('./bubbleSort');

describe('BubbleSort() Test', () => {

    it('Should yield sorted array', () =>{
        expect(bubbleSort([0, -1, 4, 2])).toStrictEqual([-1, 0, 2, 4])
    });


})