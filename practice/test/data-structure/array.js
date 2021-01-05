import {pivotIndex1} from '../../data-structure/array/code';


test('寻找数组的中心索引724', () => {
    expect(pivotIndex1([1, 7, 3, 6, 5, 6])).toBe(3);
    expect(pivotIndex1([1, 2, 3])).toBe(-1);
});