import {
    pivotIndex1,
    searchInsert1,
    merge1
} from '../../data-structure/array/code';

test('寻找数组的中心索引724', () => {
    expect(pivotIndex1([1, 7, 3, 6, 5, 6])).toBe(3);
    expect(pivotIndex1([1, 2, 3])).toBe(-1);
});

test('搜索插入位置35', () => {
    expect(searchInsert1([1, 3, 5, 6],1)).toBe(0);
    expect(searchInsert1([1, 3,3, 5, 6],3)).toBe(1);
});

test('合并区间 56', () => {
    expect(merge1([[1,3],[2,6],[8,10],[15,18]])).toStrictEqual([[1,6],[8,10],[15,18]]);
    expect(merge1([[1,4],[4,5]])).toStrictEqual([[1,5]]);
});